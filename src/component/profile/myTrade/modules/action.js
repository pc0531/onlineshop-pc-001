import {post} from '../../../../utils/request'
import {message} from 'antd'
import RSA from '../../../../utils/RSA'
const profix = `myOrder`;

export const getOrderList = () => (dispatch,getState) =>{
    const state = getState();
    let userId = state.userConfig.id
    post('/trade/queryTrade',{userId:userId}).then((res)=>{
        if(res){
            dispatch({type:`${profix}-getOrderList`,data:res})
        }
    }).catch((err)=>{
        if(err){
            message.error("系统异常！")
        }
    })
}

export const deleteOrder = (orderId) => (dispatch,getState) =>{
    post('/order/deleteOrder',{orderId:orderId}).then((res)=>{
        if(res){
            message.success("删除成功")
            dispatch(getOrderList())
        }
    }).catch((err)=>{
        if(err){
            message.error("系统异常！")
        }
    })
}

export const payOrder = (payType, userCode, payPassword, orderId,cb) => (dispatch, getState) => {
    let param = {
        orderId: orderId,
        payType: payType,
        payerCode: userCode,
        payPassword: RSA.encryptedString(payPassword)
    }
    post('/pay/addPay', param).then((res) => {
        if (res) {
            dispatch(getOrderList())
            cb()
        }
    }).catch((err) => {
        message.error("系统异常请稍后再试!")
    })
}