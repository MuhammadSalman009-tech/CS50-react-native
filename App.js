import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

{
  /* <script src="http://localhost:8097"></script>;
import { StatusBar } from "expo-status-bar";
import Contacts, { compareNames } from "./Contacts";
import React from "react";

import { Button, StyleSheet, View } from "react-native";
import ContactsList from "./ContactsList";
import AddContact from "./AddContact";

export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: Contacts,
  };
  toggleContacts = () => {
    this.setState((prevState) => ({
      showContacts: !prevState.showContacts,
    }));
  };
  toggleForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }));
  };
  addContact = (newContact) => {
    this.setState((prevState) => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact],
    }));
  };
  sort = () => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort(compareNames),
    }));
  };

  render() {
    if (this.state.showForm) return <AddContact onSubmit={this.addContact} />;
    return (
      <View style={styles.app}>
        <Button
          style={styles.btn}
          title="Toggle Contacts"
          onPress={this.toggleContacts}
        />
        <Button
          style={styles.btn}
          title="Add Contact"
          onPress={this.toggleForm}
        />
        {this.state.showContacts && (
          <ContactsList contacts={this.state.contacts} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginTop: 50,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 30,
  },
}); */
}
