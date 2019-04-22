import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  Switch,
  TextInput,
  AsyncStorage,
  Button,
  Alert,
  ScrollView
} from "react-native";

async function save(key, value) {
  await AsyncStorage.setItem(key, value);
}

async function get(key) {
  let v = await AsyncStorage.getItem(key);
  return v;
}

function Settings() {
  const [enable, setEnable] = useState(false);
  const [color, setColor] = useState("green");
  const [key, setKey] = useState();
  const [value, setValue] = useState();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Enable:({enable ? "true" : "false"})</Text>
        <Switch
          value={enable}
          style={{ height: 50 }}
          onValueChange={itemValue => setEnable(itemValue)}
        />
        <Text>Select Tab Tint Color:(Current Value: {color})</Text>
        <Picker
          selectedValue={color}
          style={{ height: 50 }}
          onValueChange={(itemValue, itemIndex) => setColor(itemValue)}
        >
          <Picker.Item label="Tomato" value="tomato" />
          <Picker.Item label="Green" value="green" />
        </Picker>
        <Text>Key:</Text>
        <TextInput placeholder="Enter key" onChangeText={key => setKey(key)} />
        <Text>Value:</Text>
        <TextInput
          placeholder="Enter value"
          keyboardType="email-address"
          onChangeText={value => setValue(value)}
        />
        <Button
          onPress={() =>
            save(key, JSON.stringify({ color, enable, key, value }))
          }
          title="Save"
        />
        <Button
          onPress={async () => {
            let v = await get(key);
            Alert.alert("Your key value", `Key:${key} => Value:${v}`);
          }}
          title="Get"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

export default Settings;
