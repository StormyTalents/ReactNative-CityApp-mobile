import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import {
  SearchComponent,
  VerRuler,
  ContactUsItem,
  FAQItem,
  EmotionComponent,
  LabelButton,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight, calcWidth } from '../Themes/ConvertSize'
import styles from './Styles/FaqDetailScreenStyles'

export default class FaqDetailScreen extends Component {
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
          <Text style={styles.faqlabel}>
            {Languages.FAQS}
          </Text>
          <VerRuler height={calcHeight(11)} />
          <Text style={styles.faqtitle}>
            {DummyData.help_support_faqs[0].faq}
          </Text>
          <VerRuler height={calcHeight(11)} />
          <Text style={styles.faqtext}>
            {DummyData.about_data[0].text}
          </Text>
          <VerRuler height={calcHeight(56)} />
          <Text style={styles.title}>
            {Languages.Was_this_helpful}
          </Text>
          <VerRuler height={calcHeight(14)} />
          <EmotionComponent
            emotion={emotion}
            onPress0={() => this.setState({ emotion: 0 })}
            onPress1={() => this.setState({ emotion: 1 })}
            onPress2={() => this.setState({ emotion: 2 })}
          />
          <Text style={emotion == -1 ? styles.hidefeedback : styles.feedback}>
            {DummyData.feed_back}
          </Text>
          <VerRuler height={calcHeight(27)} />
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
