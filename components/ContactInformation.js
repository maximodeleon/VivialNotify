'use strict'

import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from './styles/styles'

class ContactInformation extends Component {
  static navigationOptions = {
    title: 'Contact Information',
    headerStyle: {
      height: 35
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}> Contact phone </Text>
          <TextInput 
           style={styles.textInput}
           onChangeText={(text)  => this.props.navigation.setParams({phone: text})}
          />
        </View>
      </View>
    )
  }
}

export default ContactInformation

