import React, { Component } from 'react';
import { Switch, Redirect, Route, NavLink } from "react-router-dom"

const activeStyle = {
    color:'#38BCA4'
}
class ProfileLeft extends Component {
    render() {
        let userId = this.props.userId;
        return (
            <div className='profileLeft'>
                <ul>
                    <li><NavLink to='/profile/personInfo' activeStyle = {activeStyle}>个人资料</NavLink></li>
                    <li><NavLink to='/profile/myTrade' activeStyle = {activeStyle}>我的订单</NavLink></li>
                    {userId === 'C18062100000003'?
                    <li><NavLink to='/profile/allTrade' activeStyle = {activeStyle}>所有订单</NavLink></li> :null}
                     {userId === 'C18062100000003'?
                    <li><NavLink to='/profile/goodsManage' activeStyle = {activeStyle}>商品管理</NavLink></li> :null}
                    {userId === 'C18062100000003'?
                    <li><NavLink to='/profile/recharge' activeStyle = {activeStyle}>充值管理</NavLink></li> :null}
                    {/* <li><NavLink to='/profile/personCenter' activeStyle = {activeStyle}>收藏</NavLink></li>
                    <li><NavLink to='/profile/personCenter' activeStyle = {activeStyle}>笔记</NavLink></li>
                    <li><NavLink to='/profile/personCenter' activeStyle = {activeStyle}>文章</NavLink></li>
                    <li><NavLink to='/profile/personCenter' activeStyle = {activeStyle}>售后</NavLink></li> */}
                </ul>
            </div>
        )
    }
}
export default ProfileLeft;