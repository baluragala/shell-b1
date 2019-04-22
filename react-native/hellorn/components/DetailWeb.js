import React, { Component } from "react";
import { WebView } from "react-native";

export default class DetailWeb extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Details for ${navigation.getParam("name")}`
  });

  render() {
    return (
      <WebView
        source={{
          uri: this.props.navigation.getParam("url", "https://www.google.com")
        }}
      />
    );
  }
}
