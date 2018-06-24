import { post } from '../../../../utils/request'
import { message } from 'antd'

const profix = `goodsManage`;


export const getGoodsList = () => dispatch => {
    post('/goods/findAllGoods', {}).then((res) => {
        if (res) {
            dispatch({ type: `${profix}-getGoodsList`, data: res })
        }
    }).catch((err) => {
        if (err) {
            message.error("系统异常！")
        }
    })
}

export const addGoods = (formatData,cb) => dispatch =>{
    post('/goods/insertGood',formatData).then((res)=>{
        if(res){
            message.success("新增成功!")
            cb()
            dispatch(getGoodsList())
        }
    }).catch((err)=>{
        if(err){
            message.error("系统异常！")
        }
    })
}

export const updateGoods = (formatData,cb) => dispatch =>{
    post('/goods/updateGood',formatData).then((res)=>{
        if(res){
            message.success("修改成功!")
            cb()
            dispatch(getGoodsList())
        }
    }).catch((err)=>{
        if(err){
            message.error("系统异常！")
        }
    })
}

export const deleteGoods = (goodsId) => dispatch =>{
    post('/goods/deleteGood',{goodsId:goodsId}).then((res)=>{
        if(res){
            message.success("删除成功")
            dispatch(getGoodsList())
        }
    }).catch((err)=>{
        if(err){
            message.error("系统异常！")
        }
    })
}