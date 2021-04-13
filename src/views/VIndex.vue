<template>
  <a-button @click="exit">
    exit
  </a-button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useExit } from '@/hooks/useAccount'
const router = useRouter()
function exit () {
  useExit()
  router.push('/login')
}
</script>

<style>

</style>
