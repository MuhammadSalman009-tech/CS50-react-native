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

let id = 0;
const Todo = (props) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    <Text>{props.todo.text}</Text>
    <Button onPress={props.onDelete} title="Delete" />
  </View>
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  addTodo() {
    id++;
    const text = `Todo Number ${id}`;
    this.setState({
      todos: [...this.state.todos, { id: id, text: text, checked: false }],
    });
  }
  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        };
      }),
    });
  }

  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <Text>Todo Count: {this.state.todos.length}</Text>
        <Text>
          Unchecked Todo Count:{" "}
          {this.state.todos.filter((todo) => !todo.checked).length}
        </Text>
        <Button onPress={() => this.addTodo()} title="Add TODO" />
        <ScrollView>
          {this.state.todos.map((todo) => (
            <Todo
              onDelete={() => this.deleteTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
              todo={todo}
              key={todo.id}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
