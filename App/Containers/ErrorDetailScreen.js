import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import {
  ErrorDetailItem,
  VerRuler,
  ItemNotes,
  InputComment,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight } from '../Themes/ConvertSize'
import styles from './Styles/ErrorDetailScreenStyles'
import { connect } from 'react-redux'
import { getReportsNearbyAPlace, getReportWithId, addNewComment } from 'Actions/Report';
import NavigationService from "Navigation/NavigationService";
import Moment from 'moment';

class ErrorDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportdata: {
        images: [],
        comments: [
          {
            image: {}
          }
        ]
      },
      commentText: '',
      userdata: {

      }
    }
  }
  componentDidMount() {
    this.setState({ reportdata: this.props.reportdata, userdata: this.props.userdata })
  }
  componentDidUpdate(prevProps) {
    let { reportdata, email, token } = this.props;
    if (prevProps.reportdata !== this.props.reportdata) {
      this.setState({ reportdata: this.props.reportdata })
    }
    if (prevProps.userdata !== this.props.userdata) {
      this.setState({ userdata: this.props.userdata })
    }
    if (prevProps.added !== this.props.added) {
      this.props.getReportWithId({ id: reportdata.id, email, token });
    }
  }
  addNewCommentFunc = () => {
    let { commentText, reportdata } = this.state;
    let { email, token } = this.props;
    this.setState({
      commentText: ''
    })
    this.props.addNewComment({ commentText, reportId: reportdata.id, commentType: 10, email, token })
  }
  /*
  must display reportdata
  */
  render() {
    let {
      reportdata,
      commentText,
      userdata,
    } = this.state;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={styles.mainContainer}>
          <View style={styles.layout}>
          </View>
          <View style={styles.section}>
            <VerRuler height={calcHeight(30)} />
            <View style={styles.buttongroup}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.buttontitle}>
                <Image style={styles.imagetitle} source={Images.arrow_left} />
              </TouchableOpacity>
              <Text style={styles.texttitle}>
                {Languages.Error_Details}
              </Text>
              <Text>
              </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <VerRuler height={calcHeight(28)} />
              <Text style={styles.titleText}>
                {reportdata.title}
              </Text>
              <VerRuler height={calcHeight(28)} />
              <ErrorDetailItem
                category={reportdata.category}
                date={Moment(reportdata.createdTime).format('DD-MM-YYYY hh:mm')}
                status={reportdata.priority}
                description={reportdata.description}
              />
              <VerRuler height={calcHeight(26)} />
              <View style={styles.sectionitem}>
                <ScrollView horizontal={true}>{
                  reportdata.images.length !== 0 && reportdata.images.map((item, key) => (
                    <Image key={key} source={{ uri: `data:image/jpeg;base64,${item.image}` }} style={styles.scrollitem} />
                  ))
                }
                </ScrollView>
                <VerRuler height={calcHeight(55)} />
                <Text style={styles.description}>
                  {Languages.People_notes}
                </Text>
                {
                  DummyData.error_detail_datas.notes.length == 0 && <Text style={styles.description1}>
                    {Languages.empty_notes}
                  </Text>
                }
                <VerRuler height={calcHeight(20)} />
                <InputComment
                  placeholder={Languages.Add_Note}
                  onChangeText={(commentText) => this.setState({ commentText })}
                  onPress={() => this.addNewCommentFunc()}
                  value={commentText}
                  returnKeyType={'done'}
                  avatar={{ uri: `data:image/jpeg;base64,${userdata.profileImage}` }} />
                {
                  reportdata.comments.length !== 0 && reportdata.comments.map((item, key) => (
                    <ItemNotes
                      text={item.commentText}
                      icon={{ uri: `data:image/jpeg;base64,${item.image.image}` }}
                      key={key} />
                  ))
                }
              </View>
              <VerRuler height={calcHeight(250)} />
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  currRegion: state.auth.currRegion,
  userdata: state.user,
  loading: state.report.loading,
  reportdata: state.report.reportdata,
  added: state.report.added,
});

const mapDispatchToProps = {
  getReportsNearbyAPlace,
  getReportWithId,
  addNewComment,
};
export default connect(mapStateToProps, mapDispatchToProps)(ErrorDetailScreen);