<template id="app">
  <div>
    <van-popup v-model="show" position="top" :overlay="false">
      内容
    </van-popup>
  </div>
</template>
<script>
    export default {
        data() {
            return {
              show: true
            }
        },
        methods: {

        },
    }
</script>
<style lang="less" scoped>
    @baseFontSize:20;
    #app{
        font-size: @baseFontSize;
    };
    .px2rem(@name,@px){
            @{name}:@px /2/@baseFontSize * 1rem;
    }
   #app .box{
   }
</style>
