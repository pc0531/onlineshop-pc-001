import { post } from '../../../utils/request'
import { message } from 'antd'
const profix = `shoppingCard`

export const addTrade = (callback) => (dispatch, getState) => {
    const state = getState();
    let addressId = state.shoppingCard.addressId;
    let phoneNum = '';
    let addressList = state.shoppingCard.addressList;
    let goodsList = state.shoppingCard.shoppingCardList;
    let msg = state.shoppingCard.msg;
    let userId = state.userConfig.userId;
    addressList.map((ele) => {
        if (ele.id === addressId) {
            phoneNum = ele.phoneNum;
        }
    });
    let formatData = {
        addressId: addressId,
        phoneNum: phoneNum,
    }
    goodsList.map((ele, index) => {
        formatData["goodsDetailFormList[" + index + "].id"] = ele.id;
        formatData["goodsDetailFormList[" + index + "].num"] = ele.num;
        formatData["goodsDetailFormList[" + index + "].goodsPrice"] = ele.goodsPrice;
    })
    if(msg){
        formatData.msg = msg;
    }
    if(userId){
        formatData.userId = userId;
    }
    post('/trade/insertTrade', formatData).then((res) => {
        if (res) {
            dispatch({ type: `${profix}-changetradeId`, data: res.id })
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })

}

export const changeShoppingCard = (goods) => (dispatch, getState) => {
    const state = getState();
    let shoppingCardList = state.shoppingCardList;

}

export const delFormShoppingCard = (id) => (dispatch, getState) => {
    let shoppingCardList = getState().shoppingCard.shoppingCardList;
    let newShoppingCardList = [];
    shoppingCardList.map((ele) => {
        if (ele.id !== id) {
            newShoppingCardList.push(ele);
        }
    })
    dispatch({ type: `${profix}-changeShoppingCardList`, data: newShoppingCardList });
}

export const changeData = (mark, data) => dispatch => {
    dispatch({ type: `${profix}-change${mark}`, data: data })
}

export const addAddr = (formatData) => (dispatch, getState) => {
    let userId = getState().userConfig.userId;
    if(userId){
        formatData.userId = userId;
    }
    post('/address/insertAddress', formatData).then((res) => {
        if (res) {
            let addressList = getState().shoppingCard.addressList;
            let newAddressList = addressList.slice(0);
            newAddressList.unshift(res);
            dispatch({ type: `${profix}-changeAddressList`, data: newAddressList });
            dispatch({ type: `${profix}-changeaddressId`, data: res.id });
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })
}

export const getAddrList = (userId) => dispatch => {
    post('/address/queryByUserId', { userId: userId }).then((res) => {
        if (res) {
            dispatch({ type: `${profix}-getAddressList`, data: res })
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })
}

export const toAliPay = (tradeId) => dispatch => {
    let hostname = window.location.hostname;
    let loaction = hostname 
    window.open(`http://${loaction}/api/pay/createAliPay?tradeId=${tradeId}`)
    // post('/pay/createAliPay',formData).then((res) => {
    //     if (res) {
    //         console.error("res"+res);
    //         //dispatch({ type: `${profix}-getAddressList`, data: res })
    //     }
    // }).catch((err) => {
    //     if (err) {
    //         message.error("系统异常！")
    //     }
    // })
}