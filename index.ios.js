/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

class AwesomeProject extends Component {
  constructor(props) {
    super(props)
    this.randomColor = this.randomColor.bind(this)
    this.randomPosition = this.randomPosition.bind(this)
    this.reset = this.reset.bind(this)

    this.state = {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }
  }

  randomColor() {
    var randomRed = Math.floor(Math.random() * 255),
      randomGreen = Math.floor(Math.random() * 255),
      randomBlue = Math.floor(Math.random() * 255),
      backgroundColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, 0.6)`

    this.setState({
      backgroundColor: backgroundColor
    })
  }

  randomPosition() {
    var randomJustify = Math.floor(Math.random() * 4),
      randomAlign = Math.floor(Math.random() * 3),
      justifyArray = ['center', 'flex-end', 'flex-start', 'space-around', 'space-between'],
      alignArray = ['center', 'flex-end', 'flex-start', 'stretch']

    this.setState({
      justifyContent: justifyArray[randomJustify],
      alignItems: alignArray[randomAlign],
    })
  }

  reset() {
    this.setState({
      backgroundColor: 'rgba(255, 255, 255, 0)',
      justifyContent: 'flex-end',
      alignItems: 'center'
    })
  }

  render() {
    var viewStyle = {}
    Object.assign(viewStyle, styles.container)
    viewStyle.backgroundColor = this.state.backgroundColor
    viewStyle.justifyContent = this.state.justifyContent
    viewStyle.alignItems = this.state.alignItems

    return (
      <Image style={styles.image} source={require('./images/dog.jpg')}>
        <View style={viewStyle}>
          <Text style={styles.welcome}>
            Are you ready to get RANDOM?
          </Text>
          <TouchableHighlight style={styles.button} onPress={this.randomColor} underlayColor="rgba(255, 255, 255, 0.7)">
            <Text style={styles.buttonText}>Random Color</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.randomPosition} underlayColor="rgba(255, 255, 255, 0.7)">
            <Text style={styles.buttonText}>Random Position</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.reset} underlayColor="rgba(255, 255, 255, 0.7)">
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}

var styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 400,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  button: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 30,
    width: 200
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
