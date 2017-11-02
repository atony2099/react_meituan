import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  // 监听 frame====， 如果有更多的数据就回调
  render(){
    const {isLoading,loadMorefunc} = this.props;
    return(
      <div className="load-more" ref = {(loadmore)=>this.wrapper = loadmore} >
        {isLoading
        ?  <span> 加载中... </span>
        : <span onClick={()=>loadMorefunc}  > 加载更多 </span>
        }
      </div>
    )
  }
  componentDidMount(){
      const wrapper = this.wrapper;
      const {loadMorefunc} = this.props;

      // 思路获取控件的y值，与 整个window做比较
      function callback (){
          const top = wrapper.getBoundingClientRect().top;
          const {height} = window.screen;
          if (top>0  && top<height) {
            console.log("hello");
            loadMorefunc()
          }
      }
      let timeID;
      window.addEventListener("scroll",function(){
        if (this.props.isLoading) {
            return;
        }
        if(timeID){
          clearTimeout(timeoutId)
        }
        setTimeout(callback,50)
      }.bind(this),false)
  }
}

export default LoadMore
