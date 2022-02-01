import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {TagItem, VerRuler, ItemNotes} from '../Components';
import {Images, Languages, ConvertSize, DummyData} from '../Themes';
import {calcHeight} from '../Themes/ConvertSize';
import styles from './Styles/TagSelectScreenStyles';
import {connect} from 'react-redux';
import {getUserProfile, setMatterType} from 'Actions/User';
import {setTagValue} from 'Actions/Calendar';

class TagSelectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag_data: DummyData.tag_data,
    };
  }

  seletedItem = (item, k) => {
    let {tag_data} = this.state;
    let temp = tag_data;
    for (let i = 0; i < temp.length; i++) {
      if (i == k) {
        if (temp[k].selected) {
          temp[k].selected = false;
        } else {
          temp[k].selected = true;
        }
      } else {
        temp[i].selected = false;
      }
    }
    this.setState({
      tag_data: temp,
    });
  };

  render() {
    let {tag_data} = this.state;
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={styles.mainContainer}>
          <View style={styles.section}>
            <VerRuler height={calcHeight(60)} />
            <View style={styles.buttongroup}>
              <TouchableOpacity
                onPress={() => {
                  for (let i = 0; i < tag_data.length; i++) {
                    if (tag_data[i].selected) {
                      this.props.setTagValue({tagValue: i + 1});
                    } else {
                    }
                  }
                  this.props.navigation.navigate('AddEventScreen');
                }}
                style={styles.buttontitle}>
                <Image style={styles.imagetitle} source={Images.arrow_left} />
              </TouchableOpacity>
              <Text style={styles.texttitle}>{Languages.Tag}</Text>
              <Text></Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <VerRuler height={calcHeight(28)} />
              {tag_data.map((item, key) => (
                <TagItem
                  icon={Images.checked}
                  label={item.name}
                  onPress={() => this.seletedItem(item, key)}
                  selected={item.selected}
                  color={item.color}
                  key={key}
                />
              ))}
              <VerRuler height={calcHeight(60)} />
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  userdata: state.user,
  tagValue: state.calendar.tagValue,
});

const mapDispatchToProps = {
  setTagValue,
};
export default connect(mapStateToProps, mapDispatchToProps)(TagSelectScreen);
