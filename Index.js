import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";
import Counter from "./Component";
class App extends Component {
  constructor(props) {
    //Đây là method Constructor, method này được sử dụng để khởi tạo State
    super(props);
    this.state = {
      showCounter: true,
    };
  }
  removeCounter() {
    //hàm này được sử dụng để unmount component
    this.setState({
      showCounter: false,
    });
  }
  addCounter() {
    this.setState({
      showCounter: true,
    });
  }
  componentDidUpdate() {
    // hàm ở đây được sử dụng để báo rằng App đã được update
    console.log("App Updated");
  }
  render() {
    console.log("App Rendered");
    return (
      <View>
        <Pressable onPress={() => this.removeCounter()}>
          <Text>Remove Counter</Text>
        </Pressable>

        {this.state.showCounter && <Counter />}
        <Pressable onPress={() => this.addCounter()}>
          <Text>Add Counter</Text>
        </Pressable>
      </View>
    );
  }
}

export default App;
