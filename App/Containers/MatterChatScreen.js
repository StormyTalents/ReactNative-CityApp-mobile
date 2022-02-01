import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import {
  ChatInputText,
  VerRuler,
  ChatTopItem,
} from '../Components'
import { Images, Languages, ConvertSize, DummyData } from '../Themes'
import { calcHeight, calcWidth } from '../Themes/ConvertSize'
import styles from './Styles/MatterChatScreenStyles'
import { connect } from 'react-redux'
import { getUserProfile, setMatterType } from 'Actions/User';
import { getReportsForReporter, getBriefReportWithId, getReportWithId, addNewComment, } from 'Actions/Report';
class MatterChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: -1,
      briefreportdata: {
        comments: [],
        commentText: '',
      },
    }
  }
  componentDidMount() {
    this.setState({
      briefreportdata: this.props.briefreportdata,
    })
    console.log(this.props.briefreportdata);
  }
  componentDidUpdate(prevProps) {
    let { briefreportdata, email, token } = this.props;
    if (prevProps.briefreportdata !== this.props.briefreportdata) {
      this.setState({ briefreportdata: this.props.briefreportdata })
      console.log(briefreportdata)
    }
    if (prevProps.added !== this.props.added) {
      this.props.getBriefReportWithId({ id: briefreportdata.id, email, token });
      // this.props.getReportWithId({ id: briefreportdata.id, email, token });
    }
  }
  goErrorReportDetail = (id) => {
    let { email, token } = this.props;
    this.props.getReportWithId({ id, email, token });
  }
  addNewCommentFunc = () => {
    let { commentText, briefreportdata } = this.state;
    let { email, token } = this.props;
    this.setState({
      commentText: ''
    })
    this.props.addNewComment({ commentText, reportId: briefreportdata.id, commentType: briefreportdata.type, email, token })
  }
  render() {
    let {
      briefreportdata,
      commentText,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <ChatTopItem
          backPress={() => this.props.navigation.navigate('MatterScreen')}
          // onPress={() => this.props.navigation.navigate('MatterDetailScreen')}
          onPress={() => this.goErrorReportDetail(briefreportdata.id)}
          avatar={Images.sample_user}
          title={briefreportdata.title}
          id={briefreportdata.id}
          type={briefreportdata.type} />
        <ScrollView>
          <View style={styles.section}>
            <VerRuler height={calcHeight(20)} />
            {
              briefreportdata.comments.map((item, key) => (
                <View style={styles.chatwrapper} key={key}>
                  <Image style={styles.chatavatar} source={{ uri: `data:image/jpeg;base64,${item.image.image}` }} />
                  <Text style={styles.chattext}>
                    {item.commentText}
                  </Text>
                </View>
              ))
            }
            <VerRuler height={calcHeight(140)} />
          </View>
        </ScrollView>
        <ChatInputText
          placeholder={Languages.Write_your_message}
          onChangeText={(commentText) => this.setState({ commentText })}
          onPress={() => this.addNewCommentFunc()}
          value={commentText}
          action1={() => { alert('d') }}
          action2={() => { alert('s') }} />
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token,
  email: state.auth.email,
  username: state.auth.username,
  userdata: state.user,
  briefreportdata: state.report.briefreportdata,
  added: state.report.added,
});

const mapDispatchToProps = {
  getUserProfile,
  setMatterType,
  getReportsForReporter,
  getBriefReportWithId,
  getReportWithId,
  addNewComment,
};
export default connect(mapStateToProps, mapDispatchToProps)(MatterChatScreen);