import { StatusBar } from "expo-status-bar";
import Contacts, { compareNames } from "./Contacts";
import React from "react";

import {
  Button,
  SectionList,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import ContactsList from "./ContactsList";

export default class App extends React.Component {
  state = {
    showContacts: true,
    contacts: Contacts,
  };
  toggleContacts = () => {
    this.setState((prevState) => ({
      showContacts: !prevState.showContacts,
    }));
  };
  sort = () => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort(compareNames),
    }));
  };

  render() {
    return (
      <View style={styles.toggleBtn}>
        {/* <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title="Sort" onPress={this.sort} /> */}
        {this.state.showContacts && (
          <ContactsList contacts={this.state.contacts} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 30,
  },
  toggleBtn: {
    marginTop: 30,
  },
});
