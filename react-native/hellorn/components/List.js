import React, { Component } from "react";
import {
  FlatList,
  View,
  ActivityIndicator,
  Text,
  RefreshControl,
  Button
} from "react-native";
import Item from "./Item";
import configuration from "../config";

export default class List extends Component {
  static navigationOptions = {
    title: "Restaruants",
    headerRight: (
      <Button onPress={() => alert("This is a button!")} title="Add" />
    )
  };

  constructor() {
    super();
    this.state = {
      restaurants: [],
      isLoading: false,
      page: 1,
      isRefreshing: false
    };
    this._getData = this._getData.bind(this);
  }

  async componentDidMount() {
    await this._getData();
  }

  async _getData() {
    console.log("_getData", this.state.page);
    if (this.state.page == 1) {
      this.setState({ isLoading: true });
    }
    let restaurants = await fetch(
      `${configuration.apiURL}/restaurants?_page=${this.state.page}&_limit=10`
    ).then(r => r.json());
    this.setState({
      isLoading: false,
      restaurants: [...this.state.restaurants, ...restaurants],
      page: this.state.page + 1
    });
  }

  _keyExtractor = (item, index) => item.id.$id;

  _onRefresh = async () => {
    this.setState({ isRefreshing: true });
    let restaurants = await fetch(
      `${configuration.apiURL}/restaurants?_page=1&_limit=10`
    ).then(r => r.json());
    this.setState({
      isRefreshing: false,
      restaurants,
      page: 2
    });
  };

  getRefreshControl() {
    return (
      <RefreshControl
        onRefresh={this._onRefresh}
        refreshing={this.state.isRefreshing}
      />
    );
  }

  render() {
    return (
      <View>
        {this.state.isLoading && <ActivityIndicator size="small" color="red" />}
        <FlatList
          data={this.state.restaurants}
          renderItem={({ item }) => (
            <Item restaurant={item} navigation={this.props.navigation} />
          )}
          keyExtractor={this._keyExtractor}
          onEndReachedThreshold={0.5}
          onEndReached={this._getData}
          refreshControl={this.getRefreshControl()}
        />
      </View>
    );
  }
}
