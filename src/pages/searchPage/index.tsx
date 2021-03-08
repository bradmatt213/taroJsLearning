import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { getCurrentInstance } from "@tarojs/taro";
import { AtList, AtListItem,AtSearchBar } from "taro-ui";


import "./index.less";
export default class User extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ""
    };
  }
  componentDidMount() {
    console.log(getCurrentInstance().router.params); 
    this.setState({
      searchKey:getCurrentInstance().router.params.searchValue
    })
  }
  onChange(){

  }
  onActionClick(){

  }
  render() {
    return (
      <View className="menu-bar">
         <AtSearchBar
            value={this.state.searchKey}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
        <AtList>
          <AtListItem title="课程1" note="描述信息" />
          <AtListItem title="课程2" note="描述信息" arrow="right" />
          <AtListItem
            arrow="right"
            note="描述信息"
            title="课程33"
            extraText="详细信息详细信息详细信息详细信息"
          />
        </AtList>
      </View>
    );
  }
}
