const initState = {
    goodsList: [],
}

const profix = `goodsManage`;

export default function (state = initState, action) {
    switch (action.type) {
        case `${profix}-getGoodsList`: return { ...state, goodsList: action.data }
        default: return state
    }
}