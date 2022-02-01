import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import {
  AboutCitiAppItem,
  VerRuler,
  RateAppButton,
  LabelButton,
  BackButton,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/AboutCitiAppScreenStyles'

export default class AboutCitiAppScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <VerRuler height={calcHeight(60)} />
          <LabelButton onPress={() => this.props.navigation.navigate('AccountScreen')} label={Languages.About_CitiApp} icon={Images.arrow_left} />
          <VerRuler height={calcHeight(65)} />
          <RateAppButton
            onPress={() => alert('rate app')}
            label={Languages.CitiApp_in_your_store}
            rate={3.8}
          />
          <VerRuler height={calcHeight(31)} />
          {
            DummyData.about_data.map((item, key) => (
              <AboutCitiAppItem title={item.title} text={item.text} key={key} />
            ))
          }
        </View>

      </View>
    )
  }
}
