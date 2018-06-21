import { post } from '../../../utils/request'
import RSA from '../../../utils/RSA'
import {message} from 'antd'

const profix = `signup`;

export const signUp = (param, subcb) => dispatch => {
    post('/user/register', { phoneNum: param.phoneNum, password: RSA.encryptedString(param.logPassword)}).then((res) => {
        if (res) {
            dispatch({
                type: `signInSuccess`,
                data: res
            })
            subcb()
        }
    }).catch((err) => {
        message.error(err.message)
    })
}

export const sendMsg = (phoneNum) => async(dispatch) => {
    post('/user/sendPhoneMsg', { phoneNum: phoneNum}).then((res) => {
        if (res) {
            message.success("验证码发送成功")
            dispatch({
                type: `${profix}-changePhoneCode`,
                data: res
            })
        }
    }).catch((err) => {
        message.error(err.message)

    })
}