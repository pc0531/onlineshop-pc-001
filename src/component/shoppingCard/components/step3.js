import React, { Component } from 'react'
import { Steps, Button, Table, Icon, Radio, Modal } from 'antd'

const RadioGroup = Radio.Group;

export default class Step3 extends Component {
    state = {
        choose: 1,
        toPay: false
    }

    onChange = (e) => {
        this.setState({
            choose: e.target.value,
        });
    }

    render() {
        const data = [
            {
                name: "Jidan",
                age: '12',
                address: "123123"
            },
            {
                name: "Jidan",
                age: '12',
                address: "123123"
            },
            {
                name: "Jidan",
                age: '12',
                address: "123123"
            },
        ]
        const { tradeId, toAliPay } = this.props;
        const { toPay, choose } = this.state;

        return (
            <div className="shoppingcard-detail">
                <div className="shoppingcard-choosepay">
                    <h2>
                        <Icon type="pay-circle-o" />
                        <span style={{ paddingLeft: '20px' }}>选择支付方式</span>

                    </h2>
                    <p>订单号：{tradeId}</p>
                    <div className="shopping-paytype">
                        <ul>
                            <RadioGroup onChange={this.onChange} value={this.state.choose}>
                                <li><Radio value={1}><img src="https://t.alipayobjects.com/images/rmsweb/T1.a4gXo4sXXXXXXXX.png" /></Radio></li>
                            </RadioGroup>
                        </ul>
                    </div>
                    <div className="shopping-step3bottom">
                        <button onClick={() => {
                            if (choose === 1) {
                                toAliPay(tradeId)
                                this.setState({ toPay: true })
                            }

                        }}>去支付</button>
                    </div>
                </div>
                <Modal
                    title="请在弹出的支付页面付款"
                    visible={toPay}
                    footer={null}
                >
                    <Button
                    onClick = {()=>{
                        this.setState({toPay:false})
                    }}
                    >
                        我已付款
                    </Button>
                    <Button
                    onClick = {()=>{
                        this.setState({toPay:false})
                    }}
                    >
                    取消
                    </Button>
                </Modal>
            </div>
        )
    }
}