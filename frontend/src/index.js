import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 引入React-Router模块
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import UserManager from "./components/usermanager";

// 配置路由
ReactDOM.render((
    <div>
        <BrowserRouter>
            <Switch>
                <App>
                    <Route path="/userManager" component={UserManager} />
                </App>
            </Switch>
        </BrowserRouter>
    </div>

), document.getElementById('root'));
registerServiceWorker();
