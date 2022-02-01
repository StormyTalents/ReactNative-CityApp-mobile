import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import {
  IconButton,
  TextButton,
  VerRuler,
} from '../Components'
import { Images, Languages, DummyData, Colors } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/IdentificationScreenStyles'
import NavigationService from 'Navigation/NavigationService'

class IdentificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topbar}>
          <TouchableOpacity onPress={() => { Keyboard.dismiss(); NavigationService.goBack() }} style={styles.leftbutton}>
            <Text style={styles.lefttext}>
              {Languages.Cancel}
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            {Languages.IDENTIFICATION}
          </Text>
          <Image source={Images.bankid} style={styles.rightimage} />
        </View>
        <View style={styles.secondbar}>
          <Image source={Images.account} style={styles.account} />
          <Text style={styles.name}>
            {DummyData.bankid_data.name}
          </Text>
        </View>
        <TouchableOpacity style={styles.thirdbar}>
          <View style={styles.idcardcontainer}>
            <Image source={Images.idcard} style={styles.idcard} />
          </View>
          <View style={styles.rightcontent}>
            <Text style={styles.bank}>
              {Languages.I_identify_myself_at}
            </Text>
            <Text style={styles.bankname}>
              {DummyData.bankid_data.bank}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder={Languages.Security_Code}
            placeholderTextColor={Colors.gray}
            style={styles.input}></TextInput>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(30)} />
          <IconButton onPress={() => NavigationService.navigate('CheckEmailScreen')} icon={Images.bankid} label={Languages.Identify} />
          <VerRuler height={calcHeight(63)} />
        </View>
      </View>
    )
  }
}
export default IdentificationScreen