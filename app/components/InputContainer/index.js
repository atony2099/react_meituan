import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class  InputContainer  extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          inputValue:''
        }
    }

    render(){
      const {inputValue} = this.state;
      return(
        <div className="input-container">
          <i className="icon-search"></i>
          <input className="icon-input"
            value = {inputValue}
            onChange={(e)=>this.handelClick(e)}
            onKeyUp = {this.handleKeyEnter.bind(this)
            }
          type="text" placeholder="请输入关键字"/>
        </div>
      )
    }

   handelClick(e){
     this.setState({inputValue:e.target.value})
    }

    handleKeyEnter(e){
      if(e.keyCode == 13) {
          this.props.handleKeyEnter(e.target.value)
      }
    }

    componentDidMount(){
      const {inputValue} = this.props;
      console.log(this.props,"====================InputContainerDidMount")
      this.setState({inputValue:inputValue});
    }



}
export default InputContainer;
