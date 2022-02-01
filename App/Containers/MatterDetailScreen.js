import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import {
  VerRuler,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/MatterDetailScreenStyles'

export default class MatterDetailScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(62)} />
          <View style={styles.sectionitem}>
            <Image
              style={styles.titleimage}
              source={DummyData.matter_data[0].type == 0 ? Images.large_questions : (DummyData.matter_data[0].type == 1 ? Images.large_error : (DummyData.matter_data[0].type == 2 ? Images.large_suggestion : Images.large_compliant))} />
            <Text style={styles.titleText}>
              {DummyData.matter_data[0].title}
            </Text>
            <VerRuler height={calcHeight(27)} />
            <ScrollView horizontal={true}>
              <Image source={Images.buttonBackground} style={styles.scrollitem} />
              <Image source={Images.buttonBackground} style={styles.scrollitem} />
              <Image source={Images.buttonBackground} style={styles.scrollitem} />
            </ScrollView>
            <VerRuler height={calcHeight(15)} />
            <View style={styles.grayline}></View>
            <VerRuler height={calcHeight(27)} />
            <Text style={styles.description}>
              {DummyData.matter_data[0].text}
            </Text>
            <VerRuler height={calcHeight(26)} />
            <Text style={styles.description}>
              {Languages.Ticket_ID}
            </Text>
            <VerRuler height={calcHeight(3)} />
            <View style={styles.copycontainer}>
              <Text style={styles.description}>
                {DummyData.matter_data[0].id}
              </Text>
              <TouchableOpacity style={styles.copybutton}>
                <Image source={Images.additional_black} style={styles.copyimage} />
              </TouchableOpacity>
            </View>
            <VerRuler height={calcHeight(23)} />
            <Text style={styles.description}>
              {Languages.Date}
            </Text>
            <Text style={styles.description}>
              {DummyData.my_matter_data[0].date + ' ' + DummyData.my_matter_data[0].time}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
