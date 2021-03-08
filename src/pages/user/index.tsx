import { Component } from "react";
import { View, Text } from "@tarojs/components";
import MenuBar from "../components/menuBar";
import { AtList, AtListItem } from "taro-ui"

import "./index.less";
export default class User extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      current: 2
    };
  }

  render() {
    return (
      <View className="menu-bar">
        <AtList>
          <AtListItem
            title="我的收藏"
            note="收藏的课程都在这里"
            extraText="查看详情"
            arrow="right"
            iconInfo={{ size: 25, color: "#78A4FA", value: "star" }}
          />
          <AtListItem
            title="我的评价"
            note="评论和回复都在这里"
            extraText="查看详情"
            arrow="right"
            iconInfo={{ size: 25, color: "#FF4949", value: "bookmark" }}
          />
        </AtList>
        <MenuBar currentId={this.state.current}></MenuBar>
      </View>
    );
  }
}
