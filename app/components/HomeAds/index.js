import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      return(
        <div id ="home-ad">
          <h2>超值特惠</h2>
          <div className = "ad-container clear-fix">
          {
            this.props.data.map((item,index) => {
            return  <div key= {index} className="ad-itme float-left">
                        <a href = {item.url} >
                          <img src={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508785621639&di=91ac7199137677aefbbdea094744e21c&imgtype=0&src=http%3A%2F%2Fbpic.wotucdn.com%2F15%2F66%2F97%2F15669724-5928589eff61a12bce36a991158d185b.jpg"}/>
                        </a>
                    </div>
              }
            )
          }

        </div>

        </div>
      )
    }
}

export default  HomeAd
