import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

message.config({
    top: 100,
    duration: 2,
    maxCount: 3,

} 
);
export async function post(url, params) {
    let data;
    let crossUrl = "/api"
    const resp = await axios({
        method: "POST",
        url : crossUrl + url,//解决刷新页面转向spring的页面
        data: qs.stringify(params)
    })
    // if(resp.headers === "text/html;charset=UTF-8"){
    //     window.open(resp.data)
    // }
    // console.log("respherader："+JSON.stringify(resp.headers))
    console.log("resp："+JSON.stringify(resp.data))
    if (resp.data.rescode == '202' || (resp.data.rescode == '201' && resp.data.msg == '未登录')) {
        // CommonInfo.reLoginWithNoConfirm();
        message.error("post出错")
    } else {
        if(resp.data.result === "ok"){
            data = resp.data.data
        }
        else{
            message.error(resp.data.msg);
        }
    }
    return data
}