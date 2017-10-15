
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import RouterMap from './router/routeMap'
import  configureStore from './store/configureStore'
// 创建 Redux 的 store 对象

import  './static/css/common.less'
import './static/css/font.css'

// 配置store
const store = configureStore();
render(
    <Provider store = {store}>
        <RouterMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)
