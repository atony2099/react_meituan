import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class  extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      return(

      )
    }

}

export default ;
