import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class StoreView extends React.Component {

    render(){
      const {userinfo} = this.props;
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
        </div>
      )
    }

    clickStoreFunc(isStore){
      const {clickStoreFunc} = this.props;
      clickStoreFunc(isStore);
    }

}

export default StoreView
