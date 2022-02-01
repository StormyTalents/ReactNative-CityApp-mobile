import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import styles from './style';
import {Images, Languages, Colors, Fonts} from '../../Themes';

class HomeLocationTopItem extends React.PureComponent {
  render() {
    let {
      backPress,
      title,
      image,
      description,
      created_date,
      created_time,
      category_name,
      activity_time,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.buttongroup}>
          <TouchableOpacity style={styles.btt} onPress={backPress}>
            <Image style={styles.titleimage} source={Images.arrow_left} />
          </TouchableOpacity>
          <Text></Text>
        </View>
        <Image style={styles.icon} source={image} />
        <View style={styles.main_section}>
          <Text style={styles.category_name}>{category_name}</Text>
          <Text style={styles.created_date}>
            {created_date + ' ' + created_time}
          </Text>
        </View>
        <View style={styles.two_section}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.activity_time}>{activity_time}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

export default HomeLocationTopItem;
