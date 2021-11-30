<template>
  <div id="app">
    <div class="home">
      <span @click="goView">回到首页</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goView() {
      if(window.location.hash !== '#/'){
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>
body{
  display: flex;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 375px;
  padding: 20px 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

*{
  margin: 0;
  padding: 0;
}
.home span{
  cursor: pointer;
  font-size: 14px;
}
</style>
