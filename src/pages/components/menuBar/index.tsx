import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtTabBar } from "taro-ui";

interface MenuStates {
  current: number;
}

import "./index.less";
export default class MenuBar extends Component<any, MenuStates> {
  constructor(props) {
    super(props);
  }
  handleClick(value) {
    if (value === 1) {
      Taro.redirectTo({
        url: `/pages/class/index?index=${value}`
      });
    }
    if (value === 0) {
      Taro.redirectTo({
        url: `/pages/index/index?id=${value}`
      });
    }
    if (value === 2) {
      Taro.redirectTo({
        url: `/pages/user/index?id=${value}`
      });
    }
  }

  render() {
    return (
      <View className="menu-bar">
        <AtTabBar
          fixed
          tabList={[
            { title: "首页", iconType: "home" },
            { title: "找课", iconType: "search" },
            { title: "我的", iconType: "user" }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.props.currentId || 0}
        />
      </View>
    );
  }
}
