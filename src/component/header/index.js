import React, { Component } from "react"
import { NavLink, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../../assets/logo.png'
import { Input,message } from 'antd';
import {post}  from '../../utils/request'
const Search = Input.Search;

const initRows = [
    { title: '首页', url: '/home' },
    { title: '商城中心', url: '/help' },
    // { title: '解决方案', url: '/solve' },
    // { title: '客户案例', url: '/customer' },
    { title: '帮助中心', url: '/help' },
    { title: '新闻动态', url: '/news' },
    { title: '联系我们', url: '/connect' },
]

const style = {
    background: '#a1bc22',
    color: '#fff'
}

const router = {
    pathname: '/search',
    state: '鸡蛋'
}

class Header extends Component {

    state = {
        rows: [],
        keyValue: ''
    }

    componentWillMount() {
        // let newRows = initRows.map((params) => {
        //     return params.title === '首页' ? { title: '首页', active: true } : params;
        // })
        // this.setState({
        //     rows: newRows
        // })
    }

    logOut = ()=>{
        post('/user/logOut',{}).then(res => {
            if (res) {
                message.success(res);
                window.location.href = '/'
            }
        }).catch((err) => {
            message.error(err.message)
        })
    }

    render() {
        const { phoneNum } = this.props;
        let keyValue = this.state.keyValue;
        let currentUrl = window.location.href;
        let a = currentUrl.indexOf("search");
        console.error("phoneNum:" + phoneNum);
        return (
            <header>
                <div className="headerTop">
                    <div className="headerContent">
                        {
                            phoneNum ?
                                <span>
                                    您好：{phoneNum} 
                                    <a onClick = {this.logOut}>退出登录</a>
                                </span>
                                : <Link to='/signin'>用户登录</Link>
                        }{
                            phoneNum ? <Link to='/profile/myTrade'>个人中心</Link> :null
                        }
                        <span ><Link to='/query'>查询订单</Link></span>
                        <span ><Link to='/shoppingCard'>购物车</Link></span>
                       
                    </div>
                </div>
                <nav>
                    <div className="container">
                        <Link to='/home'><img style={{ position: 'absolute', top: '0', width: '200px', marginLeft: '50px' }} src={logo} /></Link>
                        <div className="search">
                            {/* <Search
                                placeholder="鸡蛋"
                                onSearch={value => this.gotoPage('/search')}
                                style={{ width: 350,height:50 }}
                            /> */}
                            <input
                                placeholder="鸡蛋"
                                value={keyValue}
                                onChange={(e) => {
                                    this.setState({ keyValue: e.target.value })
                                }} />
                            {a > 0 ?
                                <a onClick={() => {

                                }}>
                                    <span><i className="anticon anticon-search ant-input-search-icon"></i></span>
                                </a>
                                : <Link to={{ ...router, state: keyValue }}>
                                    <span><i className="anticon anticon-search ant-input-search-icon"></i></span>
                                </Link>}

                        </div>
                        {/* <Link to='/home'><span style={{ fontSize: '35px',fontFamily:'cursive',marginLeft:'50px'}}>小鸣学堂</span></Link> */}
                        <ul>
                            {
                                initRows.map((params, index) => (
                                    <li key={index}><NavLink to={params.url} activeStyle={style} >{params.title}</NavLink></li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
            </header >
        )
    }

}

const wh = connect(state => ({
    ...state.userConfig
}))(Header)

export default withRouter(wh)