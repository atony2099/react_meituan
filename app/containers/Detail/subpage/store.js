import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData }  from '../../../fetch/detail/detail'
import LoadMore from '../../../components/LoadMore'
import StoreComponents  from '../../../components/Store'
import {hashHistory} from 'react-router'
import * as StoreActions from  '../../../actions/store'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class Store extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          hasCollected:false
        }

    }
    // isLoading,loadMorefunc
    render() {
      return (
            <StoreComponents hasCollected = {this.state.hasCollected} clickStoreFunc={this.handleClickStore.bind(this)}/>
      )
    }
    handleClickStore(isStore){
      // 1.if not login - push login
      // 2. excutelogin
      const {shopID} = this.props;
      const haslogin = this.checkIfLogin();
      console.log("currentIDIs",shopID,haslogin);
      if (haslogin == false) {
        let  shopPath = "/shop/" + shopID;
        let encodePath = encodeURIComponent(shopPath);
        let lastPath = "/login" + "/" + encodePath;
        console.log(lastPath);
        hashHistory.push(lastPath)
        return;
      }
      //3. excute collect
      const {addCollection,removeColletciton} = this.props.storeActions;
      if (isStore) {
        addCollection(shopID);
        this.setState({hasCollected:true});
      }else{
        removeColletciton(shopID);
          this.setState({hasCollected:false});
      }
    }

    componentDidMount(){
      // 0. get the collections
      const {colletions,shopID} = this.props;

      // console.log("props:",this.props,"currentID:",colletctionID,"currentCollections:",colletions);
      // 1. checkIfLogin ====
      let haslogin = this.checkIfLogin();
      if (haslogin) {
        colletions.forEach((ele) =>{
            if (ele == shopID) {
                this.setState({hasCollected:true});
              return;
            }
        })
      }
    }

    checkIfLogin(){
      var {userinfo} = this.props;
      console.log("store currentProps===",userinfo);
      if (userinfo.userName) {
          console.log("hasLogin",userinfo);
          return true;
      } else  {
          console.log("NothasLogin",userinfo);
          return false;
      }
    }
}

function mapStateToProps(state){
  return {
    colletions: state.colletions,
    userinfo:state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    storeActions:bindActionCreators(StoreActions,dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Store)
