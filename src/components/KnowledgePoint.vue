<template>
  <div class="knowledge_point">
    <header-view title="点亮知识点"></header-view>
    <div class="knowledge_point_box">
      <div class="menu">
        <div @click="menuTab('nk')" class="menu_item" :class="{active:isActive}">新知库</div>
        <div @click="menuTab('cases')" class="menu_item" :class="{active:!isActive}">案例库</div>
      </div>
      <div class="content">
        <div class="left">
          <div v-for="(item,index) in leftArr" class="left_item" :class="{active:index == num}" @click="contentLeftTab(index)" :key="index">{{item.title}}</div>

          <!-- <div class="left_item">新营销</div> -->
        </div>
        <div class="right">
          <div class="right_item">1</div>
          <div class="right_item">2</div>
          <div class="right_item">3</div>
          <div class="right_item">4</div>
          <div class="right_item">5</div>
          <div class="right_item">6</div>
          <div class="right_item">7</div>
          <div class="right_item">8</div>
          <div class="right_item">9</div>
          <div class="right_item">10</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderView from "./Header.vue"
  export default {
    data(){
      return {
        isActive:true,
        num:0,
        leftArr:[
          {title:"金融科技"},
          {title:"新零售"},
          {title:"新金融"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
          {title:"新科技"},
        ],
        data:{
          nk:[
            {title:"金融科技"},
            {title:"新零售"},
            {title:"新金融"},
            {title:"新科技"}
          ],
          cases:[
            {title:"智慧城市"},
            {title:"智慧农业"},
            {title:"智慧医疗"},
            {title:"服务业"}
          ]
        }
      }
    },
    components:{
      "HeaderView":HeaderView
    },
    methods:{
      menuTab(sign){
        this.leftArr = this.data[sign];
        if(sign == "nk"){
          this.isActive = true
        }else{
          this.isActive = false
        }
        this.num = 0;
      },
      contentLeftTab(index){
        this.num = index
      }
    }
  }
</script>

<style scoped>
  .knowledge_point{
    position: relative;
  }
  .knowledge_point .knowledge_point_box .menu{
    height: 50px;
    border-bottom: 1px solid #eee;
    line-height: 50px;
    text-align: center;
    position: relative;
    z-index:9;
  }
  .knowledge_point .knowledge_point_box .menu_item{
    float: left;
    width: 50%;
  }
  .knowledge_point .knowledge_point_box .menu_item.active{
    height: 49px;
    color: #2b81f2;
    border-bottom: 2px solid #2b81f2;
  }
  .knowledge_point .knowledge_point_box .content{
    position: fixed;
    top: 101px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  /* 左边 */
  .knowledge_point .knowledge_point_box .content .left{
    float: left;
    width: 23%;
    height: 100%;
    background: #f5f5f5;
    overflow-x: auto;
  }
  .knowledge_point .knowledge_point_box .content .left .left_item{
    height: 54px;
    text-align: center;
    line-height: 54px;
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #e5e5e5;
  }
  .knowledge_point .knowledge_point_box .content .left .left_item.active{
    color: #2b81f2;
  }
  /* 右边 */
  .knowledge_point .knowledge_point_box .content .right{
    float: right;
    width: 77%;
    height: 100%;
    background: #fff;
    overflow: auto;
    padding: 2%;
    box-sizing: border-box;
  }
  .knowledge_point .knowledge_point_box .content .right .right_item{
    float: left;
    width: 29%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background: #eee;
    margin: 2%;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #999;

  }
</style>
