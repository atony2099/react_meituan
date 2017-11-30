  import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import InputContainer from '../InputContainer'
import './style.less'
import {hashHistory} from 'react-router'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
      return(
        <div className="serach-header">
          <span className='back-container' onClick={this.hanleback.bind(this)}>
              <i className="icon-chevron-left"></i>
          </span>
          <div className="input">
                <InputContainer className='input-container' inputValue = {this.props.inputValue} handleKeyEnter ={this.handleKeyEnter.bind(this)} />
          </div>
        </div>

      )
    }

    hanleback(){
      window.history.back()
    }
    handleKeyEnter(value){
      if (value.length<=0) {return};
      let path = "/search/all/" + encodeURIComponent(value);
      console.log('handleKeyEnter',path);
      hashHistory.push(path);
    }

    componentDidMount(){
      const {inputValue} = this.props;
      console.log(this.props,"====================SearchHeaderDidMount")
      this.setState({inputValue:inputValue});
    }
}

export default SearchHeader
