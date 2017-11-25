import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import InputContainer from '../InputContainer'
import {Link,hashHistory} from 'react-router'


import './style.less'
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                  <Link to='/city'>
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                  </Link>
                </div>
                <div className="home-header-right float-right">
                  <Link to="/login">
                    <i className="icon-user"></i>
                  </Link>
                </div>
                <div className="home-header-middle">
                    <InputContainer handleKeyEnter = {this.handleEnter.bind(this)}/>
                </div>
            </div>
        )
    }

    handleEnter(value){
        if (value.length<=0) {return};
        let path = "search/all/"+ value;
        console.log(path);
        hashHistory.push(path);
    }
}



export default HomeHeader
