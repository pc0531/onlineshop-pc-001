import store from '../../../store'
import { post } from '../../../utils/request'
import {message} from 'antd'
const profix = `goods`


export const getRecommendList = () => dispatch => {
    post('/goods/findLatestGoods',{num:4}).then((res) => {
        if (res) {
            dispatch({ type: `${profix}-getRecommendList`, data: res })
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })
}

export const changeData = (mark, data) => dispatch => {
    dispatch({ type: `${profix}-change${mark}`, data: data })
}

export const addToShoppingCard = (goods, num) => (dispatch, getState) => {
    let shoppingCardList = getState().shoppingCard.shoppingCardList;
    let newShoppingCardList = [];
    let exist = false;
    shoppingCardList.map((ele) => {
        if (ele.id === goods.id) {
            exist = true;
            ele.num = ele.num + num;
            newShoppingCardList.push(ele);
        }
        else {
            newShoppingCardList.push(ele);
        }
    })
    if (!exist) {
        let newGoods = {};
        newGoods.num = num;
        newGoods.id = goods.id;
        newGoods.goodsName = goods.goodsName;
        newGoods.goodsPicUrl = goods.goodsPicUrl;
        newGoods.goodsPrice = goods.goodsPrice;
        newGoods.goodsType = goods.goodsType;
        newShoppingCardList.unshift(newGoods);
    }
    store.dispatch({ type: 'shoppingCard-changeShoppingCardList', data: newShoppingCardList })
}