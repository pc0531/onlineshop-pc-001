import React from 'react';
import { Icon, Input, Button, Form, message } from 'antd'
import * as actions from './modules/action'
import axios from 'axios'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import VerificateCode from '../../common/verificateCode'
import { post } from '../../utils/request'
import { validatePhone } from '../../utils/uvalidate'

const FormItem = Form.Item

class SignUp extends React.Component {
    state = {
        check: false,
        verificateCodeClickable: false
    }
    static contextTypes = {
        router: PropTypes.object
    }

    gotoPage = (args, event) => {
        const { history } = this.context.router
        history.push(args)
    }

    siginUpHander = () => {
        const { validateFields, getFieldValue, getFieldsValue } = this.props.form;
        const { signUp,code } = this.props;
        validateFields((err) => {
            if (err) {
                return
            }
            const formatData = getFieldsValue()
            signUp(formatData, () => {
                this.gotoPage("/signin")
            })

        })

    }

    disableVerificationCode() {
        this.setState({ verificateCodeClickable: false })
    }

    enableVerificationCode() {
        this.setState({ verificateCodeClickable: true })
    }



    render() {
        const { getFieldDecorator, getFieldsValue, getFieldValue } = this.props.form;
        const { sendMsg,code } = this.props;
        const that = this
        return (
            <div className="signup">
                {/* <div className='signup-header'>
                    <p>小鸣学堂</p>
                </div> */}
                <div className='signup-content'>
                    <div className='signup-content-title'>
                        <h2>手机号码注册</h2>
                    </div>
                    <div className='signup-content-inner'>
                        <div className="signup-code">
                            <VerificateCode
                                // className={styles.getVerificationCode}
                                clickable={this.state.verificateCodeClickable}
                                onClick={() => {
                                    const tmpPhone = getFieldValue("phoneNum")
                                    sendMsg(tmpPhone)
                                    return true
                                }} />
                        </div>
                        <Form className='inputForm'>
                            <div className='usernameInput'>
                                <FormItem>
                                    {getFieldDecorator('phoneNum', {
                                        validateTrigger: ["onBlur"],
                                        rules: [{
                                            validator(rule, value, callback) {
                                                const isBlur = (that.currPhonenumber === value)
                                                that.currPhonenumber = value

                                                if (value === "") {
                                                    that.disableVerificationCode()
                                                    callback(isBlur ? "请输入手机号" : undefined)
                                                    return
                                                }

                                                if (!validatePhone(value)) {
                                                    that.disableVerificationCode()
                                                    callback(isBlur ? '请输入正确格式的手机号码' : undefined)
                                                    return
                                                }

                                                if (isBlur) return callback() // 如果是 onBlur 因为 onChange 已经触发过了
                                                post('/user/phoneNumIsExist', {
                                                    phoneNum: value,
                                                })
                                                    .then(res => {
                                                        if (res == '0') {
                                                            that.enableVerificationCode()
                                                            callback()
                                                        } else {
                                                            that.disableVerificationCode()
                                                            callback(`手机号已经注册`)
                                                        }
                                                    })
                                                    .catch((err) => {
                                                        that.disableVerificationCode()
                                                        callback(`手机号已经注册`)
                                                    })
                                            }
                                        }],
                                    })(
                                        <Input placeholder="手机号码" autoComplete="off" />

                                    )}
                                </FormItem>
                            </div>
                            <div className='usernameInput'>
                                <FormItem>
                                    {getFieldDecorator('code', {
                                        validateTrigger: ["onBlur"],
                                        rules: [{
                                            required: true,
                                            message: '请输入验证码',
                                        },{
                                            validator(rule, value, callback) {
                                                if (value !== code.slice(4)) {
                                                    callback('请输入正确的验证码')
                                                }else{
                                                    callback()
                                                }
                                            }
                                        }],
                                    })(
                                        <Input placeholder="验证码" autoComplete="off" />
                                    )}
                                </FormItem>

                            </div>
                            <div className='usernameInput'>
                                <FormItem>
                                    {getFieldDecorator('logPassword', {
                                        validateTrigger: ["onBlur"],
                                        rules: [{
                                            required: true,
                                            message: '请输入密码',
                                        }],
                                    })(
                                        <Input placeholder="密码" type='password' autoComplete="off" />
                                    )}
                                </FormItem>

                            </div>
                            <div className='usernameInput'>
                                <FormItem>
                                    {getFieldDecorator(`comfirmPwd`, {
                                        initialValue: "",
                                        validateTrigger: ["onBlur"],
                                        rules: [
                                            {
                                                validator(rule, values, callback) {
                                                    const ps = getFieldValue("logPassword")

                                                    if (ps !== values) {
                                                        callback(`两次输入不一致`)
                                                    } else {
                                                        callback()
                                                    }
                                                }
                                            },
                                            {
                                                whitespace: true,
                                                message: "请去掉空格"
                                            }
                                        ]
                                    })(
                                        <Input
                                            type="password"
                                            placeholder="确认密码"
                                            autoComplete="off"
                                        />
                                    )}
                                    {/*                                     
                                    {getFieldDecorator('confirmPassword', {
                                        validateTrigger: ["onBlur"],
                                        rules: [{
                                            required: true,
                                            message: '请输入密码',
                                        }],
                                    })(
                                        <Input placeholder="确认密码" type='password' autocomplete="off" />
                                    )} */}
                                </FormItem>

                            </div>
                            <div className='signup-protocol'>
                                <p><input type='checkbox' style={{ marginRight: '5px' }} onChange={(e) => {
                                    this.setState({ check: e.target.checked })
                                }} /><span>我已阅读并同意<a style={{ marginLeft: '3px' }}>小鸣学堂服务协议</a></span></p>
                            </div>
                            <Button
                                className='loginBut'
                                onClick={() => {
                                    this.siginUpHander()
                                }}
                                disabled={!this.state.check}
                            >
                                注册
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className='signup-have'>
                    <p>已有账号？<Link to='/signin'>立即登录</Link>
                    </p>
                </div>
            </div>
        );

    };
}

const SignUpForm = Form.create()(SignUp)

const mapStateToProps = (state) => {
    return { ...state.signUp }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)