import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HotCity  extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      let cityArray = ["北京","上海","杭州","苏州","广州","南京","南京","厦门","武汉","西安"];
      return(
        <div className ="hot-city">
          <h3>热门城市</h3>
          <div className ="city-list-container">
              <ul>
                {
                 cityArray.map((ele,index)=>
                  <li key = {index}>
                    <span onClick={(e)=>this.handleCityEvent(e)}>
                      {ele}
                    </span>
                  </li>
                )
                }
              </ul>
          </div>
        </div>
      )
    }

    handleCityEvent(e){
      let city = e.currentTarget.textContent;
      const {clickCityFunc} = this.props;
      clickCityFunc(city);
    }

}

export default HotCity;
