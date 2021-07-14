import React, { Component } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
  },
});
export default class AddContact extends Component {
  state = {
    name: "",
    phone: "",
  };
  render() {
    return (
      <View>
        <TextInput value={this.state.name} />
        <TextInput value={this.state.phone} />
        <Button title="Add Contact" />
      </View>
    );
  }
}
