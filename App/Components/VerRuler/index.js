import React from 'react'
import {
  View
} from 'react-native'
import styles from './style'

class VerRuler extends React.PureComponent {
  render() {
    return (
        <View style={{height:this.props.height,width:this.props.width||10,backgroundColor: this.props.color}} {...this.props}></View>
    )
  }
}

export default VerRuler
