import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'
import List from  '../../../components/HomeList'
import LoadMore from '../../../components/LoadMore'

class HomeList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            resultData:[],
            hasMore:false,
            isLoadingMore:false,
            page:0
        }
    }

    render(){
      const {hasMore} = this.state;
      return(
        <div>
          <h2 className= "home-list-title">猜你喜欢</h2>
          {
            this.state.resultData.length
            ? <List data={this.state.resultData}/>
            : <div></div>
          }
          {
            hasMore
            ? <LoadMore isLoadingMore= {this.state.isLoadingMore}
              loadMorefunc = {()=>this.loadMoreData()}>
              </LoadMore>
            :<div>已经加载完毕了</div>
          }
        </div>
      )
    }

    loadMoreData(){
      var  {page,isLoadingMore,resultData} = this.state
      this.setState({
        isLoadingMore:true
      })
      this.getList(resultData);
      this.setState({
        isLoadingMore:false,
        page:page++
      })
    }
    getList(result){
      let resultList = getListData("beijing",this.state.page)
      resultList.then(res=>res.json())
      .then(data=>{
          let list  = result.concat(data.data)
          this.setState({
              resultData:list,
              hasMore:data.hasMore
            }
          )
      })
      .catch(ex => {
              // 发生错误
              if (__DEV__) {
                  console.error('列表获取数据报错, ', ex.message)
              }
          })
    }

    componentDidMount(){
      this.loadMoreData();
    }
}


export default  HomeList
