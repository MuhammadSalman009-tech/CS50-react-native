import { View, Text, StyleSheet } from "react-native";
import React from "react";
const styles = StyleSheet.create({
  row: {
    padding: 20,
  },
});
const Row = (props) => {
  return (
    <View style={styles.row}>
      <Text>{props.name}</Text>
      <Text>{props.phone}</Text>
    </View>
  );
};

export default Row;
