import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import { bindActionCreators } from 'redux'
import LocalStore  from   '../../util/localStore'
import * as userInfoActionsFromOtherFile  from '../../actions/userinfo'
import {USERNAME} from '../../config/localStoreKey'
import UserInfo from  '../../components/UserInfo'
import Header from  '../../components/Header'
import OrderList from  '../../components/OrderList'


import {getOrderListData} from '../../fetch/user/orderlist'


class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          orderList:[]
        }
    }
    render() {
        return (
          <div>
            <Header title = {"用户主页"} backRouter = {"/"}/>
            <UserInfo userinfo= {this.props.userinfo}/>
            <OrderList orderList = {this.state.orderList}/>  
          </div>
        )
    }

    componentDidMount(){
      const {userinfo} = this.props;
      getOrderListData(userinfo.userName)
      .then(data => data.json())
      .then(data => {
        this.setState({orderList:data})
      })
      .catch(ex => {
        console.log(ex);
      })
    }
}

function mapStateToProps(state){
  return {
    userinfo:state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    // userinfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch),
  }
}


export default connect
(mapStateToProps,mapDispatchToProps)(User)
