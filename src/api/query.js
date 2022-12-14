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
        url: '/Query/GetCourse',
        method: 'GET',
        params: {
            course_id: data
        }
    })
}

export function TextSearchQuestions(data) {
    return request({
        url: '/Query/QueryQuestion',
        method: 'GET',
        params: {
            text: data
        }
    })
}

export function GetQuestion(data) {
    return request({
        url: '/Query/GetQuestion',
        method: 'GET',
        params: {
            question_id: data
        }
    })
}

export function GetAnswer(data) {
    return request({
        url:'/Query/GetAnswer',
        method:'GET',
        params:{
            answer_id:data
        }
    })
}

export function getMajorInfo() {
    return request({
        url:'/Query/GetMajorInfo',
        method:'GET'
    })
}

export function getBookByMajor(data) {
    return request({
        url:'/Query/GetBookByMajor',
        method:'GET',
        params:{
            major_name:data
        }
    })
}

export function getCourseByMajor(data) {
    return request({
        url:'/Query/GetCourseByMajor',
        method:'GET',
        params:{
            major_name:data
        }
    })
}

export function approveAnswer(aid, uid) {
    return request({
        url:'/Data/ApproveAnswer',
        method:'POST',
        params:{
            answer_id:aid,
            user_id:uid
        }
    })
}

export function getNoteForQuestion(uid, qid) {
    return request({
        url:'/Collection/GetNoteForQuestion',
        method:'GET',
        params:{
            user_id: uid,
            question_id: qid
        }
    })
}

export function makeNoteForQuestion(uid, qid, data) {
    let param = new URLSearchParams(data);
    return request({
        url:'/Collection/MakeNoteForQuestion',
        method:'POST',
        params:{
            user_id: uid,
            question_id: qid
        },
        data:param
    })
}

export function getApproveAnswerIDList(uid) {
    return request({
        url:'/Query/GetApproveAnswerIDList',
        method:'GET',
        params:{
            user_id: uid
        }
    })
}