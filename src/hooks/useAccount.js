import { check } from '@/service/login'
import { storageUtils } from '@xizher/js-utils'

export function useSet (account, token) {
  storageUtils.local.set('account', account)
  storageUtils.local.set('token', token)
}

export async function useCheck () {
  const account = storageUtils.local.getUseJSON('account')
  const token = storageUtils.local.get('token')
  return check(account?.id, token)
    .then(res => {
      if (res.success) {
        useSet(res.account, token)
      }
      return res
    })
}

export function useToken () {
  return storageUtils.local.get('token')
}

export function useExit () {
  storageUtils.local.remove('account')
  storageUtils.local.remove('token')
}

export default function () {
  return storageUtils.local.getUseJSON('account')
}
