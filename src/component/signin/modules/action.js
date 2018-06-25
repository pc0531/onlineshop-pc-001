import { post } from '../../../utils/request'
import RSA from '../../../utils/RSA'
import {message} from 'antd'
import { setCookie,getCookie ,userCookieKey as cookieKey} from '../../../utils/browser'

export const signIn = (param, subcb) => dispatch => {
    post('/user/loginByPhoneNum', { phoneNum: param.phoneNum, password: RSA.encryptedString(param.logPassword) }).then((res) => {
        if (!!res) {
            //setCookie(cookieKey, JSON.stringify(res), 7)
            dispatch({
                type: `signInSuccess`,
                data: res
            })
        }
        if (!!subcb) {
            subcb()
        }
        // if (res) {
        //     dispatch({
        //         type: `signInSuccess`,
        //         data: res
        //     })
        //     subcb()
        // }
    }).catch((err) => {
        message.error(err.message)

    })
}

export const sync = () =>  dispatch => {
	console.log('sync f:', cookieKey, getCookie(cookieKey))
    const phoneNum = JSON.parse(getCookie(cookieKey) || null)
	post('/user/checkLogin',{}).then(res => {
		if (!!res) {
            console.error("res:"+res);
            dispatch({
                type: `signInSuccess`,
                data: res
            })
		}
	}).catch((err) => {
        message.error(err.message)
    })
}