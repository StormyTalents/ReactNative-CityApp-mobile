import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import {
  FAQAddItem,
  VerRuler,
  FAQLabel,
  FAQItem,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight, calcWidth } from '../Themes/ConvertSize'
import styles from './Styles/CasesIssuesScreenStyles'
import dummyData from '../Themes/DummyData'

export default class CasesIssuesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: dummyData.expanded,
    }
  }
  render() {
    let {
      expanded
    } = this.state;
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(30)} />
          <View style={styles.buttongroup}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpSupportScreen')}>
              <Image source={Images.arrow_left} />
            </TouchableOpacity>
            <Text>
              {Languages.Title_of_page}
            </Text>
            <Text>
            </Text>
          </View>
          <VerRuler height={calcHeight(48)} />
          <FAQLabel label={Languages.Cases_issues} icon={Images.case_issues} />
          <VerRuler height={calcHeight(12)} />
          {
            DummyData.add_faqs.map((item, key) => (
              <FAQAddItem onPress={() => {
                if (expanded[key]) {
                  let { expanded } = this.state;
                  let temp = expanded;
                  temp[key] = false;
                  this.setState({
                    expanded: temp
                  })
                }
                else{
                  let { expanded } = this.state;
                  let temp = expanded;
                  temp[key] = true;
                  this.setState({
                    expanded: temp
                  })
                }

              }} icon={Images.plus} icon1={Images.minus} text={item.text} description={item.description} expanded={expanded[key]} key={key} />
            ))
          }
          <VerRuler height={calcHeight(32)} />
          <Text style={styles.title}>
            {Languages.Related_questions}
          </Text>
          <VerRuler height={calcHeight(7)} />
          {
            DummyData.help_support_faqs.map((item, key) => (
              <FAQItem icon={Images.arrow_right} text={item.faq} key={key} />
            ))
          }
          <VerRuler height={calcHeight(50)} />
        </View>
      </ScrollView>
    )
  }
}
