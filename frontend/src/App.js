/**
 * @author: zhishuai-tang
 * @Date: 2018-09-14 16:19:00
 * @version: 1.0
 */

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// 引入Antd的导航组件
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.less';
import './App.css';

import UserManager from './components/usermanager';

const SubMenu = Menu.SubMenu;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        });
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        this.setState({
            username: 'zhishuai-tang'
        });
    }

    render() {
        return (
            <div>
                <div id="leftMenu">
                    <img src={require('./images/logo.png')} width='50' id='logo' />
                    <Menu theme="light"
                        onClick={this.handleClick}
                        style={{width: 185}}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline">
                        <SubMenu key="sub1" title={<span><Icon type="mail"/><span>组织与员工管理</span></span>}>
                            <Menu.Item key="1"><Link to="/myTable">部门管理</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/userManager">员工管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>考勤管理</span></span>}>
                            <Menu.Item key="3"><Link to="/myCard">考勤数据导入</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myAnimate">考勤补录</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/myAnimate">考勤报表</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <span className="sysTitle">北京京杭天丽科技有限公司信息管理系统</span>
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
