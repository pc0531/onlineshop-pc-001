import { post } from '../../../../utils/request'
import { message } from 'antd'

const profix = `allTrade`;

export const getTradeList = (condition) => dispatch => {
    let param = {}
    if (condition && condition.tradeStatus !== 0) {
        param = condition
    }
    if(condition && condition.tradeStatus){
        dispatch(queryTradeCount(condition.tradeStatus));
    }else{
        dispatch(queryTradeCount());
    }
    post('/trade/queryTrade', param).then((res) => {
        if (res) {
            dispatch({ type: `${profix}-getTradeList`, data: res })
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })
}

export const updateTracking = (param, cb) => dispatch => {
    post('/trade/updateTracking', param).then((res) => {
        if (res && res === "添加成功！") {
            message.success(res);
            cb()
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })
}

export const queryAddress = (addressId,tradeId,cb) => dispatch => {
    post('/address/queryAddress', { id: addressId }).then((res) => {
        if (res) {
            dispatch({ type: `${profix}-getAddress`, data: res })
            dispatch(queryTradeDetail(tradeId))
            cb()
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })

}

export const queryTradeDetail = (tradeId)=> dispatch=>{
    post('/trade/queryTradeDetail', { tradeId: tradeId }).then((res) => {
        if (res) {
            dispatch({ type: `${profix}-getTradeDetail`, data: res })
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })
}

export const queryTradeCount = (tradeStatus) => (dispatch,getState) =>{
    post('/trade/queryCount', {tradeStatus:tradeStatus}).then((res) => {
        if (res ||res === 0) {
            dispatch({type:`${profix}-queryTradeCount`,data:res})
        }
    }).catch((err) => {
        message.error("系统异常请稍后再试!")
    })
}