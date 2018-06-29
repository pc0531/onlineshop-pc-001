
import React, { Component } from 'react';
import { Icon, Input, Button, Table, Modal, message } from 'antd'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import moment from 'moment'
import { createDecipheriv } from 'crypto';
import Constants from '../../../common/Constants'

// const tradeStatus = {
//     6: "已取消",

//     5: "已完成",

//     2: "未发货",

//     1: "待支付",

//     3: "已发货",

//     4: "申请取消",
// }

const payType = {
    balance: 1,
    ali: 2,
    wechat: 3
}

const chooseTop = [
    {
        id: 0,
        title: '全部'
    },
    {
        id: 2,
        title: '未发货'
    },
    {
        id: 3,
        title: '已发货'
    }, {
        id: 5,
        title: '已完成'
    }
]

const tradeDetailColumn = [
    {
        dataIndex: 'goodsId',
        title: '商品编号',
        width: '40%',
        align: 'center',
    },
    {
        dataIndex: 'goodsName',
        title: '商品名称',
        width: '30%',
        align: 'center',
    },
    {
        dataIndex: 'goodsNum',
        title: '商品数量',
        width: '30%',
        align: 'center',
    }
]


class AllTrade extends Component {
    state = {
        visible: false,
        status: 0,
        trackingModal: false,
        detailModal: false,
        trackingNum: '',
        tradeId: '',
        haveTracking: false,
        addressId: '',
        msg: ''
    }

    componentDidMount() {
        const { getTradeList } = this.props;
        getTradeList();
    }

    handleOk = () => {
        const { tradeId, trackingNum, status } = this.state;
        const { updateTracking, getTradeList } = this.props;
        let param = {
            tradeId: tradeId,
            trackingNum: trackingNum
        }
        console.error("trackingNum：" + !trackingNum);
        if (!trackingNum) {
            message.error("请输入快递单号");
            return;
        }
        updateTracking(param, () => {
            this.setState({ trackingModal: false })
            getTradeList({ tradeStatus: status })
        })
    }

    handleCancel = () => {
        this.setState({ trackingModal: false })
    }

    detailCancel = () => {
        this.setState({ detailModal: false })
    }

    render() {
        const columns = [
            {
                dataIndex: 'addTime',
                title: '时间',
                width: '21%',
                align: 'center',
                render: (text) => (
                    <span>{moment(text).format("YYYY-MM-DD HH:mm:ss")}</span>
                )
            },
            {
                dataIndex: 'id',
                title: '订单号',
                width: '19%',
                align: 'center'
            },
            {
                dataIndex: 'tradeStatus',
                title: '订单状态',
                width: '14%',
                align: 'center',
                render: (text) => Constants.tradeStatus[text]
            },
            {
                title: '操作',
                width: '14%',
                align: 'center',
                render: (text) => {
                    if (text.tradeStatus === 1) {
                        return (
                            <p style={{ margin: 0 }}>
                                {/* <a>删除</a> */}
                            </p>)
                    }
                    if (text.tradeStatus === 2) {
                        return (
                            <p style={{ margin: 0 }}>
                                <a onClick={() => {
                                    queryAddress(text.addressId, text.id, () => {
                                        this.setState(
                                            {
                                                detailModal: true,
                                                msg: text.msg
                                            }
                                        )
                                    })

                                }}>详情</a>
                                <a onClick={() => {
                                    this.setState(
                                        {
                                            trackingModal: true,
                                            tradeId: text.id,
                                            haveTracking: false
                                        }
                                    )
                                }}>物流信息</a>
                            </p>
                        )
                    }
                    if (text.tradeStatus === 5 || text.tradeStatus === 3) {
                        return (
                            <p style={{ margin: 0 }}>
                                <a onClick={() => {
                                    queryAddress(text.addressId, text.id, () => {
                                        this.setState(
                                            {
                                                detailModal: true,
                                                msg: text.msg
                                            }
                                        )
                                    })

                                }}>详情</a>
                                <a onClick={() => {
                                    this.setState({ trackingModal: true, tradeId: text.id, haveTracking: true, trackingNum: text.trackingNum })
                                }}>物流信息</a>
                            </p>
                        )

                    }
                }
            },
        ]

        const { tradeList, deleteOrder, getTradeList, queryAddress, address, tradeDetailList, tradeCount } = this.props
        const { trackingNum, status, haveTracking, msg } = this.state;
        return (
            <div className='allTrade'>
                <div className='myorderContent'>
                    <h3>全部订单<span>总数:{tradeCount}</span></h3>
                    <ul>
                        {chooseTop.map((ele) => {
                            if (ele.id === status) {
                                return (
                                    <li>
                                        <a style={{ color: 'rgb(56, 188, 164)' }}
                                            onClick={() => {
                                                this.setState({ status: ele.id })
                                                getTradeList({ tradeStatus: ele.id })
                                            }}>{ele.title}</a>
                                    </li>
                                )
                            } else {
                                return (
                                    <li>
                                        <a style={{ color: 'black' }}
                                            onClick={() => {
                                                this.setState({ status: ele.id })
                                                getTradeList({ tradeStatus: ele.id })
                                            }}>{ele.title}</a>
                                    </li>
                                )

                            }

                        })}
                    </ul>
                    <Table columns={columns} dataSource={tradeList} />

                </div>
                <Modal
                    title="物流信息"
                    visible={this.state.trackingModal}
                    onCancel={this.handleCancel}
                    width='500px'
                    footer={null}
                >
                    <div className='payModal'>
                        {
                            haveTracking ?
                                <div>
                                    <p><span style={{ paddingRight: "20px" }}>查询地址:</span>
                                        <a onClick={() => {
                                            window.open("http://www.kuaidi100.com/")
                                        }}>http://www.kuaidi100.com/</a>
                                    </p>
                                    <p>
                                        <span style={{ paddingRight: "20px" }}>快递单号:</span>{trackingNum ? trackingNum : null}
                                    </p>
                                </div>
                                :
                                <div>
                                    <p>
                                        <span style={{ paddingRight: '20px' }}>请输入快递单号</span>
                                        <Input
                                            className='trackingNumInput'
                                            value={trackingNum}
                                            onChange={(e) => {
                                                this.setState({ trackingNum: e.target.value })
                                            }} />
                                    </p>
                                    <Button
                                        onClick={this.handleOk}
                                    >确定
                                    </Button>
                                    <Button
                                        onClick={this.handleCancel}
                                    >
                                        取消
                                    </Button>
                                </div>

                        }


                    </div>
                </Modal>
                <Modal
                    title="订单详情"
                    visible={this.state.detailModal}
                    onCancel={this.detailCancel}
                    width='600px'
                    footer={null}
                >
                    {
                        address[0] ?
                            <div>
                                <p>
                                    <span style={{ paddingRight: '20px' }}>收货地址:</span>
                                    {address[0].province + address[0].city + address[0].area + address[0].detail}
                                </p>
                                <p>
                                    <span style={{ paddingRight: '20px' }}>收件人:</span>
                                    {address[0].name}
                                </p>
                                <p>
                                    <span style={{ paddingRight: '20px' }}>电话:</span>
                                    {address[0].phoneNum}
                                </p>
                                <p>
                                    <span style={{ paddingRight: '20px' }}>留言:</span>
                                    {msg ? msg : "无"}
                                </p>
                                <Table columns={tradeDetailColumn} dataSource={tradeDetailList} />
                            </div>
                            : null
                    }
                    {

                    }
                </Modal>
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return { ...state.allTrade, ...state.userConfig }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTrade);