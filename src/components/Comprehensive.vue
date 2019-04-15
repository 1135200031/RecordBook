<template>
    <div id="app">
      <p class="y-title">{{language.complete}}</p>
      <div class="y-nav">
        <div class="y-left"><p>{{language.schedule}}:<span>60%</span></p></div>
        <div class="y-right">
          <span><yd-icon name="star"></yd-icon></span>
          <span><yd-icon name="star"></yd-icon></span>
          <span><yd-icon name="star"></yd-icon></span>
        </div>
      </div>
      <!--本周任务-->
      <div class="y-middle">
        <div class="y-head">
          <div></div>
          <div>
            <p>{{language.major}}<span>(2019年1月21日—2019年1月28日)</span></p>
          </div>
        </div>
        <div class="y-task">
          <ul>
            <li>
              <p>1</p><span>{{language.taskOne}}</span><span><yd-icon name="star"></yd-icon></span>
            </li>
            <li>
              <p>2</p><span>{{language.taskTow}}</span><span><yd-icon name="star"></yd-icon></span>
            </li>
            <li>
              <p>3</p><span>{{language.taskThree}}</span><span><yd-icon name="star"></yd-icon></span>
            </li>
          </ul>
        </div>
      </div>
      <!--过往任务-->
      <div class="y-bottom">
        <div class="y-top">
          <div></div>
          <div>
            <p>{{language.pastTimes}}</p>
          </div>
        </div>
        <!--前一周-->
        <div class="y-one">
          <p>(2019年1月21日—2019年1月28日)</p>
          <ul>
            <li>
              <p>1</p><span>{{language.taskOne}}</span><span><yd-icon name="star"></yd-icon></span>
            </li>
            <li>
              <p>2</p><span>{{language.taskTow}}</span><span><yd-icon name="star"></yd-icon></span>
            </li>
            <li>
              <p>3</p><span>{{language.taskThree}}</span><span><yd-icon name="star"></yd-icon></span>
            </li>
          </ul>
        </div>
        <!--前两周-->
        <div class="y-one">
          <p>(2019年1月21日—2019年1月28日)</p>
          <ul>
            <li>
              <p>1</p><span>{{language.taskOne}}</span><span><yd-icon name="star"></yd-icon></span>
            </li>
            <li>
              <p>2</p><span>{{language.taskTow}}</span><span><yd-icon name="star"></yd-icon></span>
            </li>
            <li>
              <p>3</p><span>{{language.taskThree}}</span><span><yd-icon name="star"></yd-icon></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import Language from "./../language/Language";
    export default {
        name: "Comprehensive",
        data(){
            return {
                language:Language.complexFont
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
    .px2rem(height,100);
    .px2rem(width,750);
    .px2rem(border-top,1);
    border-top: #e6e6e6 ;
    background: white;
    div:nth-child(1){
      float: left;
      .px2rem(line-height,100);
      .px2rem(margin-left,32);
      color: #999999;
      .px2rem(font-size,30);
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
        color: #999999;
      }
    }

  }
  .y-middle{
    .px2rem(width,750);
    .y-head{
      .px2rem(margin-left,32);
      overflow: hidden;
      div:nth-child(1){
        .px2rem(height,30);
        .px2rem(width,10);
        background: #FF4C4C;
        float: left;
        .px2rem(margin-top,35)
      }
      div:nth-child(2){
        .px2rem(font-size,30);
        color: #999999;
        .px2rem(line-height,100);
        float: left;
        .px2rem(margin-left,10);
        span{
          .px2rem(font-size,20)
        }
      }
    }
    .y-task ul{
      overflow: hidden;
      .px2rem(height,210);
      .px2rem(width,750-64);
      .px2rem(margin-left,32);
      background:#FFFFFF;
      li{
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
        span:nth-child(2){
          .px2rem(font-size,30);
          .px2rem(margin-left,10);
        }
        span:nth-child(3){
          .px2rem(font-size,30);
          float: right;
          .px2rem(margin-right,30);
          color: #FF7F00;
        }
      }
    }
  }
  .y-bottom .y-top{
    .px2rem(margin-left,32);
    overflow: hidden;
    div:nth-child(1){
      .px2rem(height,30);
      .px2rem(width,10);
      background: #00B377;
      float: left;
      .px2rem(margin-top,35)
    }
    div:nth-child(2){
      .px2rem(font-size,30);
      color: #999999;
      .px2rem(line-height,100);
      float: left;
      .px2rem(margin-left,10);
    }
  }
  .y-bottom .y-one{
    .px2rem(margin-bottom,25);
    overflow: hidden;
      .px2rem(height,260);
      .px2rem(width,750-64);
      .px2rem(margin-left,32);
      background:#FFFFFF;
      p{
        .px2rem(font-size,20);
        .px2rem(line-height,80);
        .px2rem(margin-left,30);
        color: #A0A0A0;
      }
      ul{
        li{
          .px2rem(margin-top,30);
          .px2rem(line-height,30);
          p{
            background: #FFD400;
            color: white;
            .px2rem(width,30);
            .px2rem(font-size,20);
            .px2rem(line-height,30);
            text-align: center;
            font-style: italic;
            float: left;
          }
          span:nth-child(2){
            .px2rem(font-size,30);
            .px2rem(margin-left,10);
          }
          span:nth-child(3){
            .px2rem(font-size,30);
            float: right;
            .px2rem(margin-right,30);
            color: #FF7F00;
          }
        }
        li:nth-child(1){
          margin-top: 0;
        }
      }
    }

</style>
