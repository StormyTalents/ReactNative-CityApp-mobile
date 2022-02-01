import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes'
import { act } from 'react-test-renderer';

class MyMatterItem extends React.PureComponent {
  render() {
    let { onPress, title, date, id, time, status, action, newly,style } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button,style]}>
        <View style={styles.topcontent}>
          <View>
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.id}>
              {id}
            </Text>
            {
              newly && <View style={styles.badge}></View>
            }
          </View>
          <Text style={styles.time}>
            {time}
          </Text>
        </View>
        <View style={styles.bottomcontent}>
          <View style={styles.firstcontent11}>
            <Text>
              {Languages.Case_Status}
            </Text>
            <Text
              style={[styles.status, {
                color: status == 0 ? Colors.status0 : (status == 1 ? Colors.status1 : (status == 2 ? Colors.status2 : Colors.status3)),
                backgroundColor: status == 0 ? Colors.lightstatus0 : (status == 1 ? Colors.lightstatus1 : (status == 2 ? Colors.lightstatus2 : Colors.lightstatus3))
              }]}
            >
              {status == 0 ? Languages.Accepted : (status == 1 ? Languages.Rejected : (status == 2 ? Languages.In_Progress : Languages.Created))}
            </Text>
          </View>
          <View style={styles.firstcontent}>
            <Text>
              {Languages.Case_Date}
            </Text>
            <Text style={styles.status}>
              {date}
            </Text>
          </View>
          <View style={styles.firstcontent}>
            <Text>
              {Languages.Required_Action}
            </Text>
            <Text style={styles.status}>
              {action}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default MyMatterItem
