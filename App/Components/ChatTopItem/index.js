import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes'

class ChatTopItem extends React.PureComponent {
  render() {
    let { onPress, title, backPress, id, type, avatar } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.buttongroup}>
          <TouchableOpacity style={styles.btt} onPress={backPress}>
            <Image style={styles.titleimage} source={Images.arrow_left} />
          </TouchableOpacity>
          <Text style={styles.titleText}>
            {title}
          </Text>
          <Text>
          </Text>
        </View>
        <View style={styles.centercontainer}>
          <View style={styles.leftcontainer}>
            <Image style={styles.icon} source={type == 10 ? Images.questions : (type == 20 ? Images.error_reports : (type == 30 ? Images.suggestions : Images.complaints))} />
            <View style={styles.leftcontent}>
              <Text style={styles.label}>
                {Languages.Complaint_ID}
              </Text>
              <Text style={styles.id}>
                {id}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={onPress} style={styles.rightbutton}>
            <Text style={styles.detail}>
              {Languages.Details}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomcontainer}>
          <Text style={styles.support_title}>
            {Languages.Support_Agent}
          </Text>
          <View style={styles.agent}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.rightitem}>
              <Text style={styles.id1}>
                {Languages.First_Name}
              </Text>
              <Text style={styles.id1}>
                {Languages.Position_of_the_person}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default ChatTopItem
