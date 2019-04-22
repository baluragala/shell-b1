import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";

import styles from "../commonStyles";

export default class Item extends Component {
  constructor() {
    super();
    this.state = { isFav: false };
  }

  toggleFav = () => {
    console.log("pressed");
    this.setState({ isFav: !this.state.isFav });
  };

  render() {
    const { name, address, category, details } = this.props.restaurant;
    return (
      <TouchableOpacity
        onPress={() => Alert.alert("pressed")}
        onLongPress={() => Alert.alert("long pressed")}
      >
        <View style={[styles.container]}>
          <Image
            source={{
              uri: "https://dummyimage.com/100x200/D3D3D3/fff.jpg&text=R"
            }}
            style={styles.thumbnail}
          />
          <View style={styles.detail}>
            <Text style={styles.title}>{name}</Text>
            <View style={{ flexDirection: "row" }}>
              {/* <MaterialIcons name="local-dining" size={30} color="green" /> */}
              <Text numberOfLines={2} style={{ fontSize: 16 }}>
                {address}
              </Text>
            </View>
            <Text style={styles.category}>{category}</Text>
            <Button
              title="Details"
              onPress={() => {
                this.props.navigation.navigate("Web", { url: details, name });
              }}
            />
          </View>
          {/* <FontAwesome
          name={this.state.isFav ? "heart" : "heart-o"}
          size={45}
          color="orange"
          style={{ flex: 2, marginLeft: 20, paddingTop: 20 }}
          onPress={this.toggleFav}
        /> */}
        </View>
      </TouchableOpacity>
    );
  }
}
