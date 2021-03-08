import React from "react";
import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import { getCurrentInstance } from "@tarojs/taro";
import MenuBar from "../components/menuBar";
import VirtualList from "@tarojs/components/virtual-list";
import {
  AtTabs,
  AtTabsPane,
  AtSearchBar,
  AtCard,
  AtIcon,
  AtRate,
  AtTag,
  AtAvatar
} from "taro-ui";

import "./index.less";

export default class Class extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      selectedAtbar: 0,
      searchKey: "",
      tabsList: [
        { title: "前端开发" },
        { title: "移动端开发" },
        { title: "后端开发" },
        { title: "测试运维" },
        { title: "情感天地" },
        { title: "运动馆" },
        { title: "快乐男孩" },
        { title: "NBA" },
        { title: "CBA" },
        { title: "WNBA" }
      ],
      data: new Array(10).fill("")
    };
  }
  componentDidMount() {}
  handleClick(value) {
    this.setState({
      selectedAtbar: value
    });
  }
  onChange(value) {
    this.setState({
      searchKey: value
    });
  }

  render() {
    const { data } = this.state;
    const dataLen = data.length;
    return (
      <View className="index">
        <View style={{ margin: "20px 0" }}>
          <AtSearchBar
            value={this.state.searchKey}
            onChange={this.onChange.bind(this)}
          />
        </View>
        <AtTabs
          current={this.state.selectedAtbar}
          scroll
          height="400px"
          tabDirection="vertical"
          tabList={this.state.tabsList}
          onClick={this.handleClick.bind(this)}
        >
          {this.state.tabsList.map((tabItem, index) => (
            <AtTabsPane
              tabDirection="vertical"
              current={this.state.selectedAtbar}
              index={index}
            >
              {this.state.selectedAtbar === index ? (
                <View style="font-size:18px;text-align:center;height:400px;">
                  <AtCard
                    title="人气Top"
                    renderIcon={
                      <AtIcon value="bell" size="15" color="#F00"></AtIcon>
                    }
                  >
                    <View key={index}>
                      <View style={{ margin: "20px 0" }}>
                        <AtRate value={8} max={10} size={15} />
                      </View>
                      <View className="at-row">
                        <View className="at-col-3" style={{ height: "80px" }}>
                          <AtAvatar
                            circle
                            image="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3237756097,1887481014&fm=15&gp=0.jpg"
                          ></AtAvatar>
                        </View>
                        <View className="at-col-6">
                          <View style={{ fontWeight: "bold" }}>
                            勒布朗詹姆斯
                          </View>
                          <View>
                            <AtTag type="primary" circle size="small">
                              火锅店长
                            </AtTag>
                          </View>
                          <View style={{ color: "#ccc" }}>
                            36 分 7篮板 1断球
                          </View>
                          <View className="hasTag">
                            "#年迈的老国王#LA养老生活#"
                          </View>
                        </View>
                        <View className="at-col-3">
                          <View style={{ fontSize: "20px;color:#004085" }}>
                            9.8分
                          </View>
                          <View style={{ fontSize: "10px;color:#ccc" }}>
                            111人评价
                          </View>
                        </View>
                      </View>
                    </View>
                    <View key={index}>
                      <View style={{ margin: "20px 0" }}>
                        <AtRate value={8} max={10} size={15} />
                      </View>
                      <View className="at-row">
                        <View className="at-col-3" style={{ height: "80px" }}>
                          <AtAvatar
                            circle
                            image="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3237756097,1887481014&fm=15&gp=0.jpg"
                          ></AtAvatar>
                        </View>
                        <View className="at-col-6">
                          <View style={{ fontWeight: "bold" }}>
                            勒布朗詹姆斯
                          </View>
                          <View>
                            <AtTag type="primary" circle size="small">
                              火锅店长
                            </AtTag>
                          </View>
                          <View style={{ color: "#ccc" }}>
                            36 分 7篮板 1断球
                          </View>
                          <View className="hasTag">
                            "#年迈的老国王#LA养老生活#"
                          </View>
                        </View>
                        <View className="at-col-3">
                          <View style={{ fontSize: "20px;color:#004085" }}>
                            9.8分
                          </View>
                          <View style={{ fontSize: "10px;color:#ccc" }}>
                            111人评价
                          </View>
                        </View>
                      </View>
                    </View>
                    <View key={index}>
                      <View style={{ margin: "20px 0" }}>
                        <AtRate value={8} max={10} size={15} />
                      </View>
                      <View className="at-row">
                        <View className="at-col-3" style={{ height: "80px" }}>
                          <AtAvatar
                            circle
                            image="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3237756097,1887481014&fm=15&gp=0.jpg"
                          ></AtAvatar>
                        </View>
                        <View className="at-col-6">
                          <View style={{ fontWeight: "bold" }}>
                            勒布朗詹姆斯
                          </View>
                          <View>
                            <AtTag type="primary" circle size="small">
                              火锅店长
                            </AtTag>
                          </View>
                          <View style={{ color: "#ccc" }}>
                            36 分 7篮板 1断球
                          </View>
                          <View className="hasTag">
                            "#年迈的老国王#LA养老生活#"
                          </View>
                        </View>
                        <View className="at-col-3">
                          <View style={{ fontSize: "20px;color:#004085" }}>
                            9.8分
                          </View>
                          <View style={{ fontSize: "10px;color:#ccc" }}>
                            111人评价
                          </View>
                        </View>
                      </View>
                    </View>
                    <View key={index}>
                      <View style={{ margin: "20px 0" }}>
                        <AtRate value={8} max={10} size={15} />
                      </View>
                      <View className="at-row">
                        <View className="at-col-3" style={{ height: "80px" }}>
                          <AtAvatar
                            circle
                            image="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3237756097,1887481014&fm=15&gp=0.jpg"
                          ></AtAvatar>
                        </View>
                        <View className="at-col-6">
                          <View style={{ fontWeight: "bold" }}>
                            勒布朗詹姆斯
                          </View>
                          <View>
                            <AtTag type="primary" circle size="small">
                              火锅店长
                            </AtTag>
                          </View>
                          <View style={{ color: "#ccc" }}>
                            36 分 7篮板 1断球
                          </View>
                          <View className="hasTag">
                            "#年迈的老国王#LA养老生活#"
                          </View>
                        </View>
                        <View className="at-col-3">
                          <View style={{ fontSize: "20px;color:#004085" }}>
                            9.8分
                          </View>
                          <View style={{ fontSize: "10px;color:#ccc" }}>
                            111人评价
                          </View>
                        </View>
                      </View>
                    </View>
                  </AtCard>
                </View>
              ) : null}
            </AtTabsPane>
          ))}
        </AtTabs>
        <MenuBar currentId={this.state.current}></MenuBar>
      </View>
    );
  }
}
