<template>
  <a-card
    class="login-panel"
    size="small"
  >
    <a-tabs size="small">
      <a-tab-pane
        key="sign-in"
        tab="登录"
      >
        <SignIn />
      </a-tab-pane>
      <a-tab-pane
        key="sign-up"
        tab="注册"
      >
        <SignUp />
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const SignIn = defineAsyncComponent(() => import('../components/app/login/SignIn.vue'))
const SignUp = defineAsyncComponent(() => import('../components/app/login/SignUp.vue'))
</script>

<style>

</style>
