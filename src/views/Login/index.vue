<template>
  <div>
    login
    <button @click="onLogin">login</button>
  </div>
</template>

<script>
import userApi from '@/apis/user'

export default {
  setup() {
    const onLogin = () => {
      userApi.login({
        userName: '1-jie',
        password: '2'
      }).then((res) => {
        console.log('res-', res)
      }).catch((err) => {
        console.log('err-', err)
      })
    }

    return {
      onLogin
    }
  },
}
</script>

<style lang="less" scoped>

</style>