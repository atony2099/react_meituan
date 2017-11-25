import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'


class Login  extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          username: ''
        }

    }
    render(){
      return(
        <div className= "login-container clear-fix">
          <div className = "input-container phone-container" onChange={this.handleUserName.bind(this)}>
            <i className="icon-tablet"></i>
            <input placeholder="请输入手机号"/>
          </div>
          <div className = 'input-container password-container' type='password'>
            <i className="icon-key"></i>
            <button>发送验证码</button>
            <input placeholder="输入密码"/>
          </div>
          <div className = 'login-button'>
            <buton onClick={this.handleLogin.bind(this)}>登录</buton>
          </div>
        </div>
      )
    }
    handleUserName(e){
      let value = e.target.value;
      this.setState({username:value});
    }
    handleLogin(){
      console.log("hello");
      this.props.loginFunc(this.state.username);
    }

}

export default Login;
