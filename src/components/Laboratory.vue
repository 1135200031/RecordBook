<template>
  <div id="app">
    <p class="y-title">{{language.details}}</p>
    <div class="y-nav">
      <div class="evaluate">
        <div><p>{{language.ask}}?</p></div>
        <ul>
          <li>
            <div>
              <img src="" alt="">
            </div>
            <p>{{language.happy}}</p>
          </li>
          <li>
            <div>
              <img src="" alt="">
            </div>
            <p>{{language.commonly}}</p>
          </li>
          <li>
            <div>
              <img src="" alt="">
            </div>
            <p>{{language.unhappy}}</p>
          </li>
        </ul>
      </div>
      <div class="history">
        <ul>
          <li>
            <div class="left">
              <p>2019年1月2日—2019年1月9日</p>
            </div>
            <div class="right">
              <span>{{language.happy}}</span>
              <img src="" alt="">
            </div>
          </li>
          <li>
            <div class="left">
              <p>2019年1月2日—2019年1月9日</p>
            </div>
            <div class="right">
              <span>{{language.commonly}}</span>
              <img src="" alt="">
            </div>
          </li>
          <li>
            <div class="left">
              <p>2019年1月2日—2019年1月9日</p>
            </div>
            <div class="right">
              <span>{{language.unhappy}}</span>
              <img src="" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="banben">
        <img src="./../assets/images/logo.png" alt="">
        <p>{{language.title}}</p>
        <p>{{language.banben}}</p>
      </div>
    </div>

  </div>

</template>

<script>
  import Language from "./../language/Language";
  export default {
    name: "Laboratory",
    data(){
      return {
        language:Language.complexFont,
        msg:{

        },
      }
    }
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
  .y-title{
    .px2rem(line-height,100);
    .px2rem(font-size,40);
    text-align: center;
    font-weight: bold;
    color: #333333;
  }
  .y-nav > div{
    .px2rem(width,750);
    background: white;
    .px2rem(margin-bottom,20);
  }
  .y-nav{
    .evaluate{
      border-top: 1px solid #E6E6E6;
      .px2rem(padding-left,30);
      .px2rem(padding-bottom,30);
       div p{
        color: #999999;
         .px2rem(font-size,30);
         .px2rem(line-height,90)
      }
      ul{
        .px2rem(width,750-60);
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: auto;
        li{
          .px2rem(width,80);
          .px2rem(height,110);
          div{
            .px2rem(width,80);
            .px2rem(height,80);
            border: 1px solid red;
          }
          p{
            .px2rem(font-size,20);
            .px2rem(line-height,40);
            text-align: center;
          }
        }
        li:nth-child(1){
          p{
            color: #00B377;
          }
          div{
            background: #00B377;
          }
        }
        li:nth-child(2){
          p{
            color: #FFD400;
          }
          div{
            background: #FFD400;
          }
        }
        li:nth-child(3){
          p{
            color: #FF4C4C;
          }
          div{
            background: #FF4C4C;
          }
        }
      }
    }
    .history ul{
      background: #F2F2F2;
      li{
        overflow: hidden;
        background: white;
        .px2rem(margin-top,20);
        .px2rem(padding-left,30);
        .left{
          float: left;
          .px2rem(line-height,110);
          .px2rem(font-size,20);
        }
        .right{
          float: right;
          span{
            .px2rem(line-height,110);
            .px2rem(font-size,20);
          }
        }
      }
      li:nth-child(1){
        .px2rem(margin-top,0);
        .right span{
          color: #00B377 ;
        }
      }
      li:nth-child(2){
        .right span{
          color: #FFD400 ;
        }
      }
      li:nth-child(3){
        .right span{
          color:#FF4C4C;
        }
      }
    }
    .banben{
      overflow: hidden;
      img{
        .px2rem(width,100);
        .px2rem(height,100);
        border-radius: 50%;
        .px2rem(margin-left,30);
        .px2rem(margin-top,30);
        float: left;
      }
      p:nth-child(2){
        .px2rem(line-height,160);
        .px2rem(font-size,30);
        .px2rem(margin-left,185);
        float: left;
      }
      p:nth-child(3){
        .px2rem(line-height,160);
        .px2rem(font-size,20);
        .px2rem(margin-left,235);
        color: #999999;
        float: left;
      }
    }
  }
</style>
