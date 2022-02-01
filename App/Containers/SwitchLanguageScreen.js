import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  LanguageItem,
  VerRuler,
  MyChildrenItem,
  LabelButton,
  BackButton,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/SwitchLanguageScreenStyles'
import NavigationService from 'Navigation/NavigationService'

export default class SwitchLanguageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
  }
  
  render() {
    let {
      selected
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <VerRuler height={calcHeight(60)} />
          <LabelButton onPress={() => NavigationService.navigate('AccountScreen')} label={Languages.Languages} icon={Images.arrow_left} />
          <VerRuler height={calcHeight(15)} />
          <ScrollView>
            <LanguageItem onPress={() => this.setState({ selected: !this.state.selected })} label={Languages.Svenska} selected={selected} />
            <LanguageItem onPress={() => this.setState({ selected: !this.state.selected })} label={Languages.English} selected={!selected} />
          </ScrollView>
        </View>
      </View>
    )
  }
}
