export const userCookieKey = 'uinfo'


// export function setCookie(cname,cvalue,exdays = 7) {
//     const d = new Date();
//     d.setTime(d.getTime()+(exdays*24*60*60*1000));
//     const expires = "expires="+d.toGMTString();
//     window.document.cookie = (" " +  cname + "=" + cvalue + "; " + expires + "; path=/");
// }


export function getCookie(cname) {
    const name = cname + "=";
    const cookie = window.document.cookie;
    console.error("window.document.cookie："+cookie);
    const ca = window.document.cookie.split(';');
    console.error("ca："+ca);
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        console.error("c:"+c);
        if (c.indexOf(name)==0) {
            let sub = c.substring(name.length,c.length);
            console.error("sub:"+sub);
            return sub;
        }
        
    }
    return "";
}

export function delCookie(cname) {
    const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT"
    window.document.cookie = (" " +  cname + "=" + "" + "; " + expires + "; path=/");
}

export function getUrlParamObj() {
    const { search } = window.location
    if(search === '') return {}

    const result = {}
    const subs = search.substring(1)
    subs.split('&').forEach(ele => {
        const [k, v] = ele.split('=')

        result[k] = v
    })
    return result
}