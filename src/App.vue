<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  beforeCreate() {
    // this.$store.dispatch('getUser');
    if(!localStorage.getItem('token')) {
      this.$router.push('signin');
    }
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html, body, #app{
  width: 100%;
  height: 100%;
}
</style>
