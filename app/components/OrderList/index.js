import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './item/item'
import './style.less'

class OrderList extends React.Component {
    render(){
        const {title,orderList} = this.props;
        console.log("orderlist:",orderList);
        return (
          <div className="userinfo-container">
            <p>{"your order"}</p>
            {
              orderList.map((ele,index) =>
                <Item key={index}  orderDetail= {ele} />)
            }
          </div>
        )
    }
}

export default OrderList
