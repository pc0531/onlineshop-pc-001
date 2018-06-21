import store from '../../../store'
const profix = `goods`


export const sendMessage = () => dispatch => {

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