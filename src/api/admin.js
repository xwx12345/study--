import request from '../utils/request.js'

export function AddBook(data) {
  let param = new URLSearchParams(data);
  console.log('paras', param);
  return request({
      url: '/Data/AddBook',
      method: 'POST',
      data:param
  })
}
export function AddMajor(data) {
  let param = new URLSearchParams(data);
  console.log('paras', param);
  return request({
      url: '/Data/AddMajor',
      method: 'POST',
      data:param
  })
}
export function AddCourse(data) {
  let param = new URLSearchParams(data);
  console.log('paras', param);
  return request({
      url: '/Data/AddCourse',
      method: 'POST',
      data:param
  })
}
export function AddQuestion(data) {
  let param = new URLSearchParams(data);
  console.log('paras', param);
  return request({
      url: '/Data/AddQuestion',
      method: 'POST',
      data:param
  })
}
