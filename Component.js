//Vòng đời của Component chia làm 3 giai đoạn Mount -> Update -> Unmount
//Giai đoạn Mount là giai đoạn Component được tạo ra, giai đoạn này gồm các hàm như constructor -> render -> react update DOM và ref -> componentDidMount
//Giai đoạn Update là giai đoạn Component được update, giai đoạn này bao gồm các hàm như các hàm update New props/setState/forceUpdate -> render -> react update DOM và ref -> componentDidUpdate
//Giai đoạn Unmount là giai đoạn Component được xoá bỏ, giai đoạn này chỉ gồm 1 hàm là componentWillUnmount
import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";

class Counter extends Component {
  constructor(props) {
    //Đây là method Constructor, method này được sử dụng để khởi tạo State
    console.log("Created Constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }
  increase() {
    // Đây là hàm được sử dụng method setState dùng để cập nhập State
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrease() {
    // Đây là hàm được sử dụng method setState dùng để cập nhập State
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    //Đây là method Render, được sử dụng để tạo ra view cho Component
    console.log("Component Rendered");
    return (
      <View>
        <Pressable onPress={() => this.decrease()}>
          <Text>-</Text>
        </Pressable>
        <Text>{this.state.count}</Text>
        <Pressable onPress={() => this.increase()}>
          <Text>+</Text>
        </Pressable>
      </View>
    );
  }
  componentDidMount() {
    //hàm này thường được dùng để lấy dữ liệu từ API, hàm này thường sẽ được gọi ngay sau khi component được Render và Mount, ở đây hàm được sử dụng để báo khi component đã được render
    console.log("Mounted");
  }
  componentDidUpdate() {
    //hàm này thường được dùng để so sánh props trước đó và hiện tại, hàm này thường sẽ được gọi ngay sau khi component được render và update, ở đây hàm được sử dụng để báo khi component đã được update
    console.log("Updated");
  }
  componentWillUnmount() {
    //hàm này thường được dùng để dọn dẹp sau khi component bị huỷ để tránh bị rò rỉ bộ nhớ, hàm này thường sẽ được gọi trước  khi component bị unmount, ở đây hàm được sử dụng để báo component sắp bị un mount
    console.log("Will Unmount");
  }
}
export default Counter;
