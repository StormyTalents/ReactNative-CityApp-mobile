import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import {
  DraftItem,
  VerRuler,
  BottomToast,
} from '../Components'
import { Images, Languages, Colors, Constants } from '../Themes'
import { calcHeight, calcWidth } from '../Themes/ConvertSize'
import styles from './Styles/DraftsListScreenStyles'
import { connect } from 'react-redux'
import { getReportsNearbyAPlace, getReportsForReporter, } from 'Actions/Report';
import NavigationService from "Navigation/NavigationService";

class DraftsListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draftlist: [],
      toastShow: false,
    }
  }
  componentDidMount() {
    this.setState({ draftlist: this.props.draftlist })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.draftlist !== this.props.draftlist) {
      this.setState({ draftlist: this.props.draftlist })
    }
  }
  DeleteReport = (id) => {
    this.setState({
      toastShow: true
    })
    setTimeout(() => { this.goFunc(id) }, 3000)
  }
  goFunc = (id) => {
    if (!this.state.toastShow) { return }
    this.setState({
      toastShow: false
    })
    let { email, token, username } = this.props;
    const isDraft = true;
    fetch(`${Constants.BASE_URL}/Report/DeleteReport`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id.toString(),
        email: email,
        token: token
      })
    })
      .then((response) => {
        this.props.getReportsForReporter({ id: username, isDraft, email, token });
      })
      .catch((errMsg) => {
        alert(JSON.stringify(errMsg))
      })
  }
  undoFunc = () => {
    this.setState({
      toastShow: false
    })
  }
  render() {
    let {
      draftlist,
      toastShow,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.layout}>
        </View>
        <View style={styles.section}>
          <VerRuler height={calcHeight(55)} />
          <View style={styles.topbar}>
            <Text style={styles.drafts}>
              {Languages.Drafts}
            </Text>
            <TouchableOpacity onPress={() => NavigationService.goBack()}>
              <Image style={styles.iconitem} source={Images.closeButton} />
            </TouchableOpacity>
          </View>
          <ScrollView >
            {
              draftlist.length !== 0 && draftlist.map((item, key) => (
                <DraftItem
                  title={item.title}
                  text={item.description}
                  type={item.type}
                  onPress={() => this.DeleteReport(item.id)}
                  key={key} />
              ))
            }
          </ScrollView>
        </View>
        <BottomToast onPress={() => this.undoFunc()} toastShow={toastShow} />
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  username: state.auth.username,
  currRegion: state.auth.currRegion,
  userdata: state.user,
  loading: state.report.loading,
  draftlist: state.report.draftlist,
});

const mapDispatchToProps = {
  getReportsNearbyAPlace,
  getReportsForReporter,
};
export default connect(mapStateToProps, mapDispatchToProps)(DraftsListScreen);