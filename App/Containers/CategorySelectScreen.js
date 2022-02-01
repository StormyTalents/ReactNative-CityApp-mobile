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
import {CategoryItem, VerRuler} from '../Components';
import {Images, Languages, ConvertSize, DummyData} from '../Themes';
import {calcHeight} from '../Themes/ConvertSize';
import styles from './Styles/CategorySelectScreenStyles';
import {connect} from 'react-redux';
import {getUserProfile, setMatterType} from 'Actions/User';
import {getPublicCategories, setCategory} from 'Actions/Report';
import NavigationService from 'Navigation/NavigationService';

class CategorySelectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_data: DummyData.category_data,
      categorydata: {},
      selectedarr: [],
    };
  }

  componentDidMount() {
    this.GetPublicCategories();
  }

  GetPublicCategories = () => {
    this.props.getPublicCategories();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.categorydata !== this.props.categorydata) {
      this.setState({categorydata: this.props.categorydata});
    }
  }

  seletedItem = (k) => {
    let {categorydata, selectedarr} = this.state;
    let temp = Object.values(categorydata);
    for (let i = 0; i < temp.length; i++) {
      if (i == k) {
        if (selectedarr[k]) {
          selectedarr[k] = false;
        } else {
          selectedarr[k] = true;
        }
      } else {
        selectedarr[i] = false;
      }
    }
    this.setState({
      selectedarr: selectedarr,
    });
  };

  goBackFunc = () => {
    let {selectedarr, categorydata} = this.state;
    let checker = 0;
    let indexc = 0;
    for (let i = 0; i < Object.keys(categorydata).length; i++) {
      if (selectedarr[i]) {
        checker++;
        indexc = i;
      }
    }
    if (checker == 0) {
      alert('Please choose a Category!');
      return;
    } else {
      this.props.setCategory({
        category: Object.values(categorydata)[indexc],
        categoryLabel: Object.keys(categorydata)[indexc],
      });
    }
  };
  render() {
    let {selectedarr, categorydata} = this.state;
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={styles.mainContainer}>
          <View style={styles.section}>
            <VerRuler height={calcHeight(60)} />
            <View style={styles.buttongroup}>
              <TouchableOpacity
                onPress={() => this.goBackFunc()}
                style={styles.buttontitle}>
                <Image style={styles.imagetitle} source={Images.arrow_left} />
              </TouchableOpacity>
              <Text style={styles.texttitle}>{Languages.Category}</Text>
              <Text></Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <VerRuler height={calcHeight(28)} />
              {Object.keys(categorydata).map((item, key) => (
                <CategoryItem
                  icon={Images.checked}
                  label={item}
                  onPress={() => this.seletedItem(key)}
                  selected={selectedarr[key]}
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
  code: state.auth.code,
  email: state.auth.email,
  username: state.auth.username,
  userdata: state.user,
  type: state.user.type,
  categorydata: state.report.categorydata,
});

const mapDispatchToProps = {
  getUserProfile,
  setMatterType,
  getPublicCategories,
  setCategory,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategorySelectScreen);
