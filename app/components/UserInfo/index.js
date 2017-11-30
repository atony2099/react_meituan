import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class StoreView extends React.Component {

    render(){
      const {userinfo,loginOutFunc} = this.props;
      return (
        <div className="userinfo-container">
          <div className='info-container'>
            <i className="icon-tablet"></i>
            <span>{userinfo.userName}</span>
          </div>
          <div className='info-container'>
            <i className="icon-tablet"></i>
            <span>{userinfo.cityName}</span>
          </div>
          <div onClick = {this.loginOutFunc.bind(this)} >
            退出登录
          </div>
        </div>
      )
    }

    loginOutFunc(){
      this.props.loginOutFunc();
    }


    clickStoreFunc(isStore){
      const {clickStoreFunc} = this.props;
      clickStoreFunc(isStore);
    }

}

export default StoreView
