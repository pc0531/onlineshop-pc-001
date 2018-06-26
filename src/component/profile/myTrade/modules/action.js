import {post} from '../../../../utils/request'
import {message} from 'antd'
import RSA from '../../../../utils/RSA'
const profix = `myOrder`;

export const getOrderList = () => (dispatch,getState) =>{
    const state = getState();
    let userId = state.userConfig.id;
    dispatch(queryTradeCount(userId));
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

export const queryTradeCount = (userId) => (dispatch) =>{
    post('/trade/queryCount', {userId:userId}).then((res) => {
        if (res) {
            dispatch({type:`${profix}-queryTradeCount`,data:res})
        }
    }).catch((err) => {
        message.error("系统异常请稍后再试!")
    })
}