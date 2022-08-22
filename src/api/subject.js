import request from '../utils/request.js'

export function getExpertQuestionList(data) {
    return request({
        url: '/Query/GetQuestionForExpert',
        method: 'GET',
        params: {
            expert_id: data
        }
    })
}
export function getQuestion(data) {
    return request({
        url: '/Query/GetQuestion',
        method: 'GET',
        params: {
            question_id: data
        }
    })
}
export function answerQuestion(question,expert,answer) {
    let param = new URLSearchParams(answer);
    return request({
        url: '/Data/AddAnswer',
        method: 'POST',
        params:{
          question_id:question,
          expert_id:expert
        },
        data:param
    })
}

export function getCourse(data) {
    return request({
        url: '/Query/GetCourse',
        method: 'GET',
        params: {
            course_id: data
        }
    })
}

export function getBook(data) {
    return request({
        url: '/Query/GetBook',
        method: 'GET',
        params: {
            isbn: data
        }
    })
}

export function getCollectionBook(data) {
    return request({
        url: '/Query/GetCollectionBook',
        method: 'GET',
        params: {
            user_id: data
        }
    })
}

export function getCollectionCourse(data) {
    return request({
        url:'/Query/GetCollectionCourse',
        method: 'GET',
        params: {
            user_id: data
        }
    })
}

export function getCollectionQuestion(data) {
    return request({
        url:'/Query/GetCollectionQuestion',
        method: 'GET',
        params: {
            user_id: data
        }
    })
}

export function deCollectBook(uid, bid) {
    return request({
        url:'/Collection/DeCollectBook',
        method: 'DELETE',
        params: {
            user_id: uid,
            isbn: bid
        }
    })
}

export function deCollectCourse(uid, cid) {
    return request({
        url: '/Collection/DeCollectCourse',
        method: 'DELETE',
        params: {
            user_id: uid,
            course_id: cid
        }
    })
}

export function deCollectQuestion(uid, qid) {
    return request({
        url: '/Collection/DeCollectQuestion',
        method: 'DELETE',
        params: {
            user_id: uid,
            question_id: qid
        }
    })
}

export function queryCollectionBook(uid, text) {
    return request({
        url: '/Query/QueryCollectionBook',
        method: 'GET',
        params: {
            user_id: uid,
            text: text
        }
    })
}

export function queryCollectionCourse(uid, text) {
    return request({
        url: '/Query/QueryCollectionCourse',
        method: 'GET',
        params: {
            user_id: uid,
            text: text
        }
    })
}

export function queryCollectionQuestion(uid, text) {
    return request({
        url: '/Query/QueryCollectionQuestion',
        method: 'GET',
        params: {
            user_id: uid,
            searchContent: text
        }
    })
}