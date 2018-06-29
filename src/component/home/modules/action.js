import { post } from '../../../utils/request'
import { message } from 'antd'
const profix = `home`


export const getRecommendList = () => dispatch => {
    post('/goods/findLatestGoods',{num:8}).then((res) => {
        if (res) {
            dispatch({ type: `${profix}-getRecommendList`, data: res })
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })
}