<template>
  <div id="app">
    <div v-if="false" class="y-login">
      <com-one></com-one>
    </div>
    <div class="y-bottom">
      <com-tow></com-tow>
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  import Login from './components/Login'
export default {
  name: 'App',
  data(){
    return{
      src:true
    }
  },
  components:{
    'com-one':Login,
    'com-tow':Nav,
  },
  methods:{
    show(){
        return true
    }
  }
}
</script>

<style lang="less" scoped>
  @import "assets/font/font_mlrv5hvgz8m/iconfont.css";
  @import "assets/font/font_6ksv989eutf/iconfont.css";
  @import "assets/font/font_w0jg163i9lr/iconfont.css";
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .y-login{
    display: none;
    background: #FFF2F9;
    .px2rem(width,750);
    .px2rem(min-height,1330);
    animation: myfist 3s none;
  }
  @keyframes myfist {
    from{opacity: 1;}
    to{opacity: 0;}
  }
  @baseFontSize:20;
  #app{
    font-size: @baseFontSize;
  };
  .px2rem(@name,@px){
      @{name}:@px /2/@baseFontSize * 1rem;
  }
  .y-bottom{
    background: #f2f2f2;
    .px2rem(min-height,1330);
    /*animation: mybottom 5s none;*/
  }
  /*@keyframes mybottom {*/
    /*0%{opacity: 0}*/
    /*100%{opacity: 1;}*/
  /*}*/
</style>
