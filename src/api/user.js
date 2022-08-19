import service from '../utils/axios.js'

export function UserLogin(data:any){
    let param= new URLSearchParams(data);
    console.log('paras',param);
    console.log('data',data);

    return request({
        url:'Authenticate/LoginGenerateJWT',
        method:'POST',
        data:param
    })
}