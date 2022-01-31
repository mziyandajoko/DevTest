<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Messages">Messages</router-link>
    </div>
    <div>
      <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
       <router-view/>
    </main>
    </div>
    
  </div>
</template>
<script>
import LoadingScreen from  '@/components/loadingScreen.vue';

export default {
  name: "App",
  components: {
    LoadingScreen
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
