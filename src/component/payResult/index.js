import React, { Component } from 'react'
import failPic from '../../assets/fail.png'
import { Icon, message } from 'antd'
import { post } from '../../utils/request'


export default class PayResult extends Component {
    state = {
        pay: 'success'
    }


    componentDidMount() {
        let tradeId = this.props.location.state
        if (tradeId) {
            post('/pay/queryPayResult', { tradeId: tradeId }).then((res) => {
                if (!res) {
                    this.setState({ pay: 'fail' })
                }
            }).catch((err) => {
                if (err) {
                    message.error("系统异常！")
                }
            })
        }
    }


    render() {
        let pay = this.state.pay;
        return (
            <div className='payResult'>

                {
                    pay === 'success' ?
                        <div className='payResult-content'>
                            <h2>支付成功</h2>
                            <img src='https://pic.qianmi.com/ejz/ejzc_app2.0/img/paysuccess.png' />
                            <p>我们将会以最快的速度安排发货，请耐心等待。</p>
                        </div>
                        :
                        <div className='payResult-content'>
                            <h2>支付失败</h2>
                            <img src={failPic} style={{ width: '120px' }} />
                            <p>若您的账户已发生扣款，请联系我们</p>
                            <p><Icon type="phone" /><span style={{ paddingLeft: '20px' }}>联系电话：0515-88811100</span></p>
                        </div>
                }
            </div>
        )
    }
}