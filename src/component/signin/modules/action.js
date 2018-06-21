import { post } from '../../../utils/request'
import RSA from '../../../utils/RSA'
import {message} from 'antd'

export const signIn = (param, subcb) => dispatch => {
    post('/user/loginByPhoneNum', { phoneNum: param.phoneNum, password: RSA.encryptedString(param.logPassword) }).then((res) => {
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