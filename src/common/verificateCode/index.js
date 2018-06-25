import React, { Component } from 'react'

export default class VerificateCode extends Component {
    state = {
        verificationCodeTime: null
    }

    componentWillUnmount() {
        this.vcInterval && window.clearInterval(this.vcInterval);
    }

    handleClick = () => {
        // 已经在倒计时 直接返回
        if (this.state.verificationCodeTime !== null) return


        const { onClick } = this.props
        // 调用外部clickHandle, 获取是否继续，
        const continu = onClick && onClick()
        if (!continu) return


        this.setState({
            verificationCodeTime: 60
        })

        this.vcInterval = window.setInterval(() => {
            const value = this.state.verificationCodeTime - 1 || null // 0 的时候 回归null
            this.setState({
                verificationCodeTime: value
            })
            if (value === null) {
                window.clearInterval(this.vcInterval);
            }
        }, 1000)
    }

    render() {
        const { className, style } = this.props
        let { clickable } = this.props
        if (clickable === undefined) clickable = true // 解决有部分业务还没有完全改过来的问题
        const clickable_ = clickable && this.state.verificationCodeTime === null

        return (
            <div
                className={className}
                style={{
                    color: clickable_ ? '#38BCA4' : '#e0e0e0',
                    cursor: clickable_ ? 'pointer' : 'default',
                    ...style
                }}
                onClick={clickable_ ? this.handleClick : () => { }}
            >
                {this.state.verificationCodeTime ? `已发送(${this.state.verificationCodeTime}秒)` : '获取验证码'}
            </div>
        )
    }
}
