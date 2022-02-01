import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  BlueButton,
  VerRuler,
  NextItem,
} from '../Components'
import { Images, Languages, ConvertSize } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/GetstartedScreenStyles'

export default class GetstartedScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(62)} />
          <Text style={styles.titleText}>
            {Languages.Welcome_to_CitiApp}
          </Text>
          <Image source={Images.smallLogo} style={styles.smallLogo} />
          <VerRuler height={calcHeight(40)} />
          <NextItem icon={Images.track} title={Languages.Track_your_matters} text={Languages.It_is_those_feelings_that_drive___} />
          <VerRuler height={calcHeight(40)} />
          <NextItem icon={Images.get_know} title={Languages.Get_to_know_your_city} text={Languages.It_is_those_feelings_that_drive___} />
          <VerRuler height={calcHeight(40)} />
          <NextItem icon={Images.get_important} title={Languages.Get_important_updates} text={Languages.It_is_those_feelings_that_drive___} />
          <VerRuler height={calcHeight(118)} />
          <BlueButton onPress={() => this.props.navigation.navigate('HomeScreen')} label={Languages.Next} />
        </View>
      </View>
    )
  }
}
