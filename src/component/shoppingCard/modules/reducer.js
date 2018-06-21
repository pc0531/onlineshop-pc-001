const initState = {
    shoppingCardList: [],
    addressList: [],
    addressId:'',
    tradeId:''
}

const profix = `shoppingCard`;

export default function (state = initState, action) {
    switch (action.type) {
        case `${profix}-changeShoppingCardList`: return { ...state, shoppingCardList: action.data }
        case `${profix}-changeAddressList`: return { ...state, addressList: action.data }
        case `${profix}-changeaddressId`: return { ...state, addressId: action.data }
        case `${profix}-changetradeId`: return { ...state, tradeId: action.data }
        case `${profix}-addAddress`: return { ...state, addr: action.data }
        case `${profix}-getAddressList`: return { ...state, addressList: action.data }
        default: return state
    }
}