import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Item extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    const {data}  = this.props;
    return(
      <div className="list-item clear-fix">
        <div className = "item-img-container float-left">
          <img src="http://img0.imgtn.bdimg.com/it/u=1057519802,4245354110&fm=27&gp=0.jpg"/>
        </div>
        <div className ="item-content">
          <div className ="item-title-container clear-fix" >
            <h3 className = "float-left">{data.title}</h3>
            <span className = "float-right">{data.distance} </span>
          </div>
          <p className = "item-sub-title">
            {data.subTitle}
          </p>
          <div className = "item-price-container clear-fix">
            <h3 className ="float-left price">{data.price}元</h3>
            <span className ="float-right  mumber">已售{data.mumber}12份</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Item
