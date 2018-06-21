const initState = {
    code:''
}

const profix = `signup`;

export default function (state = initState, action) {
    switch (action.type) {
        case `${profix}-changePhoneCode`: return { ...state, code: action.data }
        default: return state
    }
}