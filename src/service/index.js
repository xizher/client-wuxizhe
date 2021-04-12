import { default as appConfig } from '@/config/app.config'
import { cryptoUtils } from '@xizher/js-utils'

cryptoUtils.setGlobelKey(appConfig.cryptoConfig.key)
cryptoUtils.setGlobelIV(appConfig.cryptoConfig.iv)
