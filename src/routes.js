import React from "react"
import { Router, Route, browserHistory, hashHistory } from "react-router"
import { Provider } from "react-redux"
import App from "./components/App"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import DashBoard from "./components/DashBoard"

import { store } from "./redux/store"

import {setCurrentUser} from "./redux/actions/authAction" 
if(sessionStorage.jwtToken){
    const user = JSON.parse(sessionStorage.user)
    store.dispatch(setCurrentUser(user))
}

function isAdmin(){//判断是否是管理员
    if (!sessionStorage.getItem('jwtToken') && !sessionStorage.getItem('user')) return false;
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user.admin === true ? true : false
}
function requireAuth(nextState,replace){//dashboard进入的路由钩子
    if(!isAdmin()){
        replace('/login')
    }
}

export default class RenderRouter extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/dashboard" component={DashBoard} onEnter={requireAuth}/>                        
                    </Route>
                </Router>
            </Provider>
        )
    }
}