import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getSearchData } from '../../../fetch/search/search'
import List from  '../../../components/HomeList'
import LoadMore from '../../../components/LoadMore'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const initState = {
  hasMore:false,
  page:0,
  isLoadingMore:false,
  resultData:[]
};

class SeachList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initState;
    }

      render(){
        const {hasMore} = this.state;
        return(
          <div>
          {/* add  */}
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
            isLoadingMore:true,
          })
          this.getList(resultData);
          this.setState({
            isLoadingMore:false,
          })
        }

        getList(result){
          const {page,resultData} = this.state
          const {category,inputValue} = this.props;
          const {cityName} = this.props.userinfo;
          let resultList =  getSearchData(page, cityName, category, inputValue)
          resultList.then(res=>res.json())
          .then(data=>{
              let list  = resultData.concat(data.data)
              this.setState({
                  resultData:list,
                  hasMore:data.hasMore,
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
          this.setState(initState);
          this.loadMoreData();
        }

        componentDidUpdate(prePros,presSate){
          console.log(prePros,"props");
            // 新的值 vs 旧的值
            var {inputValue:currentInputValue,category:currentCategory} = this.props;
            const {inputValue:preInputValue,category:preCategory} = prePros;
            if(currentInputValue == preInputValue && currentCategory == preCategory){
                return;
            }
            this.setState(initState)
            this.loadMoreData();
        }
}


function mapStateToProps(state) {
    return {
      userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SeachList)
