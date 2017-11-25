import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class OrderItem extends React.Component {

    constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        isShowComment:false,
      }
      this.clickComment = this.clickComment.bind(this)
      this.clickSubmit = this.clickSubmit.bind(this)
   }

   clickComment(){
     console.log("clickComment");
     if(this.state.isShowComment == false){
       this.setState({isShowComment:true})
     }
   }

   clickSubmit(){
     this.setState({isShowComment:false})
   }

  render(){
      const {orderDetail} = this.props;
      const {img,title,count,price,commentState} = orderDetail;
      const {isShowComment} = this.state;

      let bottomView;
      if (isShowComment) {
      bottomView =  (<div className="comment-container">
          <textarea name="123" rows="10" cols="10"/>
          <button onClick= {this.clickSubmit} >提交</button>
        </div>)
      } else {
        console.log("do nothing");
      }

      let produceCommment;
      if (commentState == 0 && isShowComment == false) {
          produceCommment =  <div className="produce-comment produce-comment-abel" onClick={this.clickComment}>评价</div>
      } else {
          produceCommment =  <div className="produce-comment produce-comment-disable">评价</div>
      }

      console.log("singleItem",orderDetail);
      return (
        <div className='order-container  clear-fix'>
          <div className='image-container float-left'>
            <img src={img}/>
          </div>
          <div className="right-container">
            <div className="shop-name ">{title}</div>
            <div className="produce-count">数量：{count}</div>
            <div className="produce-price">价格：💰{price}</div>
            {produceCommment}
          </div>
            {bottomView}
        </div>
      )
    }

}

export default OrderItem
