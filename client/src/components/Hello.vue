<template>
  <div class="hello ui grid centered">
    <div>
    <div class="ui vertical animated button massive" tabindex="0">
      <div class="hidden content">Add</div>
      <div class="visible content">
        <i class="add icon"></i>
      </div>
    </div>
    </div>

<div class="row">
      <div class="ui card">
        <div class="content">
          <div class="header">Cute Dog</div>
          <div class="meta">
            <span>2 days ago</span>
            <a>Animals</a>
          </div>
          <p></p>
        </div>
      </div>
</div>


  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
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
