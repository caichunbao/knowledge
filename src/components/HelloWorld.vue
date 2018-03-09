<template>
  <div class="hello">
    <header-view title="123"></header-view>
    <div>{{msg}}</div>
  </div>
</template>

<script>
  import HeaderView from "./Header.vue"
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '商业新知大撒币'
      }
    },
    components:{
      "HeaderView":HeaderView
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
