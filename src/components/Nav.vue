<template>
  <div id="app">
    <div id="nav-top">
      <router-view></router-view>
    </div>
    <div id="nav-bottom">
      <ul>
        <router-link to="/comprehensive" tag="li" :class="{active:ind==1}">
         <p class="icon iconfont" @click="show(1)">&#xe635;</p>
          <p>{{language.multiple}}</p>
        </router-link>
        <router-link to="/thisweek" tag="li" :class="{active:ind==2}">
          <p class="icon iconfont" @click="show(2)">&#xe616;</p>
          <p>{{language.tswk}}</p>
        </router-link>
        <router-link to="#" tag="li">
          <img @click="setMaskShow" src="./../assets/images/nav/0_03.png" alt="">
        </router-link>
        <router-link to="/history" tag="li" :class="{active:ind==4}">
          <p class="icon iconfont" @click="show(4)">&#xf027f;</p>
          <p>{{language.history}}</p>
        </router-link>
        <router-link to="/laboratory" tag="li" :class="{active:ind==5}">
          <p class="icon iconfont" @click="show(5)">&#xe7d0;</p>
          <p>{{language.lab}}</p>
        </router-link>
      </ul>
    </div>
    <div class="box">
      <div class="mask" v-show="maskShow" @click="setMaskShow">
        <div class="week">
          <ul>
            <li v-for="(v) in arr">{{v}}</li>
          </ul>
        </div>
        <div class="img">
          <img src="./../assets/images/nav/3.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Language from "./../language/Language"
  export default {
        name: "Nav",
      data(){
        return{
          language:Language.complexFont,
          ind:"1",
          show2: false,
          maskShow: false,
          arr:[
              Language.complexFont.Monday,
              Language.complexFont.Tuesday,
              Language.complexFont.Wednesday,
              Language.complexFont.Thursday,
              Language.complexFont.Friday,
              Language.complexFont.Saturday,
              Language.complexFont.Weekday,
          ]
          }
      },
      methods:{
        show:function (i) {
          this.ind=i;
        },
        setMaskShow:function (){
          this.maskShow = !this.maskShow;
        }
        }

    }
</script>

<style scoped lang="less">
  #app{
    @baseFontSize:20;
    html{
      font-size: @baseFontSize;
    }
    .px2rem(@name,@px){
        @{name}:@px /2/@baseFontSize * 1rem;
    }
    #nav-bottom{
      .px2rem(width,750);
      .px2rem(height,110);
      position: fixed;
      bottom: 0;
      background-image: url("./../assets/images/nav/2.png");
      background-size: 100% 100%;
    }
    #nav-bottom ul{
      position: fixed;
      bottom: 0;
      .px2rem(width,750);
      .px2rem(height,97);
      .px2rem(border-top,2);
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .px2rem(padding-bottom,18);
      .px2rem(padding-top,10);
      p:nth-child(1){
        .px2rem(width,40);
        .px2rem(height,40);
        .px2rem(border,1);
        .px2rem(line-height,38);
        border:solid #404040;
        border-radius: 50%;
        text-align: center;
        .px2rem(font-size,25);
        color: #333333;
      }
      li:nth-child(3) img{
        .px2rem(width,80);
        .px2rem(height,80);
        .px2rem(margin-left,15);
      }
      li:nth-child(5) p:nth-child(1){
        .px2rem(margin-left,14);
      }
      p{
        .px2rem(font-size,20);
        color: #333333;
      }
      .active p:nth-child(1){
        color:#F21885;
        border:solid #F21885;
      }
    }
    .box{
      .mask{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(255,255,255,0.7);
        .week{
          position: fixed;
          .px2rem(bottom,153);
          .px2rem(width,750);
          ul{
            .px2rem(width,520);
            .px2rem(height,60);
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: auto;
            li{
              .px2rem(width,60);
              .px2rem(height,60);
              background: #63a35c;
              border-radius: 50%;
              .px2rem(line-height,60);
              text-align: center;
              .px2rem(font-size,24);
              color: white;
            }
            li:nth-child(1){
              background: #D0444A;
            }
            li:nth-child(2){
              background: #EC7B58;
            }
            li:nth-child(3){
              background: #FACA66;
            }
            li:nth-child(4){
              background: #78AD63;
            }
            li:nth-child(5){
              background: #64A4C4;
            }
            li:nth-child(6){
              background: #434F66;
            }
            li:nth-child(7){
              background: #786180;
            }
          }
        }
        .img{
          .px2rem(width,120);
          .px2rem(height,90);
          background: white;
          position: fixed;
          .px2rem(bottom,8);
          .px2rem(left,325);
          img{
            position: fixed;
            .px2rem(bottom,8);
            .px2rem(left,334);
            .px2rem(width,80);
            .px2rem(height,80);
          }
        }
      }
    }
  }
</style>
