import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class CurrentCity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        {console.log(this.props)}
      return(
        <div className="current-city">
          <h1>{this.props.userinfo.cityName}</h1>
        </div>
      )
    }

}

export default CurrentCity;
