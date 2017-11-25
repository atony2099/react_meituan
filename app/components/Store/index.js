import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class StoreView extends React.Component {


    render(){
        const {hasCollected} = this.props;
        console.log("hasColecton:",hasCollected);
        return (
          <div className="storeAndBuy-container">
            {
              hasCollected == false ?
              <button className="button store-button" onClick= {()=>this.clickStoreFunc(true)} >收藏</button>:
              <button className="button store-button hasStore-button" onClick= {()=>this.clickStoreFunc(false)}>已收藏</button>
            }
            <button className="button buy-button">
               购买
            </button>
          </div>
        )
    }

    clickStoreFunc(isStore){
      const {clickStoreFunc} = this.props;
      clickStoreFunc(isStore);
    }

}

export default StoreView
