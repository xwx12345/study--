import request from '../utils/request.js'

export function UserLogin(data) {
    let param = new URLSearchParams(data);
    console.log('paras', param);
    console.log('data', data);

    return request({
        url: '/Authenticate/LoginGenerateJWT',
        method: 'POST',
        data: param
    })
}
export function SignUp(data) {
    let param = new URLSearchParams(data);
    console.log('paras', param);
    console.log('data', data);

    return request({
        url: '/Authenticate/RegisterGenerateJWT',
        method: 'POST',
        data: param
    })
}

export function Test(){
    return request({
        url:'/Test',
        method:'POST'
    })
}