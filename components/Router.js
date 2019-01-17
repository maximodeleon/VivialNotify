import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { last } from 'lodash'

class Router extends Component {

  constructor(props) {
    super(props)
    this.generateNavigator = this.generateNavigator.bind(this)
    this.handleRef = this.handleRef.bind(this)
    this.handleNavigationChange = this.handleNavigationChange.bind(this)
  }

  componentWillMount() {
   this.Navigator = this.generateNavigator()
  }

  generateNavigator() {
    const { steps, title } = this.props
    const navigationRoutes =  { }

    steps.forEach((step, index) => {
       const routeOptions = { screen: step.component }
       navigationRoutes[step.routeName] = routeOptions
    })

    const navigationOptions = {
      headerStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 5
      },
      headerTintColor: '#111111',
      headerTitle: title
    }

    const navigator = createStackNavigator(navigationRoutes, { navigationOptions })
    return createAppContainer(navigator)
  }

  handleRef(navigator) {
    this.props.handleNavRef(navigator)
  }

  handleNavigationChange(prevState, currentState, action) {
     const { isTransitioning, routes } = currentState
     if (isTransitioning) {
       const { routeName } = last(routes)
       this.props.handleNavChange(routeName)
     }
  }

  render() {
     const { Navigator } = this
     return (
       <Navigator
         onNavigationStateChange={this.handleNavigationChange}
         ref={this.handleRef}
       />
     )
  }
}


export default Router
