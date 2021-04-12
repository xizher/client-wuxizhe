import createFetch from '@xizher/fetch-helper'
import { cryptoUtils } from '@xizher/js-utils'

export function signIn (username, pwd) {
  const password = cryptoUtils.encrypto(pwd)
  return createFetch()
    .setUrl('/api/account/login')
    .setHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    .setBody(JSON.stringify({ account: username, password }), true)
    .mountPost()
    .then(res => res.json())
    .then(res => res.data)
}

export function signUp (username, email, pwd) {
  const password = cryptoUtils.encrypto(pwd)
  return createFetch()
    .setUrl('/api/account/add')
    .setHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    .setBody(JSON.stringify({ username, email, password }), true)
    .mountPost()
    .then(res => res.json())
}
