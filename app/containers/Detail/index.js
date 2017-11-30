  import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  Header  from '../../components/Header'
import  ShopInfo from '../../components/ShopInfo'
import Comments from  './subpage/Comments'
import Store from  './subpage/store'
import { getShopDetailData } from '../../fetch/detail/detail'

import {createHistory} from 'history'


class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          shopDetail:''

        }
    }
    render() {
        return (
            <div>
                <Header  title= {"商家详情"}/>
                <ShopInfo data = {this.state.shopDetail}/>
                <Store shopID={this.props.params.shopID}/>
            </div>
        )
    }

    componentDidMount(){
       console.log("detail has mount");
        let params = this.props.params;
        console.log("detail,params:",params);
        getShopDetailData(params.shopID).then(res=>res.json())
         .then(data=>{
          this.setState({
            shopDetail:data
          })
        })

      this.testHistory()
    }

    testHistory(){

      const {history,location} = this.props;
      // 当前的地址
      // const location = history.getCurrentLocation()
      console.log("history===",location);
      // 监听当前的地址变换
      // const unlisten = history.listen(location => {
      // console.log(location.pathname)
      // })

  }



}

export default Detail
