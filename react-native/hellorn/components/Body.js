import React, { Component } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";

import List from "./List";

export default class Body extends Component {
  render() {
    return (
      <View style={[this.props.style, { padding: 5 }]}>
        {/* <ScrollView>
          {this.state.restaurants.map(r => (
            <Item restaurant={r} key={r.id.$id} />
          ))}
        </ScrollView> */}
        <List />
      </View>
    );
  }
}
