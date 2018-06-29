const initState = {
    recommendList:[],
}

const profix = `home`;

export default function(state = initState,action){
    switch(action.type){
        case `${profix}-getRecommendList` : return {...state ,recommendList:action.data}
        default : return state
    }
}