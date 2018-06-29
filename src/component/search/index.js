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
    // componentDidMount(){
    //     // let keyValue = this.props.location.state;
    //     const { getSearchList,searchContent } = this.props;
    //     getSearchList(searchContent);
    // }
    render() {
        const { goodsList } = this.props;
        return (
            <div className="searchresult">
                <div className="searchresult-content">
                    <div className='course-tool-bar'>
                        <div className='tool-left'>
                            <a>最新</a>
                            <a>最热</a>
                        </div>
                    </div>
                    {
                        goodsList.length === 0 ? <h3>——————<span>暂无商品</span>——————</h3> : null
                    }
                    <div className='course-list'>

                        <div className='moco-course-list'>
                            {goodsList.map((ele, index) => (
                                <div className='course-card-container' key={index}>
                                    <Link to={{ ...router, state: ele }}>
                                        <div className='course-card-top'>
                                            <img src={ele.goodsPicUrl}>
                                            </img>
                                        </div>
                                        <div className='course-card-content'>
                                            <h3>{"￥" + ele.goodsPrice}</h3>
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