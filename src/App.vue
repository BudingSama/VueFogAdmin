<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapGetters([//...函数名 使用对象展开运算符将此对象混入到外部对象中
        'getContextPathSrc'
      ])
  },
  mounted(){
    console.log(this.$store);
    this.$store.dispatch('getGroup');
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
