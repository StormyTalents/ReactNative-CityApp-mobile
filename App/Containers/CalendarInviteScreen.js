import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, ScrollView, TextInput } from 'react-native'
import {
  InviteBottomButtons,
  VerRuler,
  MyMatterItem,
  PoolDetailItem,
} from '../Components'
import { Images, Languages, Colors, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/CalendarInviteScreenStyles'
import Modal from 'react-native-modalbox';
import { Textarea } from 'native-base';

export default class CalendarInviteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabstate: true,
      tider: false,
      toastShow: false,
    };

  }

  render() {
    let {
      tabstate,
      tider,
      toastShow,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.slidercontainer}>
          <View style={styles.topbutton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.closebutton}>
              <Image style={styles.closeicon} source={Images.arrow_back} />
            </TouchableOpacity>
            <Text style={styles.toptitle}>
              {Languages.Calendar}
            </Text>
          </View>
        </View>
        <View style={styles.maincontent}>
          <TouchableOpacity
            style={styles.buttonview}>
            <View style={styles.viewimage}></View>
          </TouchableOpacity>
          <View style={styles.scrollcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.topcontainer}>
                <Image style={styles.star} source={Images.mailbox} />
              </View>
              <Text style={styles.name}>
                {DummyData.invitation_name_sample}
              </Text>
              <Text style={styles.location}>
                {DummyData.near_you_data[0].location}
              </Text>
              <Text style={styles.name1}>
                {Languages.Invitation_is_related_to_the_case}
              </Text>
              <VerRuler height={calcHeight(17)} />
              <View style={styles.grayline}></View>
              <View style={styles.mattericom}>
                <MyMatterItem
                  title={DummyData.my_matter_data[0].title}
                  id={DummyData.my_matter_data[0].id}
                  time={DummyData.my_matter_data[0].time}
                  action={DummyData.my_matter_data[0].action}
                  date={DummyData.my_matter_data[0].date}
                  status={DummyData.my_matter_data[0].status}
                  newly={DummyData.my_matter_data[0].newly}
                  style={styles.mattericom}
                />
              </View>
              <VerRuler height={calcHeight(10)} />
              <Text style={styles.name1}>
                {Languages.Description}
              </Text>
              <Text style={styles.description}>
                {DummyData.near_you_data[0].description}
              </Text>
            </ScrollView>
          </View>
          <View style={styles.bottomcontainer}>
            <InviteBottomButtons
              status={tider}
              leftPress={() => this.refs.modal1.open()}
              rightPress={() => {
                this.setState({ tider: !this.state.tider, toastShow: true });
              }} />
          </View>
        </View>
        <Modal style={[styles.modal1]} position={"center"} ref={"modal1"}>
          <View style={styles.topmodal}>
            <Text style={styles.modaltext1}>{Languages.Rejecting_invite}</Text>
            <TouchableOpacity onPress={()=>this.refs.modal1.close()} style={styles.modalclosebutton}>
              <Image style={styles.modalcloseicon} source={Images.closeButton} />
            </TouchableOpacity>
          </View>
          <VerRuler height={calcHeight(38)} />
          <Text style={styles.modaltext2}>
            {Languages.Please_tell_us_why_you_would_like_to_reject_this____}
          </Text>
          <VerRuler height={calcHeight(9)} />
          <Textarea style={styles.textinput} placeholder={'Reason example'} />
          <VerRuler height={calcHeight(13)} />
          <Text style={styles.modaltext3}>
            {Languages.You_can_not_reject_an_invite_if_you_can__________}
          </Text>
          <VerRuler height={calcHeight(18)} />
          <View style={styles.bottommodal}>
            <TouchableOpacity onPress={()=>this.refs.modal1.close()} style={styles.bottommodalbtn1}>
              <Text style={styles.buttommodaltext1}>
                {Languages.Cancel}
              </Text>
            </TouchableOpacity>
            <View style={styles.horline}></View>
            <TouchableOpacity onPress={()=>this.refs.modal1.close()} style={styles.bottommodalbtn2}>
              
              <Text style={styles.buttommodaltext2}>
                {Languages.Submit}
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}
