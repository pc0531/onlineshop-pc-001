import store from '../../../store'
import { post } from '../../../utils/request'
import { message } from 'antd'
const profix = `query`


export const queryByPhoneNum = (phoneNum) => dispatch => {
    post('/trade/queryTradeByPhoneNum', {phoneNum:phoneNum}).then((res) => {
        if (res) {
            dispatch({ type: `${profix}-getTradeList`, data: res })
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })
}