import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'


import './style.less'

class Category extends React.Component {

  render(){
      return (
      <div id= "home-category">
        <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left jingdian">景点</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left gouwu">购物</li>
              <li className="float-left shenghuofuwu">生活服务</li>
              <li className="float-left jianshenyundong">健身运动</li>
              <li className="float-left meifa">美发</li>
              <li className="float-left qinzi">亲子</li>
              <li className="float-left xiaochikuaican">小吃快餐</li>
              <li className="float-left zizhucan">自助餐</li>
              <li className="float-left jiuba">酒吧</li>
            </ul>
          </div>

          <div className="carousel-item">
                      <ul className="clear-fix">
                          <li className="float-left meishi">美食</li>
                          <li className="float-left dianying">电影</li>
                          <li className="float-left jiudian">酒店</li>
                          <li className="float-left xuixianyule">休闲娱乐</li>
                          <li className="float-left waimai">外卖</li>
                          <li className="float-left huoguo">火锅</li>
                          <li className="float-left liren">丽人</li>
                          <li className="float-left dujiachuxing">度假出行</li>
                          <li className="float-left zuliaoanmo">足疗按摩</li>
                          <li className="float-left zhoubianyou">周边游</li>
                      </ul>
            </div>
          </ReactSwipe>
        </div>
      )
    }

}


export default Category
