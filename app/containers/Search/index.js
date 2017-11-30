import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from  '../../components/SearchHeader'
import SearchList from './subpage/SearchList'

class SearchDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          inputValue:''
        }
    }
    render() {
        const {category,keyword} = this.props.params;
        // console.log(this.props.params,"SearchDetail");
        return (
            <div>
            {console.log(this.props.params,"SearchDetail")}
              <SearchHeader category = {category} inputValue ={keyword}/>
              <SearchList category={category} inputValue = {keyword}/>
            </div>
        )
    }

    componentDidMount(){
      console.log("search didMount");

    }

    componentDidUpdate(){
      console.log("search didupdate");
    }





}


export default SearchDetail
