import React, { Component } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  form: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    justifyContent: "center",
  },
});
export default class AddContact extends Component {
  state = {
    name: "",
    phone: "",
    isFormValid: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.phone !== prevState.phone ||
      this.state.name !== prevState.name
    ) {
      this.validateForm();
    }
  }
  handleNameChange = (name) => {
    this.setState({
      name: name,
    });
  };
  handlePhoneChange = (phone) => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({
        phone: phone,
      });
    }
  };
  validateForm = () => {
    const names = this.state.name.split(" ");
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      names.length >= 2 &&
      names[0] &&
      names[1]
    ) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  };
  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.form}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
        />
        <TextInput
          style={styles.input}
          value={this.state.phone}
          keyboardType="numeric"
          onChangeText={this.handlePhoneChange}
        />
        <Button
          title="Add"
          onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}
        />
      </KeyboardAvoidingView>
    );
  }
}
