import React from 'react';
import { Icon, Input, Button, Form, message } from 'antd'
import * as actions from './modules/action'
import axios from 'axios'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const FormItem = Form.Item

class SignIn extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    gotoPage = (args, event) => {
        const { history } = this.context.router
        history.push(args)
    }

    loginHander = () => {
        const { validateFields, getFieldValue, getFieldsValue } = this.props.form;
        const { signIn } = this.props;
        validateFields((err) => {
            if (err) {
                return
            }
            const formatData = getFieldsValue()
            signIn(formatData, () => {
                this.gotoPage("/profile/myTrade")
            })

        })

    }



    render() {
        const { getFieldDecorator, getFieldsValue } = this.props.form;
        return (
            <div className="signin">
                <div className='loginContent'>
                    <h1>登录</h1>
                    <div className='loginForm'>
                        <Form className='inputForm'>
                            <div className='usernameInput'>
                                <FormItem>
                                    {getFieldDecorator('phoneNum', {
                                        validateTrigger: ["onBlur"],
                                        rules: [{
                                            required: true,
                                            message: '请输入手机号码',
                                        }],
                                    })(
                                        <Input placeholder="手机号码" />
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

                            <Button
                                className='loginBut'
                                onClick={() => {
                                    this.loginHander()
                                }}
                            >
                                登录
                            </Button>
                        </Form>
                    </div>
                    <div className='login-register'>
                    <p>还没有注册优选菜账号？</p>
                    <Button onClick = {()=>{
                        this.gotoPage("/signup")
                    }}>注册</Button>
                        </div>

                </div>
            </div>
        );

    };
}

const SigninForm = Form.create()(SignIn)

const mapStateToProps = (state) => {
    return { ...state.signIn }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm)