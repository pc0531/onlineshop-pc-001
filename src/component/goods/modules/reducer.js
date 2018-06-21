const initState = {
    messageList:[],
    acceptId:'',
    message:'',
}

const profix = `goods`;

export default function(state = initState,action){
    switch(action.type){
        case `${profix}-sendMessage` : return {...state ,messageList:action.data}
        case `${profix}-changeacceptId` : return {...state ,acceptId:action.data}
        case `${profix}-changemessage` : return {...state ,message:action.data}
        case `${profix}-changemessageList` : return {...state ,messageList:action.data}
        default : return state
    }
}