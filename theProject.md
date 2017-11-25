import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import './style.less'

class StarView extends React.Component {
    render(){
        let starNumber = this.props.starNumber;
        console.log(starNumber)
        return (
          <div id="star">
          {
              [1,2,3,4,5].map((ele,index)=>{
              let iconType =  index >= starNumber ? 'light' : ''
              return <i key={index} className={'icon-star' + iconType}></i>
            })
          }
          </div>
        )
    }
}


export default StarView
