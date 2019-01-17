import React, { Component } from 'react';
import { Alert } from 'react-native';
import AddressInput from './components/AddressInput'
import ContactInformation from './components/ContactInformation'
import DistanceThresholdInput from './components/DistanceThresholdInput'

import Wizard from './components/Wizard';

export default class App extends Component {
  handleSubmitWizard = () => {
    Alert.alert('Wizard has been submitted');
  }

  render() {
    const steps = [
      { component: AddressInput, routeName: 'Step1' },
      { component: ContactInformation, routeName: 'Step2' },
      { component: DistanceThresholdInput, routeName: 'Step3' },
    ];

    return (
      <Wizard
        handleSubmitWizard={this.handleSubmitWizard}
        steps={steps}
        title='Basic Wizard Example'
      />
    );
  }
}

