<template>
   <div id="y-app">
     <div id="y-bottom">
       <img src="./../assets/logo.png" alt="">
       <p>{{data.title}}</p>
      </div>
   </div>
</template>

<script>
    import Language from "./../language/Language";

    export default {
        name: "Login",
        data(){
            return {
                data:Language.complexFont
            }
        },
        computed:{

        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
  @baseFontSize:20;
  #y-app{
    font-size: @baseFontSize;
  };
  .px2rem(@name,@px){
      @{name}:@px /2/@baseFontSize * 1rem;
  }
  #y-bottom{
    .px2rem(width,750);
    position: fixed;
    .px2rem(bottom,40);
    img{
      .px2rem(width,180);
      .px2rem(height,180);
      .px2rem( margin-left,750/2-90);
    }
    p{
      .px2rem(font-size,40);
      .px2rem(line-height,80);
      text-align: center;

    }
  }

</style>
