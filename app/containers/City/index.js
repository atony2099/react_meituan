import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  Header from '../../components/Header'
import  CurrentCity from '../../components/CurrentCity'
import  HotCity from '../../components/HotCity'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import LocalStore  from   '../../util/localStore'
import {USERNAME} from  '../../config/localStoreKey'
import {hashHistory} from 'react-router'

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
            <HotCity  clickCityFunc = {this.handelCityChange.bind(this)}
            />
          </div>
        )
    }

    handelCityChange(data){
      console.log(this.props.userinfo,data);
      const userinfo = this.props.userinfo;
      userinfo.cityName = data;
      // 1. updata user
      this.props.update(userinfo);
      // 2. set to local
      // LocalStore.setItem({USERNAME:data});
      //3. 跳转页面
      hashHistory.push('/')
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

export default  connect(mapStateToProps,mapDispatchToProps)(City)
