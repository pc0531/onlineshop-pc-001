const initState = {
    goodsList:[],
    searchContent:''
}
const profix = `search`;

export default function(state = initState,action){
    switch(action.type){
        case `${profix}-getGoodsList` : return {...state ,goodsList:action.data}
        case `${profix}-changeSearchContent` : return {...state ,searchContent:action.data}
        default : return state
    }
}