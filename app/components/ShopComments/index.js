import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class ShopCommenets  extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
       return(
        <h2>用户</h2>
      )
    }
}

export  default ShopCommenets;
