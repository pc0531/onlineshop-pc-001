const initState = {
    tradeList:[]
}

const profix = `query`;

export default function(state = initState,action){
    switch(action.type){
        case `${profix}-getTradeList` : return {...state ,tradeList:action.data}
        default : return state
    }
}