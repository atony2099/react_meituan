import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'
import List from  '../../../components/HomeList'

class HomeList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render(){
      return(
        <List data={this.state.data}/>
      )
    }


    componentDidMount(){
      const result = getListData("beijing",1)
      result.then(res=>res.json())
      .then(data=>this.setState({data:data.data}))
      .then(data=>console.log(data))
      .catch(ex => {
              // 发生错误
              if (__DEV__) {
                  console.error('列表获取数据报错, ', ex.message)
              }
          })
    }

}


export default  HomeList
