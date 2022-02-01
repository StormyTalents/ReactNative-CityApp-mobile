import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import {
  SearchComponent,
  VerRuler,
  ContactUsItem,
  FAQItem,
  HelpSupportItemButton,
  LabelButton,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight, calcWidth } from '../Themes/ConvertSize'
import styles from './Styles/HelpSupportScreenStyles'

export default class HelpSupportScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(30)} />
          <View style={styles.buttongroup}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountScreen')} >
              <Text style={styles.cancel}>
                {Languages.Done}
              </Text>
            </TouchableOpacity>
          </View>
          <VerRuler height={calcHeight(52)} />
          <LabelButton label={Languages.Help_Support} />
          <VerRuler height={calcHeight(22)} />
          <SearchComponent value={''} icon={Images.search} placeholder={Languages.Search} />
          <VerRuler height={calcHeight(22)} />
          <Text style={styles.title}>
            {Languages.Choose_how_can_we_help}
          </Text>
          <View style={styles.itemcontainer}>
            <HelpSupportItemButton onPress={() => this.props.navigation.navigate('ReportFollowupScreen')} label={Languages.Report_follow_up} icon={Images.report} />
            <HelpSupportItemButton onPress={() => this.props.navigation.navigate('CasesIssuesScreen')} label={Languages.Cases_issues} icon={Images.case_issues} />
            <HelpSupportItemButton onPress={() => this.props.navigation.navigate('EventsPlanningScreen')} label={Languages.Events_planning} icon={Images.event_planning} />
          </View>
          <View style={styles.itemcontainer}>
            <HelpSupportItemButton onPress={() => this.props.navigation.navigate('CalendarControlScreen')} label={Languages.Calendar_control} icon={Images.calendar_control} />
            <HelpSupportItemButton onPress={() => this.props.navigation.navigate('EditAccountScreen')} label={Languages.Edit_account} icon={Images.edit_account} />
            <HelpSupportItemButton onPress={() => this.props.navigation.navigate('CreateMatterScreen')} label={Languages.Create_matters} icon={Images.matter_create} />
          </View>
          <VerRuler height={calcHeight(27)} />
          <Text style={styles.title}>
            {Languages.FAQS}
          </Text>
          <VerRuler height={calcHeight(7)} />
          {
            DummyData.help_support_faqs.map((item, key) => (
              <FAQItem onPress={() => this.props.navigation.navigate('FaqDetailScreen')} icon={Images.arrow_right} text={item.faq} key={key} />
            ))
          }
          <VerRuler height={calcHeight(28)} />
          <Text style={styles.title}>
            {Languages.Contact_Us}
          </Text>
          <VerRuler height={calcHeight(20)} />
          <ContactUsItem icon={Images.phone} label={Languages.Phone_Number} text={DummyData.basic_info.phone_number} icon1={Images.additional} />
          <VerRuler height={calcHeight(16)} />
          <ContactUsItem icon={Images.email} label={Languages.Email_Address} text={DummyData.basic_info.email_address} />
          <VerRuler height={calcHeight(50)} />
        </View>
      </ScrollView>
    )
  }
}
