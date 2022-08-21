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

export function TextSearchCourses(data) {
    return request({
        url: '/Query/QueryCourse',
        method: 'GET',
        params: {
            text: data
        }
    })
}

export function GetCourse(data) {
    return request({
        url:'/Query/GetCourse',
        method:'GET',
        params:{
            course_id:data
        }
    })
}