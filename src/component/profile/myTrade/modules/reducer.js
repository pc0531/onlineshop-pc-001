const initState = {
    orderList:[]
}
const profix = `myOrder`;

export default function(state = initState,action){
    switch(action.type){
        case `${profix}-getOrderList` : return {...state ,orderList:action.data}
        default : return state
    }
}