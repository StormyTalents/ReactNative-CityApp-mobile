import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { Metrics, ApplicationStyles, Colors, Fonts } from 'Themes/'
import { StyleSheet } from 'react-native';

export default function CustomSpinner(props) {
    return (
        <Spinner
            {...props}
            overlayColor={Colors.opacity1}
            color={Colors.primary}
            textStyle={styles.spinnerTextStyle}
        />
    )
}
const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: Colors.primary,
    }
})