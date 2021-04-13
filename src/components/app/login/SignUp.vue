<template>
  <div>
    <a-form
      layout="vertical"
      :model="state"
      :rules="rules"
      hide-required-mark
      @finish="signUp"
    >
      <a-form-item
        label="用户名"
        name="username"
      >
        <a-input v-model:value="state.username" />
      </a-form-item>
      <a-form-item
        label="邮箱"
        name="email"
      >
        <a-input v-model:value="state.email" />
      </a-form-item>
      <a-form-item
        label="密码"
        name="password"
      >
        <a-input-password v-model:value="state.password" />
      </a-form-item>
      <a-form-item
        label="确认密码"
        name="againPassword"
      >
        <a-input-password v-model:value="state.againPassword" />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          block
        >
          注册
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { regUtils } from '@xizher/js-utils'
import { reactive, ref } from 'vue'
import useToast from '../../../hooks/useToast'
import { signUp as signUpService } from '../../../service/login'
import { useForm } from '@ant-design-vue/use'
const state = reactive({
  username: '',
  email: '',
  password: '',
  againPassword: '',
})
function checkAgainPassword (rules, value) {
  if (value === '') {
    return Promise.reject('需再次输入相同密码')
  } else if (value !== state.password) {
    return Promise.reject('两次密码不匹配')
  }
  return Promise.resolve()
}
function checkEmail (rules, value) {
  if (value === '') {
    return Promise.reject('必填')
  } else if (!regUtils.testEmail(value)) {
    return Promise.reject('邮箱格式不正确')
  }
  return Promise.resolve()
}
const rules = reactive({
  username: [{ required: true, message: '必填', trigger: 'change' }],
  password: [{ required: true, message: '必填', trigger: 'change' }],
  email: [{ validator: checkEmail, trigger: 'change' }],
  againPassword: [{ validator: checkAgainPassword, trigger: 'change' }],
})
const { resetFields } = useForm(state, rules)
const toast = useToast()
function signUp () {
  const { username, password, email } = state
  signUpService(username, email, password)
    .then(res => {
      if (res.error) {
        console.warn(res.error)
        toast(`注册失败：${res.error.msg}`, 'error')
      } else {
        toast('注册成功', 'success')
        resetFields()
      }
    })
}
</script>

<style scoped>

</style>
