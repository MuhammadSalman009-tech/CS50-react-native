import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.inc(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  inc = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showCounter: true,
    };
  }
  toggleCounter = () => {
    this.setState((prevState) => ({
      showCounter: !prevState.showCounter,
    }));
  };
  render() {
    if (this.state.showCounter) {
      return (
        <View style={styles.container}>
          <Button title="Toggle" onPress={this.toggleCounter} />
          <Counter />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Button title="Toggle" onPress={this.toggleCounter} />
        </View>
      );
    }
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
});
