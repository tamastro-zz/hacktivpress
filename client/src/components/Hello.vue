<template>
  <div class="hello ui relaxed grid centered">
    <div class="">
      <br>
      <div class="ui vertical animated button massive" tabindex="0" @click="showmodal">
        <div class="hidden content">Add</div>
        <div class="visible content">
          <i class="add icon"></i>
        </div>
      </div>
      <br>
      <br>
    </div>

    <div class="row ui grid container">

      <div class="ui raised very padded text container segment eight wide column" v-for="blog in blogs" :key="blog._id">
        <h2 class="ui header">{{blog.title}}</h2>
        <button class="ui icon right floated button" v-if="blog.author._id == user.id" @click="deleteblog(blog._id)">
          <i class="trash icon"></i>
        </button>

        <button class="ui icon right floated button" v-if="blog.author._id == user.id">
           <i class="pencil icon"></i>
        </button>
        <h5>{{blog.author.username.toUpperCase()}}</h5>

        <div class="ui divider"></div>
        <p>{{blog.content}}</p>
        <div class="ui divider"></div>
        <div class="ui label">
          {{blog.category}}
        </div>
      </div>
      <br><br><br>
      <div class="segment eight wide column">
      </div>


    </div>





    <div class="ui modal">
      <i class="close icon"></i>
      <div class="header">
        Add Task
      </div>
      <div class="content">

        <form class="ui form">
          <div class="field">
            <label>Title</label>
            <input type="text" name="title" placeholder="Blog Title..." v-model="title">
          </div>
          <div class="field">
            <label>Content</label>
            <textarea v-model="content"></textarea>
          </div>

          <div class="field">
            <label>Category</label>
            <input type="text" name="category" placeholder="Category" v-model="category">
          </div>
        </form>

      </div>
      <div class="actions">
        <div class="ui black deny button">
          Cancel
        </div>
        <div class="ui positive right labeled icon button" @click="postblog">
          Submit
          <i class="add square icon"></i>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import jwtdecode from 'jwt-decode'
  export default {
    name: 'hello',
    data() {
      return {
        blogs: [],
        title: '',
        content: '',
        category: ''
      }
    },
    methods: {
      showmodal() {
        $('.ui.modal')
          .modal('show');
      },
      getblogs() {
        this.$http.get('/blog', {
            headers: {
              token: window.localStorage.getItem('token')
            }
          })
          .then(response => {
            this.blogs = response.data
          })
      },
      postblog() {
        this.$http.post('/blog/', {
            title: this.title,
            content: this.content,
            category: this.category
          }, {
            headers: {
              token: window.localStorage.getItem('token')
            }
          })
          .then(data => {
            this.getblogs()
            this.title = ''
            this.category = ''
            this.content = ''
          })
      },
      getuser() {
        var decode = jwtdecode(window.localStorage.getItem('token'))
        this.$store.commit('change', decode)
      },
      deleteblog(id) {
        this.$http.delete(`/blog/${id}`, {
          text: ''
        }, {
          headers: {
            token: window.localStorage.getItem('token')
          }
        })
        .then(data => {
          this.getblogs()
        })
      }
    },
    computed: {
     user() {
       return this.$store.state.user
     }
    },
    created() {
      this.getblogs()
      this.getuser()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
