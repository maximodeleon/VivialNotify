'use strict'

import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from './styles/styles'


class AddressInput extends Component { 
  static navigationOptions = {
    title: 'Address Information',
    headerStyle: {
      height: 35
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}> Street </Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text)  => this.props.navigation.setParams({street: text})}
         />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}> City </Text>
          <TextInput 
           style={styles.textInput}
           onChangeText={(text)  => this.props.navigation.setParams({city: text})}
          />
        </View>
      <View style={styles.inputContainer}>
          <Text style={styles.label}> State </Text>
          <TextInput 
           style={styles.textInput} 
           onChangeText={(text)  => this.props.navigation.setParams({state: text})}
          />
        </View>
      </View>
    )
  }
}

export default AddressInput
