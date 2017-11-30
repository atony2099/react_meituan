import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'
import {connect} from 'react-redux'
import { hashHistory } from 'react-router'
import {USERNAME} from '../../config/localStoreKey'
import LocalStore  from   '../../util/localStore'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'


class Login extends React.Component{
    constructor(props,context){
      super(props,context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      const {userName} = this.props.userinfo;
      return(
        <div>
          <Header  title = {userName} />
          <LoginComponent loginFunc={this.handleLogin.bind(this)}/>
        </div>
      )
    }

    componentDidMount(){
      console.log("Login========componentDidMount");
       this.checkHasLogin()
    }


    handleLogin(userName){
      LocalStore.setItem(USERNAME,userName);
      this.props.update(userName);
      const {params} = this.props
      if (params.loginedPath) {
        hashHistory.replace(params.loginedPath)
      } else {
        hashHistory.replace('/User')
      }
    }


    checkHasLogin(){
      // 1. check user haslogin
      // 2. if login  push to userperson
      // 3. else stay in login page
      let userName  = LocalStore.getItem(USERNAME);
      if (userName.length) {
        this.props.update(userName);
        hashHistory.push('/User');
      } else {

      }
    }
}


// ======= redux =========
function mapStateToProps(state){
  return {
    userinfo:state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return{
    update:(data) => dispatch(userInfoActionsFromOtherFile.update(data))
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Login)
