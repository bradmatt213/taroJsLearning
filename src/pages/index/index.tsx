import { Component } from "react";
import Taro, { requirePlugin } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import MenuBar from "../components/menuBar";
import { Swiper, SwiperItem } from "@tarojs/components";
import { AtIcon, AtGrid, AtSearchBar } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default class Index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      swiperPage: [
        {
          name: "123",
          pic:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=982594293,1740742014&fm=26&gp=0.jpg"
        },
        {
          pic:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180827%2F694c6cb31cbd4a769cb22e8ca93b1851.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617463197&t=96c1767f243ebb8396c4fbe54facda5a"
        },
        {
          pic:
            "https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/2cf5e0fe9925bc314951b1fd5edf8db1cb137042.jpg"
        }
      ],
      searchKey: ""
    };
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  onChange(value) {
    this.setState({
      searchKey: value
    });
  }
  onActionClick() {
    Taro.navigateTo({
      url: "/pages/searchPage/index?searchValue=" + this.state.searchKey
    });
  }
  render() {
    return (
      <View className="index">
        <View>
          <AtSearchBar
            value={this.state.searchKey}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
        </View>
        <Swiper
          className="swiper-item"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          {this.state.swiperPage.map((item, index) => (
            <SwiperItem key={index}>
              <Image src={item.pic}></Image>
            </SwiperItem>
          ))}
        </Swiper>
        <AtGrid
          mode="rect"
          hasBorder={false}
          data={[
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
              value: "前端开发"
            },
            {
              image:
                "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
              value: "后端开发"
            },
            {
              image:
                "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
              value: "移动开发"
            },
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
              value: "计算机基础"
            },
            {
              image:
                "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
              value: "前沿技术"
            },
            {
              image:
                "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
              value: "测试运维"
            }
          ]}
        />
        <View className="hot-title" style={{ color: "#FF8936" }}>
          热门
          <View className="at-icon at-icon-analytics"></View>
        </View>
        <View className="at-row">
          <View
            className="at-col at-col-5"
            style="height:100px;overflow:hidden;margin:0 10px"
          >
            <Image
              style="width: 100%;object-fit: none;"
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1076167398,1288565444&fm=26&gp=0.jpg"
            ></Image>
          </View>
          <View
            className="at-col at-col-5"
            style="height:100px;overflow:hidden;margin:0 10px"
          >
            <Image
              style="width: 100%;object-fit: none;"
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1546647709,3597328606&fm=26&gp=0.jpg"
            ></Image>
          </View>
        </View>
        <View className="at-row" style="margin:20px 0">
          <View
            className="at-col at-col-5"
            style="height:100px;overflow:hidden;margin:0 10px"
          >
            <Image
              style="width: 100%;object-fit: none;"
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1076167398,1288565444&fm=26&gp=0.jpg"
            ></Image>
          </View>
          <View
            className="at-col at-col-5"
            style="height:100px;overflow:hidden;margin:0 10px"
          >
            <Image
              style="width: 100%;object-fit: none;"
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1546647709,3597328606&fm=26&gp=0.jpg"
            ></Image>
          </View>
        </View>
        <View style="margin-bottom:60px">到底啦~</View>
        <MenuBar currentId={this.state.current}></MenuBar>
      </View>
    );
  }
}
