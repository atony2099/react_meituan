
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'
import SearchDeatail from '../containers/Search'

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/User' component={User}/>
                    <Route path='/search/:category(/:keyword)' component={SearchDeatail} />
                    <Route path='/shop/:shopID' component = {Detail}/>
                    <Route path= '*' component= {NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default  RouterMap
