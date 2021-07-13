import { StatusBar } from "expo-status-bar";
import Contacts, { compareNames } from "./Contacts";
import React from "react";
import Row from "./Row";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

export default class App extends React.Component {
  state = {
    showContacts: false,
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
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title="Sort" onPress={this.sort} />
        {this.state.showContacts && (
          <FlatList
            data={this.state.contacts}
            renderItem={({ item }) => <Row {...item} />}
          />
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
