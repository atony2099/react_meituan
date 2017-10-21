import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import {connect} from 'react-redux'
import Category from '../../components/Category'

class Home extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      return(
        <div>
          <HomeHeader cityName={this.props.userinfo.cityName}/>
          <Category/>
        </div>

      )
    }
}

// ======= redux =========
function mapStateToProps(state){
  return {
    userinfo:state.userinfo
  }
}

export default connect (
  mapStateToProps
)(Home)