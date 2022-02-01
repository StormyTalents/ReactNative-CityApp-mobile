import React from 'react';
import {TouchableOpacity, Text, Image, TextInput, View} from 'react-native';
import styles from './style';
import {Images, Languages, Colors, Fonts} from '../../Themes';
import TextInputMask from 'react-native-text-input-mask';

class LabelValidInputMaskText extends React.PureComponent {
  render() {
    let {
      placeholder,
      value,
      show,
      onChangeText,
      display,
      keyboardType,
      returnKeyType,
      errortext,
      title,
      icon,
      error,
      onPress,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={[
            styles.content,
            {borderBottomColor: error ? Colors.red : Colors.gray5},
          ]}>
          <View style={styles.bottomcontainer}>
            <Image source={Images.flag_sweden} style={styles.flag_sweden} />
            <TextInputMask
              placeholder={placeholder}
              affineFormats={[]}
              customNotations={[]}
              affinityCalculationStrategy={'WHOLE_STRING'}
              mask={'+46 [00] [000] [00] [00]'}
              onChangeText={onChangeText}
              style={[styles.input]}
              keyboardType={keyboardType}
              
              value={value}
              returnKeyType={returnKeyType}
              placeholderTextColor={Colors.gray3}
            />
          </View>
          {value !== '' && (
            <Image
              style={[styles.icon, {display: display}]}
              source={Images.email_valid}
            />
          )}
        </View>
        {error && <Text style={styles.errortext}>{errortext}</Text>}
      </View>
    );
  }
}

export default LabelValidInputMaskText;
