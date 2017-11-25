import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>正在加载...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取位置信息
        let cityName = LocalStore.getItem(CITYNAME);
        console.log("CurrentCityNameType:",typeof(cityName),cityName);
        if (cityName == null) {
            cityName = '北京'
            LocalStore.setItem(CITYNAME,"beijing")
        }
        var userinfo = this.props.userinfo;
        userinfo.cityName = cityName;
        this.props.userInfoActions.update(userinfo);


        // 更改状态
        this.setState({
            initDone: true
        })
    }
}
// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
    return {
      userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
