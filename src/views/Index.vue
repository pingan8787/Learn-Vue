<template>
  <div class="home">
    <ul>
      <li v-for="(route, i) in routes" :key="i" @click="goView(route)">
        学习「{{ route.title }}」内容
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      routes: [
          {path: '/home', title: '指令'},
          {path: '/api', title: 'API'}
      ],
    };
  },
  mounted() {
    // this.setRoutes();s
  },
  methods: {
    setRoutes() {
      this.routes = this.$router.options.routes;
    },
    goView(route) {
      const { path } = route;
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.home li {
  padding-top: 10px;
  cursor: pointer;
}
</style>
