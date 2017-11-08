import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  Header from '../../components/Header'
import  CurrentCity from '../../components/CurrentCity'
import  HotCity from '../../components/HotCity'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div>
            <Header title = {"选择城市"}/>
            <CurrentCity userinfo = {this.props.userinfo}
            />
            <HotCity  clickCityFunc = {this.props.update}
            />
          </div>
        )
    }
}

function  mapStateToProps(state){
  return{
    userinfo:state.userinfo
  }
}
function mapDispatchToProps(dispatch){
  return{
    update:(data) => dispatch(userInfoActionsFromOtherFile.update(data))
  }
}

City =  connect(mapStateToProps,mapDispatchToProps)(City)
export default City
