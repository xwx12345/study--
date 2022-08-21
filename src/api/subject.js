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
          expert_id:expert,
        },
        data:param
    })
}
