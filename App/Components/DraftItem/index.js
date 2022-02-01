import React from 'react'
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'
import styles from './style'
import { Images, Languages, Colors, Fonts } from '../../Themes/'

class DraftItem extends React.PureComponent {
  render() {
    let { title, text, type, onPress, } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={type == 10 ? Images.large_questions : (type == 20 ? Images.large_error : (type == 30 ? Images.large_suggestion : Images.large_compliant))} />
        <View style={styles.rightcontent}>
          <View style={styles.topcontent}>
            <View style={styles.topitem}>
              <Text style={styles.title}>
                {title}
              </Text>
              <Text style={styles.draft}>
                {Languages.Draft}
              </Text>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
              <Image style={styles.trashicon} source={Images.trashbin} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
      </View>
    )
  }
}

export default DraftItem
