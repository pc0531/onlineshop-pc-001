import React, { Component } from 'react'
import * as actions from './modules/action'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Icon, Input, Button, message } from 'antd'
import { validatePhone } from '../../utils/uvalidate'
import moment from 'moment'
import Constants from '../../common/Constants'


class Query extends Component {
    state = {
        phoneNum: '',
        isClick: false
    }
    render() {
        const { phoneNum, isClick } = this.state;
        const { queryByPhoneNum, tradeList } = this.props;
        return (
            <div className="query">
                <div className="queryContent">
                    <div className="queryContent-top">
                        <h2><Icon type="user" /><span>查询订单</span></h2>
                    </div>
                    <div className="queryContent-bottom">
                        <p>
                            <span>请输入手机号码:</span>
                            <input
                                value={phoneNum}
                                onChange={(e) => {
                                    this.setState({ phoneNum: e.target.value })
                                }}
                            />
                            <button
                                onClick={() => {
                                    if (!phoneNum) {
                                        message.error("请输入手机号码!")
                                        return;
                                    }
                                    if (!validatePhone(phoneNum)) {
                                        message.error("请输入正确格式的手机号码!")
                                        return;
                                    }

                                    queryByPhoneNum(phoneNum)
                                    this.setState({ isClick: true })
                                }}
                            >确定
                            </button>
                        </p>

                    </div>
                    <div className="queryContent-detail">
                        {
                            isClick ?
                                <ul>
                                    {
                                        tradeList && tradeList.length > 0 ? tradeList.map((ele) => {
                                            return (
                                                <li>
                                                    <p>
                                                        <span>订单号:</span><span>{ele.id}</span>
                                                    </p>
                                                    <p>
                                                        <span>下单时间:</span><span>{moment(ele.addTime).format("YYYY-MM-DD HH:mm:ss")}</span>
                                                    </p>
                                                    <p>
                                                        <span>手机号码:</span><span>{ele.addressVo.phoneNum}</span>
                                                    </p>
                                                    <p>
                                                        <span>收件人:</span><span>{ele.addressVo.name}</span>
                                                    </p>
                                                    <p>
                                                        <span>快递单号:</span>
                                                        {ele.trackingNum ?
                                                            <span>{ele.trackingNum} &nbsp;  &nbsp; &nbsp;查询地址:<a onClick={() => { window.open("http://www.kuaidi100.com") }}>http://www.kuaidi100.com</a></span> 
                                                            : "无"
                                                        }

                                                    </p>
                                                    <p>
                                                        <span>订单状态:</span><span>{Constants.tradeStatus[ele.tradeStatus]}</span>
                                                    </p>
                                                </li>
                                            )
                                        })
                                            :
                                            <div className="queryContent-detail-noTrade">
                                                <h2>——————<span>该手机号下暂无订单</span>——————</h2>
                                            </div>
                                    }
                                </ul>
                                : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state.query }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Query)