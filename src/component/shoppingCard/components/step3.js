import React, { Component } from 'react'
import { Steps, Button, Table, Icon, Radio } from 'antd'

const RadioGroup = Radio.Group;

export default class Step3 extends Component {
    state = {
        choose: 1
    }

    onChange = (e) => {
        console.error("e:"+e.target.value)
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
        const { tradeId } = this.props;

        
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
                                <li><Radio value={2}><img src="https://wx.gtimg.com/pay/img/common/logo.png?v=20160114" /></Radio></li>
                                <li><Radio value={3}><img src="https://t.alipayobjects.com/images/rmsweb/T1.a4gXo4sXXXXXXXX.png" /></Radio></li>
                            </RadioGroup>
                        </ul>
                    </div>
                    <div className="shopping-step3bottom">
                        <button>去支付</button>
                    </div>
                </div>

            </div>
        )
    }
}