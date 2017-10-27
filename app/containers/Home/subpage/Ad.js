import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from '../../../fetch/home/home'
import HomeAds from  '../../../components/HomeAds'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render(){
      return(
        <HomeAds data ={this.state.data}/>
      )
    }

    componentDidMount(){
      const  resulte = getAdData()
      resulte.then(res => res.json())
      .then(json => this.setState({data:json}))
      .catch(ex => {
              // 发生错误
              if (__DEV__) {
                  console.error('首页广告模块获取数据报错, ', ex.message)
              }
          })
      }

}

export default HomeAd
