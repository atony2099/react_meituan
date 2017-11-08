import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  Header  from '../../components/Header'


class Comments extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
              这里是评论详情
            </div>
        )
    }
}
export default Comments
