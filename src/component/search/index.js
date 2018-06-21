import React, { Component } from 'react'
import { Button } from 'antd'
import { Switch, Redirect, Route, NavLink, Link } from "react-router-dom"
import * as actions from './modules/action'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const router = {
    pathname: '/goods',
    state: ''
}

const newclassList = []

class Search extends Component {
    componentDidMount(){
        let keyValue = this.props.location.state;
        const { getSearchList } = this.props;
        getSearchList(keyValue);
    }
    render() {
        const { goodsList} = this.props;
        return (
            <div className="searchresult">
            <div className = "searchresult-content">
                    <div className='course-tool-bar'>
                        <div className='tool-left'>
                            <a>最新</a>
                            <a>最热</a>
                        </div>
                    </div>
                    <div className='course-list'>
                        <div className='moco-course-list'>
                            {goodsList.map((ele, index) => (
                                <div className='course-card-container' key={index}>
                                    <Link to={{ ...router, state: ele }}>
                                        <div className='course-card-top'>
                                            <img src="https://gd2.alicdn.com/imgextra/i4/2889424183/TB29Bb4uuySBuNjy1zdXXXPxFXa_!!2889424183.jpg">
                                            </img>
                                        </div>
                                        <div className='course-card-content'>
                                            <h3>{"￥"+ele.goodsPrice}</h3>
                                            <div className='course-card-bottom'>
                                                <div className='course-card-info'>
                                                    {/* <span>基础</span>
                                                    <span>人数:{parseInt(Math.random() * 100)}</span> */}
                                                    <p>{ele.goodsName}</p>
                                                </div>
                                                {/* <p className='course-card-desc'>{ele.goodsDescription}</p> */}
                                                <p>已售:100</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                            }

                        </div>
                    </div>
                </div>
                </div>
        
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state.search, ...state.userConfig }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);