<template>
  <div id="app">
    
  <div class="ui secondary pointing menu" v-if="$route.path !== '/'">
    <a class="item active">
      Home
    </a>
    <div class="right menu">
      <a class="ui item" @click="logout">
        Logout
      </a>
    </div>
  </div>
  <div class="ui segment">
    <router-view></router-view>
  </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    logout() {
      this.$router.push('/')
      window.localStorage.clear()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
