import {post} from '../../../utils/request'
import {message} from 'antd'
const profix = `search`;

export const getSearchList = (keyValue) => dispatch =>{
    post('/goods/queryByName',{name:keyValue}).then((res)=>{
        if(res){
            dispatch({type:`${profix}-getGoodsList`,data:res})
        }
    }).catch((err)=>{
        if(err){
            message.error("系统异常！")
        }
    })
}