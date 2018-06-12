import React, { Component } from "react"
import { NavLink, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const initRows = [
    { title: '首页', url: '/home' },
    { title: '商城中心', url: '/goods' },
    // { title: '解决方案', url: '/solve' },
    // { title: '客户案例', url: '/customer' },
    { title: '帮助中心', url: '/help' },
    { title: '新闻动态', url: '/news' },
    { title: '联系我们', url: '/connect' },
]

const style = {
    background: '#38BCA4',
    color: '#fff'
}

class Header extends Component {

    state = {
        rows: []
    }

    componentWillMount() {
        // let newRows = initRows.map((params) => {
        //     return params.title === '首页' ? { title: '首页', active: true } : params;
        // })
        // this.setState({
        //     rows: newRows
        // })
    }

    render() {
        const { userName } = this.props;
        return (
            <header>
                <div className="headerTop">
                    <div className="headerContent">
                        {
                            userName ? <span>您好： <Link to='/profile/personInfo'>{userName}</Link></span> : <Link to='/signin'>登录</Link>
                        }
                    </div>
                </div>
                <nav>
                    <div className="container">

                        <Link to='/home'><span style={{ fontSize: '35px',fontFamily:'cursive',marginLeft:'50px'}}>小鸣学堂</span></Link>
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