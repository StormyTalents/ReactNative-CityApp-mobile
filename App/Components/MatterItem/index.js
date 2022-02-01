import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';
import styles from './style'
import { Images, ApplicationStyles, Colors, Fonts } from '../../Themes';
import Moment from 'moment';
const maxlimit = 155;
class MatterItem extends React.PureComponent {
  render() {
    let { onPress, title, text, id, time, type } = this.props;
    const today = new Date();
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
        <Image style={styles.icon} source={type == 10 ? Images.questions : (type == 20 ? Images.error_reports : (type == 30 ? Images.suggestions : Images.complaints))} />
        <View style={styles.rightcontent}>
          <View style={styles.topcontent}>
            <View style={styles.leftcontent}>
              <Text style={styles.title}>
                {title}
              </Text>
              <Text style={styles.id}>
                {id}
              </Text>
            </View>
            <Text style={styles.time}>
              {/* {
                Math.ceil((Math.abs(today - new Date(time)) / (1000 * 60 * 60 * 24))) > 0 ? Math.ceil((Math.abs(today - new Date(time)) / (1000 * 60 * 60 * 24))) + ' days ago' : (Math.ceil((Math.abs(today - new Date(time)) / (1000 * 60 * 60))) > 0 ? Math.ceil((Math.abs(today - new Date(time)) / (1000 * 60 * 60))) + ' hours ago' : (Math.ceil((Math.abs(today - new Date(time)) / (1000 * 60))) > 0 ? Math.ceil((Math.abs(today - new Date(time)) / (1000 * 60))) + ' minutes ago' : Math.ceil((Math.abs(today - new Date(time)) / (1000))) + ' seconds ago'))
              } */}
              {
                Moment(time).startOf('day').fromNow()
              }
            </Text>
          </View>
          <Text style={styles.text}>
            {((text).length > maxlimit) ?
              (((text).substring(0, maxlimit - 3)) + '...') :
              text}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default MatterItem
