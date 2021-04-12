import { message } from 'ant-design-vue'

export default function () {
  return (msg, type = '') => {
    let symbol = ''
    switch (type) {
      case 'success':
        symbol = '✔'
        break
      case 'error':
        symbol = '✘'
        break
      default:
        break
    }
    message.open({
      content: symbol + msg
    })
  }
}
