import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './subs/item'

class ShopCommenets  extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      const {comments} = this.props;
       return(
        <h2>用户</h2>
        // {commentsList.map((elemt,index)=>{
        //     return <item comment= {elemt}/>
        // })}
      )
    }
}

export  default ShopCommenets;
