<template>
  <div id="app">
    <p class="y-title">{{language.ever}}</p>
    <div class="y-nav">
      <div class="nav-one">
        <div class="y-left"><p>2019年1月20日—2019年1月27日 </p></div>
        <div class="y-right">
          <span><yd-icon name="star"></yd-icon></span>
          <span><yd-icon name="star"></yd-icon></span>
          <span><yd-icon name="star"></yd-icon></span>
          <span class="icon iconfont icon-caozuo-quanping-shousuo"></span>
        </div>
      </div>
      <div class="y-middle">
        <ul>
          <li>
            <p>1</p><span>{{language.taskOne}}</span>
          </li>
          <li>
            <p>2</p><span>{{language.taskTow}}</span>
          </li>
          <li>
            <p>3</p><span>{{language.taskThree}}</span>
          </li>
        </ul>
      </div>
      <div class="routine">
        <p>{{language.routine}}</p>
      </div>
      <div class="middle">
        <div>
          <div class="btn">
            <p class="icon iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></p>
            <p>常规任务</p>
          </div>
          <div class="content">
            <p><u>1.{{language.content}}</u></p>
            <p><u>2.{{language.content}}</u></p>
          </div>
        </div>
        <div>
          <div class="btn">
            <p class="icon iconfont icon-zelvxuanzefeiyongzhengsanjiaoxingzhichi"></p>
            <p>常规任务</p>
          </div>
          <div class="content">
            <p><u>1.{{language.content}}</u></p>
            <p><u>2.{{language.content}}</u></p>
          </div>
        </div>
      </div>
      <div class="y-bottom">
        <div class="nav-one">
          <div class="y-left"><p>2019年1月20日—2019年1月27日 </p></div>
          <div class="y-right">
            <span><yd-icon name="star"></yd-icon></span>
            <span><yd-icon name="star"></yd-icon></span>
            <span><yd-icon name="star"></yd-icon></span>
            <span class="icon iconfont icon-caozuo-quanping-zhankai"></span>
          </div>
        </div>
        <div class="nav-one">
          <div class="y-left"><p>2019年1月20日—2019年1月27日 </p></div>
          <div class="y-right">
            <span><yd-icon name="star"></yd-icon></span>
            <span><yd-icon name="star"></yd-icon></span>
            <span><yd-icon name="star"></yd-icon></span>
            <span class="icon iconfont icon-caozuo-quanping-zhankai"></span>
          </div>
        </div>
        <div class="nav-one">
          <div class="y-left"><p>2019年1月20日—2019年1月27日 </p></div>
          <div class="y-right">
            <span><yd-icon name="star"></yd-icon></span>
            <span><yd-icon name="star"></yd-icon></span>
            <span><yd-icon name="star"></yd-icon></span>
            <span class="icon iconfont icon-caozuo-quanping-zhankai"></span>
          </div>
        </div>
      </div>
    </div>
    <!--本周任务-->
  </div>

</template>

<script>
  import Language from "./../language/Language";
  export default {
    name: "History",
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
  .y-nav{
    background: white;
    .nav-one{
      .px2rem(height,100);
      .px2rem(width,750);
      background: #1F2233;
      div:nth-child(1){
        float: left;
        .px2rem(line-height,100);
        .px2rem(margin-left,32);
        color: white;
        .px2rem(font-size,22);
        font-weight: bold;
        span{
          color: black;
          font-weight: normal;
        }
      }
      div:nth-child(2){
        float: right;
        color: #FF7F00;
        .px2rem(line-height,100);
        .px2rem(margin-right,32);
        .px2rem(font-size,30);
        span:nth-child(3){
          color: white;
        }
        span:nth-child(4){
          color: white;
          .px2rem(font-size,40);

        }
      }
    }
    .y-middle{
      .px2rem(height,210);
      .px2rem(width,750);
      overflow: hidden;
      border-bottom:1px solid #F2F2F2;
      li{
        .px2rem(width,750);
        .px2rem(margin-left,30);
        .px2rem(margin-top,30);
        .px2rem(line-height,30);
        p{
          background: #0080FF;
          color: white;
          .px2rem(width,30);
          .px2rem(font-size,20);
          .px2rem(line-height,30);
          text-align: center;
          font-style: italic;
          float: left;
        }
        span{
          .px2rem(font-size,25);
          .px2rem(margin-left,10);
        }
      }
    }
    .y-bottom{
      .nav-one{
        .px2rem(height,100);
        .px2rem(width,750);
        background: white;
       border-bottom:1px solid #F2F2F2;
        div:nth-child(1){
          float: left;
          .px2rem(line-height,100);
          .px2rem(margin-left,32);
          color: #A1A1A1;
          .px2rem(font-size,22);
          font-weight: bold;
        }
        div:nth-child(2){
          float: right;
          color: #FF7F00;
          .px2rem(line-height,100);
          .px2rem(margin-right,32);
          .px2rem(font-size,30);
          span:nth-child(3){
            color: #E6E6E6;
          }
          span:nth-child(4){
            color: #999999;
            .px2rem(font-size,40);

          }
        }
      }
    }
    .routine{
      .px2rem(height,80);
      border-bottom:1px solid #F2F2F2;
      border-top:1px solid #F2F2F2;
      p{
        .px2rem(line-height,80);
        .px2rem(font-size,30);
        color: #999999;
        .px2rem(margin-left,30);
      }

    }
    .middle .btn p:nth-child(1){
      background: 20px;
      .px2rem(width,30);
      .px2rem(height,30);
      .px2rem(line-height;30);
      background: #999999;
      color: white;
      .px2rem(font-size,10);
      text-align: center;
      float: left;
    }
    .middle .btn p:nth-child(2){
      .px2rem(margin-left,40);
      .px2rem(font-size,25);
    }
    .middle{

      .px2rem(width,750);
      height: 100%;
      .px2rem(padding,30);
      border-bottom: 1px solid #F2F2F2;
      .content{
        display: block;
        height: 100%;
        .px2rem(width,750-60);
        .px2rem(font-size,23);
        color: #999999;
        .px2rem(padding-left,40);
        p{
          .px2rem(line-height,60);
        }
      }
    }
    .middle > div{
      .px2rem(margin-top,30);
    }
    .middle div:nth-child(1){
      .px2rem(margin-top,0);
    }
  }
  .icon-top{
    background: 20px;
    .px2rem(width,30);
    .px2rem(height,30);
    .px2rem(line-height;30);
    background: #333333;
    color: white;
    .px2rem(font-size,10);
    text-align: center;
  }
  .icon-bottom{
    background: 20px;
    .px2rem(width,30);
    .px2rem(height,30);
    .px2rem(line-height;30);
    background: #999999;
    color: white;
    .px2rem(font-size,10);
    text-align: center;
  }
</style>
