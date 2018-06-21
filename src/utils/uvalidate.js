export const validatePhone = phoneNumber => {
    return (
        typeof phoneNumber === "string"
        && phoneNumber.length === 11
        && new RegExp("^(13[0-9]|14[57]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\\d{8}$", "i").test(phoneNumber)
    )
}


function hasCharAndNumberAndUpper(str) {
    let hasUpper = false
    let hasChar = false
    let hasNumber = false

    for (let i = 0; i < str.length; i ++) {
        let cc = str.charCodeAt(i)
        if (cc >= 65 && cc <= 90) {
            hasUpper = true
        }

        if (cc >= 48 && cc <= 57) {
            hasNumber = true
        }

        if ((cc >= 97 && cc <= 122) || (cc >= 65 && cc <= 90)) {
            hasChar = true
        }
    }
    return hasUpper && hasChar && hasNumber
}

/**
 * 大小写字母+数字  6-20位
 * @param ps
 */
export const validatePwd = pwd => {
    return (
       typeof pwd === 'string'
        && pwd.length >=6
        && pwd.length <= 20
        && hasCharAndNumberAndUpper(pwd)
    )
}