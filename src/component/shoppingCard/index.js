import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import { Steps, Button, Table, Icon, Input } from 'antd'
import Step1 from './components/step1'
import Step2 from './components/step2'
import Step3 from './components/step3'

const Step = Steps.Step;





class ShoppingCard extends Component {
    state = {
        step: 0
    };



    onChangeStep = (value) => {
        this.setState({ step: value })
    }

    render() {
        let step = this.state.step;
        const { shoppingCardList, delFormShoppingCard, addAddr, addressList, changeData, addressId, addTrade, tradeId, toAliPay, getAddrList, userId,msg } = this.props;
        return (
            <div className="shoppingcard">
                <div className="shoppingcard-content">
                    <div className="shoppingcard-step">
                        <Steps current={step}>
                            <Step title="查看购物车" />
                            <Step title="填写核对订单" />
                            <Step title="提交成功" />
                        </Steps>
                    </div>
                    {step === 0 ? <Step1
                        onChangeStep={(value) => this.onChangeStep(value)}
                        shoppingcardlist={shoppingCardList}
                        delFormShoppingCard={(id) => delFormShoppingCard(id)}
                    /> : null}
                    {step === 1 ? <Step2
                        onChangeStep={(value) => this.onChangeStep(value)}
                        addAddr={(formateData) => addAddr(formateData)}
                        addressList={addressList}
                        changeData={(mark, data) => changeData(mark, data)}
                        addressId={addressId}
                        shoppingCardList={shoppingCardList}
                        addTrade={(callback) => addTrade(callback)}
                        userId={userId}
                        getAddrList={(id) => getAddrList(id)}
                        msg = {msg}
                    /> : null}
                    {step === 2 ? <Step3
                        tradeId={tradeId}
                        toAliPay={toAliPay}
                    /> : null}
                </div>

            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return { ...state.shoppingCard, ...state.userConfig }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard)