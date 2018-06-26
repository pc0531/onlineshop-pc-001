const initState = {
    orderList:[],
    tradeCount:0
}
const profix = `myOrder`;

export default function(state = initState,action){
    switch(action.type){
        case `${profix}-getOrderList` : return {...state ,orderList:action.data}
        case `${profix}-queryTradeCount` : return {...state ,tradeCount:action.data}
        default : return state
    }
}