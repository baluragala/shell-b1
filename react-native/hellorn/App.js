import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import List from "./components/List";
import DetailWeb from "./components/DetailWeb";
import Settings from "./components/Settings";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Header = () => (
  <Text style={{ fontWeight: "bold", paddingLeft: 30, fontSize: 32 }}>
    Berlins Res
  </Text>
);

const AppStack = createStackNavigator(
  {
    Restaurants: {
      screen: List
    },
    Web: {
      screen: DetailWeb
    }
  },
  {
    defaultNavigationOptions: {
      title: "Belrin Res",
      headerStyle: {
        backgroundColor: "#f22346"
      },
      headerTitle: Header,
      headerTintColor: "yellow",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: Settings
    }
  },
  {
    defaultNavigationOptions: {
      title: "Settings"
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: AppStack,
    Settings: SettingsStack
  },
  {
    initialRouteName: "Settings",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `settings${focused ? "" : "-outline"}`;
        }
        return <Icon name={iconName} color={tintColor} size={20} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
