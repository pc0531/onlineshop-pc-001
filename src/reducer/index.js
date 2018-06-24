import { combineReducers } from "redux"
import search from '../component/search/modules/reducer'
import goods from '../component/goods/modules/reducer'
import shoppingCard from '../component/shoppingCard/modules/reducer'
import signIn from '../component/signin/modules/reducer'
import signUp from '../component/signup/modules/reducer'
import userConfig from './userConfig'
import myTrade from '../component/profile/myTrade/modules/reducer'
import allTrade from '../component/profile/allTrade/modules/reducer'
import goodsManage from '../component/profile/goodsManage/modules/reducer'

export default combineReducers({
    search,
    goods,
    shoppingCard,
    signIn,
    signUp,
    userConfig,
    myTrade,
    allTrade,
    goodsManage
})
