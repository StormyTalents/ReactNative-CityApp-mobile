import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  VerRuler,
  MyChildrenItem,
  LabelButton,
  BackButton,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/MyChildrenScreenStyles'
import { getUserChildren } from 'Actions/User';
import { connect } from 'react-redux'
import NavigationService from 'Navigation/NavigationService'
class MyChildrenScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: null,
      hasChildren: false,
    }
  }
  componentDidMount() {
    let {
      email,
      token
    } = this.props;
    this.props.getUserChildren({ email, token });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.hasChildren !== this.props.hasChildren) {
      this.setState({ hasChildren: this.props.hasChildren })
    }
    if (prevProps.children !== this.props.children) {
      this.setState({ children: this.props.children })
    }
  }
  /*
  
  must render children (for now, this is empty data, so let's put later)
  */
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <VerRuler height={calcHeight(60)} />
          <LabelButton onPress={() => this.props.navigation.navigate('AccountScreen')} label={Languages.My_Children} icon={Images.arrow_left} />
          <VerRuler height={calcHeight(15)} />
          {/* <BackButton onPress={() => this.props.navigation.navigate('AccountScreen')} icon={Images.arrow_back} label={Languages.Main_Menu} /> */}
          <VerRuler height={calcHeight(31)} />
          <ScrollView>
            {
              DummyData.my_children_data.map((item, key) => (
                <MyChildrenItem name={item.name} gender={item.gender} birthday={item.birthday} age={item.age} key={key} />
              ))
            }
          </ScrollView>
        </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  hasChildren: state.user.hasChildren,
  children: state.user.children,
  email: state.auth.email,
  token: state.auth.token,
});

const mapDispatchToProps = {
  getUserChildren,
};
export default connect(mapStateToProps, mapDispatchToProps)(MyChildrenScreen);