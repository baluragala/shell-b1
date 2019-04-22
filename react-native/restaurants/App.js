import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { message: "Hello React" };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "stretch",
          flexWrap: "wrap",
          alignContent: "stretch"
        }}
      >
        <Header style={{ flex: 1, backgroundColor: "red" }} />
        <Body style={{ flex: 8, backgroundColor: "green" }} />
        <Footer style={{ flex: 1, backgroundColor: "yellow" }} />

        {/* {new Array(10).fill(0).map((d, i) => (
          <View
            style={{
              height: 100,
              backgroundColor:
                "#" + Math.floor(Math.random() * 16777215).toString(16)
            }}
          >
            <Text>{i + 1}</Text>
          </View>
        ))} */}
      </View>
    );
  }
}
