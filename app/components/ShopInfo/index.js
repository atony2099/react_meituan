import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import './style.less'
import Star from  '../Star'
import  * as commonFunc from  '../../util/commonFunction'


// module.exports = {
//     img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
//     title: '天下第一锅',
//     star: 4,
//     price: '88',
//     subTitle: '重庆 & 四川 麻辣火锅',
//     desc: '营业时间 11:00 - 21:00 <br> 电话订购 11:00 - 19:00 <br> 网络订购 11:00 - 19:00'
// }
class ShopInfo extends React.Component {
    render(){
          const {
                title,
                star,
                price,
                subTitle,
                desc
              } = this.props.data;

        return (
          <div id="shop-detail">
            <div className= "top-detail clear-fix">
                <div className="shop-image-container">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510876588&di=2e1b3f95983d3ce7ca397607f10c8157&imgtype=jpg&er=1&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F91529822720e0cf32a8a3aa70846f21fbe09aa69.jpg"/>
                </div>
                <div className="shop-desc-container">
                  <h2>{title}</h2>
                  <div className="star-container">
                    <Star className="star" starNumber= {star}/>
                    <span className="price">{price}</span>
                  </div>
                  <div>
                    {subTitle}
                  </div>
                </div>
            </div>
            <div  dangerouslySetInnerHTML={commonFunc.createInnerHtml(desc)}  className ="bottom-detail"/>
          </div>
        )
      }
}


export default ShopInfo
