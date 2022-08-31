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

export function getInfo(data){
    return request({
        url:'/Personal/GetPersonalInformation',
        method:'GET',
        params:{
            user_id:data
        }
    })
}

export function saveInfo(data,id){
    let param = new URLSearchParams(data);
    console.log('paras', param);
    console.log('data', data);
    return request({
        url:'/Personal/SetPersonalInformation',
        method:'POST',
        params:{
            user_id:id
        },
        data:param
    })
}
export function addFeedBack(data){
    let param = new URLSearchParams(data);
    console.log('paras', param);
    return request({
      url: '/FeedBack/AddFeedBack',
      method: 'POST',
      data:param
  })
}

export function updatePassword(id,data)
{
    let param = new URLSearchParams(data);
    console.log('data',data)
    return request({
        url:'/Personal/UpdatePassword',
        method:'POST',
        params:{
            user_id:id
        },
        data:param
    })
}