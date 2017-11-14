import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData }  from '../../../fetch/detail/detail'
import LoadMore from '../../../components/LoadMore'
import ShopComments  from '../../../components/ShopComments'


class Comments extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          isLoading:false,
          commnets:[],
          page:0
        }

    }
    // isLoading,loadMorefunc
    render() {
        const {commnets,isLoading} = this.state;
        console.log(commnets);
        return (
          <div>
          {
            commnets.count > 0 ?
            <ShopComments commnet= {commnets}/>:<div/>
          }
          {

          }



          </div>

        )
    }

    componentDidMount(){
      this.loadData();
    }


    loadFirstpage(){

    }

    loadData(){
      // console.log(getShopDetailData);
      let {commnets}  = this.state
      let  data =  getCommentData(this.state.page, this.props.id);
      data.then(data=>data.json()).then(json=> {
        console.log(json)
        return json
      })
      .then(json=>  commnets.concat(json["data"]))
      .then(()=> {
        console.log(commnets.length,'currentLength is ___');
      })
    }



}
export default Comments
