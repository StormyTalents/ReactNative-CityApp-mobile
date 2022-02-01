import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import styles from './style';
import {Images, Languages, Colors, Fonts} from '../../Themes/';

class DateTimePickerButton extends React.PureComponent {
  render() {
    let {datePress, timePress, icon, date, time} = this.props;
    return (
      <View style={[styles.button]}>
        <TouchableOpacity onPress={datePress} style={styles.leftcontent}>
          <Image source={icon} style={[styles.icon]} />
          <Text style={styles.label}>{date}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={timePress}>
          <Text style={styles.label}>{time}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DateTimePickerButton;
