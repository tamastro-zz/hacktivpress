<template>
  <div class="login">
    <div v-if="login == true">
      <h1>LOGIN</h1>
      <form class="ui form">
        <div class="field">
          <label>USERNAME</label>
          <input type="text" name="title" v-model="usernamelogin">
        </div>
        <div class="field">
          <label>PASSWORD</label>
          <input type="password" name="password" v-model="passwordlogin">
        </div>
      </form>
        <button class="ui blue button" @click="loginform">Login</button>
        <button class="ui teal button" @click="login = false">Register</button>
    </div>
    
  <div v-if="login == false">
    <h1>REGISTER</h1>
    <form class="ui form">
      <div class="field">
        <label>USERNAME</label>
        <input type="text" name="title" v-model="usernameregister">
      </div>
      <div class="field">
        <label>PASSWORD</label>
        <input type="password" name="password" v-model="passwordregister">
      </div>
    </form>
      <button class="ui teal button" @click="register">Register</button>
      <button class="ui red button" @click="login = true">cancel</button>
  </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        login: true,
        usernamelogin: '',
        passwordlogin: '',
        usernameregister: '',
        passwordregister: '',
        error: ''
      }
    },
    methods: {
      loginform() {
        this.$http.post('/users/signin', {
          username: this.usernamelogin,
          password: this.passwordlogin
        })
        .then(response => {
          console.log('responnya');
          if (response.data == 'nousername') {
            this.error = 'Username Not Exist'
          }
          if (response.data == 'wrong password') {
            this.error = 'Password Salah'
          } else {
            localStorage.setItem('token', response.data)
            this.$router.push('/blog')
          }
        })
      },
      register() {
        this.$http.post('/users/signup', {
          username: this.usernameregister,
          password: this.passwordregister,
        })
          .then(response => {
            this.usernameregister = ''
            this.passwordregister = ''
            this.login = true
          })
      }
    }
  }

</script>

<style>
  body {
    background-color: #DADADA;
  }

  body>.grid {
    height: 100%;
  }

  .image {
    margin-top: -100px;
  }

  .column {
    max-width: 450px;
  }

</style>
