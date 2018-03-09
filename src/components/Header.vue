<template>
  <div class="header">
    <span class="back">&lt;</span>
    <p class="title">{{title}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    props:[
      'title'
    ]
  }
</script>
<style>
  .header{
    height: 50px;
    box-sizing: border-box;
    position: relative;
  }
  .header .back{
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 26px;
    color: #666;
  }
  .header .title{
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    color: #333;
  }
</style>



