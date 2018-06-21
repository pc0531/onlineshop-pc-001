const initState = {
    tradeList:[],
    address:[],
    tradeDetailList:[]
}
const profix = `allTrade`;

export default function(state = initState,action){
    switch(action.type){
        case `${profix}-getTradeList` : return {...state ,tradeList:action.data}
        case `${profix}-getAddress` : return {...state ,address:action.data}
        case `${profix}-getTradeDetail` : return {...state ,tradeDetailList:action.data}
        default : return state
    }
}