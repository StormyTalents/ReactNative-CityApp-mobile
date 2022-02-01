import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import {
  CaseDetailComponent,
  VerRuler,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight, calcWidth } from '../Themes/ConvertSize'
import styles from './Styles/CaseDetailScreenStyles'

export default class CaseDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: -1,
    }
  }
  render() {
    let {
      emotion
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.topcontainer}>
            <VerRuler height={calcHeight(50)} />
            <View style={styles.buttongroup}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('MatterScreen')}>
                <Image style={styles.titleimage} source={Images.arrow_left} />
              </TouchableOpacity>
              <Text style={styles.titleText}>
                {Languages.Case_Title}
              </Text>
              <Text>
              </Text>
            </View>
          </View>
          <View style={styles.section}>
            <VerRuler height={calcHeight(20)} />
            <CaseDetailComponent
              date={DummyData.my_matter_data[0].date}
              status={DummyData.my_matter_data[0].status}
              // status={3}
              meeting={true}
              id={DummyData.my_matter_data[0].id}
              title={DummyData.my_matter_data[0].title} />
            <VerRuler height={calcHeight(100)} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
