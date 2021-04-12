<template>
  <div>
    <a-form
      layout="vertical"
      :model="state"
      :rules="rules"
      hide-required-mark
      @finish="signIn"
    >
      <a-form-item
        label="用户名/邮箱"
        name="username"
      >
        <a-input v-model:value="state.username" />
      </a-form-item>
      <a-form-item
        label="密码"
        name="password"
      >
        <a-input-password v-model:value="state.password" />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          block
        >
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { signIn as signInService } from '../../../service/login'
import useToast from '../../../hooks/useToast'
const state = reactive({
  username: '',
  password: ''
})
const toast = useToast()
const rules = {
  username: [{ required: true, message: '必填', trigger: 'change' }],
  password: [{ required: true, message: '必填', trigger: 'change' }],
}
function signIn () {
  const { username, password } = state
  signInService(username, password)
    .then(res => {
      if (res.success) {
        toast('登录成功', 'success')
      } else {
        toast('登录失败：用户名或密码错误', 'error')
      }
    })
    .catch(err => {
      console.warn(err)
      toast('登录失败：系统错误', 'error')
    })
}
</script>

<style scoped>

</style>
