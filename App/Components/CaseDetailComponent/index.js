import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './style'
import { DummyData, Languages, Colors, Images } from '../../Themes/'
import { calcWidth, calcHeight } from '../../Themes/ConvertSize';

class CaseDetailComponent extends React.PureComponent {
  render() {
    let { title, id, date, status, meeting } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topcontainer}>
          <View style={styles.textcontainer}>
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.id}>
              {id}
            </Text>
            <Text style={styles.date}>
              {Languages.Creation_date + ' ' + date}
            </Text>
          </View>
          <Image source={Images.case_image} style={styles.imageicon} />
        </View>
        <View style={styles.statusimagecontainer}>
          <View style={styles.imagecontent}>
            <View style={[styles.imageitem, { backgroundColor: Colors.lightstatus3 }]}>
              <Image source={Images.case_check} style={[styles.icon, { tintColor: Colors.status3 }]} />
            </View>
            <Text style={[styles.labeltext, { color: Colors.status3 }]}>
              {Languages.Created.toUpperCase()}
            </Text>
          </View>
          <View style={styles.imagecontent}>
            <View style={[styles.imageitem, { backgroundColor: status == 0 ? Colors.gray7 : Colors.lightstatus2 }]}>
              {
                (status == 1 || status == 2 || status == 3) &&
                <Image source={Images.case_check} style={[styles.icon, { tintColor: Colors.status2 }]} />
              }
            </View>
            <Text style={[styles.labeltext, { color: status == 1 || status == 2 || status == 3 ? Colors.status2 : Colors.gray3 }]}>
              {Languages.In_Progress.toUpperCase()}
            </Text>
          </View>
          <View style={styles.imagecontent}>
            <View style={[styles.imageitem, { backgroundColor: status == 0 || status == 1 ? Colors.gray7 : (status == 2 ? Colors.lightstatus1 : Colors.lightstatus0) }]}>
              {
                status == 3 && <Image source={Images.case_check} style={[styles.icon, { tintColor: Colors.status0 }]} />
              }
              {
                status == 2 && <Image source={Images.case_rejected} style={[styles.icon, { tintColor: Colors.status1 }]} />
              }
            </View>
            {
              status == 0 && <Text style={styles.labeltext}>
                {Languages.Completed.toUpperCase()}
              </Text>
            }
            {
              status == 1 && <Text style={styles.labeltext}>
                {Languages.Completed.toUpperCase()}
              </Text>
            }
            {
              status == 3 && <Text style={[styles.labeltext, { color: Colors.status0 }]}>
                {Languages.Approved.toUpperCase()}
              </Text>
            }
            {
              status == 2 && <Text style={[styles.labeltext, { color: Colors.status1 }]}>
                {Languages.Rejected.toUpperCase()}
              </Text>
            }
          </View>
        </View>
        <View style={styles.desccontainer}>
          <Text style={styles.titletext}>
            {status == 0 ? Languages.Case_has_been_created_successfully : (status == 1 ? Languages.Case_now_is_in_progress : (status == 2 ? Languages.Your_case_was_rejected : Languages.Your_case_was_approved))}
          </Text>
          <Text style={styles.description}>
            {Languages.The_case_has_been_created________}
          </Text>
        </View>
        {
          meeting && <View style={styles.meetingpart}>
            <Text style={styles.titletext1}>
              {Languages.You_have_been_received_an_invite_for_a_meeting}
            </Text>
            <View style={styles.bottompart}>
              <Image style={styles.titleimage} source={Images.mailbox} />
              <View style={styles.centerpart}>
                <Text style={styles.example}>
                  {Languages.Meeting_with_person_example}
                </Text>
                <Text style={styles.example1}>
                  {Languages.Date + ' ' + 'dd/mm/yyyy'}
                </Text>
                <Text style={styles.example1}>
                  {Languages.Location_Place_or_tool}
                </Text>
                <Text style={styles.example1}>
                  {Languages.With}
                </Text>
                <View style={styles.buttoncontainer}>
                  <View style={styles.textimage}>
                    <Image style={styles.sampleimage} source={Images.sample_user} />
                    <Text style={[styles.example, { marginLeft: calcWidth(7) }]}>
                      {Languages.First_Name}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.bluetext}>
                      {Languages.Invitation_Details}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        }
        <View style={styles.bottomcontainer}>
          <Text style={styles.titletext1}>
            {Languages.Support_Agent}
          </Text>
          <View style={styles.sepcpart}>
            <Image style={styles.imageagent} source={Images.sample_user} />
            <View style={styles.leftcontainer}>
              <Text style={[styles.titletext1, { color: Colors.gray3, marginTop: 0 }]}>
                {Languages.First_Name}
              </Text>
              <Text style={[styles.titletext1, { color: Colors.gray3, marginTop: 0 }]}>
                {Languages.Position_of_the_person}
              </Text>
            </View>
          </View>
          <Text style={[styles.titletext1, { fontWeight: 'bold', marginTop: calcHeight(30) }]}>
            {Languages.Email_Address}
          </Text>
          <Text style={[styles.titletext1, { marginTop: calcHeight(10) }]}>
            {DummyData.basic_info.email_address}
          </Text>
          <Text style={[styles.titletext1, { fontWeight: 'bold', marginTop: calcHeight(30) }]}>
            {Languages.Phone_Number}
          </Text>
          <Text style={[styles.titletext1, { marginTop: calcHeight(10) }]}>
            {DummyData.basic_info.phone_number}
          </Text>
        </View>
      </View>
    )
  }
}

export default CaseDetailComponent
