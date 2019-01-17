'use strict'

import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from './styles/styles'

class DistanceThresholdInput extends Component {

  static navigationOptions = {
    title: 'Distance Threshold',
    headerStyle: {
      height: 35
    }
  }

  render() {
    return(
     <View style={styles.container}>
       <View style={styles.inputContainer}>
         <Text style={styles.label}> Distance Threshold </Text>
         <TextInput 
          style={styles.textInput} 
          onChangeText={(text)  => this.props.navigation.setParams({distance: text})}
         />
       </View>
     </View>
   )
  }
}

export default DistanceThresholdInput
