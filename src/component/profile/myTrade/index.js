
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

const payType = {
    balance:1,
    ali:2,
    wechat:3
}

class MyTrade extends Component {
    state = {
        visible: false,
        payPassword:''
    }

    componentDidMount() {
        const { getOrderList } = this.props;
        getOrderList();
    }

    handleOk = ()=> {
        const { payOrder,userCode } = this.props;
        let orderId = this.state.orderId;
        payOrder(payType.balance,userCode,this.state.payPassword,orderId,()=>{
            this.setState({visible:false})
        })
    }

    handleCancel = ()=> {
        this.setState({ visible: false })
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
                    text.tradeStatus === 1 ?
                        <p style={{ margin: '0' }}>
                            <a onClick={() => {
                                deleteOrder(text.orderId)
                            }}>删除</a>
                            <a onClick={() => {
                                this.setState({visible:true,orderId:text.orderId})
                            }}>支付</a>
                        </p>
                        : null



                )
            },
        ]

        const { orderList, deleteOrder } = this.props
        let payPassword = this.state.payPassword
        return (
            <div className='myorder'>
                <div className='myorderContent'>
                    <h3>物流信息</h3>
                    <Table columns={columns} dataSource={orderList} />
                </div>
                <Modal
                    title="收银台"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width='200px'
                >
                    <div className='payModal'>
                        <span>请输入支付密码</span>
                        <Input
                            className='payPasswordInput'
                            value={payPassword}
                            onChange={(e) => {
                                this.setState({ payPassword: e.target.value })
                            }} />
                    </div>
                </Modal>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { ...state.myTrade ,...state.userConfig}
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTrade);