  import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  Header  from '../../components/Header'
import  ShopInfo from '../../components/ShopInfo'
import Comments from  './subpage/Comments'

import { getShopDetailData } from '../../fetch/detail/detail'

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
                <Comments/>
            </div>
        )
    }


    componentDidMount(){

        getShopDetailData('123').then(res=>res.json())
        .then(data=>{
          this.setState({
            shopDetail:data
          })
        })

    }

}

export default Detail
