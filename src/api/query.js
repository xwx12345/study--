import request from '../utils/request'

export function TextSearchBooks(data) {
    return request({
        url: '/Query/QueryBook',
        method: 'GET',
        params: {
            text: data
        }
    })
}

export function GetBook(data) {
    return request({
        url: '/Query/GetBook',
        method: 'GET',
        params: {
            isbn: data
        }
    })
}