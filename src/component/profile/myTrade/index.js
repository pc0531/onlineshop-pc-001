
import React, { Component } from 'react';
import { Icon, Input, Button, Table, Modal } from 'antd'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import moment from 'moment'

const tradeStatus = {
    6: "已取消",

    5: "已完成",

    2: "未发货",

    1: "待支付",

    3: "已发货",

    4: "申请取消",

    7: "申请取消"

}

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

const payType = {
    balance: 1,
    ali: 2,
    wechat: 3
}

class MyTrade extends Component {
    state = {
        visible: false,
        detailModal: false,
        trackingModal: false,
        trackingNum: '',
        msg: ''
    }

    componentDidMount() {
        const { getOrderList } = this.props;
        getOrderList();
    }

    detailCancel = () => {
        this.setState({ detailModal: false })
    }

    handleCancel = () => {
        this.setState({ trackingModal: false })
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
                dataIndex: 'totalCash',
                title: '总价格',
                width: '8%',
                align: 'center'
            },
            {
                dataIndex: 'tradeStatus',
                title: '订单状态',
                width: '14%',
                align: 'center',
                render: (text) => tradeStatus[text]
            },
            {
                title: '操作',
                width: '14%',
                align: 'center',
                render: (text) => (
                    <p style={{ margin: '0' }}>
                        <a onClick={() => {
                            console.error(text.msg)
                            queryAddress(text.addressId, text.id, () => {
                                this.setState(
                                    {
                                        detailModal: true,
                                        msg: text.msg
                                    }
                                )
                            })
                        }}>详情</a>
                        {text.tradeStatus === 1 ?
                            <a onClick={() => {
                                deleteOrder(text.orderId)
                            }}>删除</a> : null}
                        {text.tradeStatus === 3 ?
                            <a onClick={() => {
                                this.setState(
                                    {
                                        trackingModal: true,
                                        trackingNum: text.trackingNum
                                    }
                                )
                            }}>物流信息</a> : null}
                    </p>

                )
            },
        ]

        const { orderList, deleteOrder, tradeCount, queryAddress, address, tradeDetailList } = this.props
        const { detailModal, msg, trackingNum, trackingModal } = this.state;
        return (
            <div className='myorder'>
                <div className='myorderContent'>
                    <h3>我的订单<span>总数:{tradeCount}</span></h3>
                    <Table columns={columns} dataSource={orderList} />
                </div>
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
                </Modal>
                <Modal
                    title="物流信息"
                    visible={this.state.trackingModal}
                    onCancel={this.handleCancel}
                    width='500px'
                    footer={null}
                >
                    <div className='payModal'>
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
                    </div>
                </Modal>

            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return { ...state.myTrade, ...state.userConfig }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTrade);