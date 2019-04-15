<template>
  <div id="app">
    <p class="y-title">{{language.now}}</p>
    <!--导航栏-->
    <div class="y-nav">
      <ul>
        <li>
          <p>{{language.monday}}</p>
          <div></div>
        </li>
        <li class="action">
          <p>{{language.tuesday}}</p>
          <div></div>
        </li>
        <li>
          <p>{{language.wednesday}}</p>
          <div></div>
        </li>
        <li>
          <p>{{language.thursday}}</p>
          <div></div>
        </li>
        <li>
          <p>{{language.friday}}</p>
          <div></div>
        </li>
        <li>
          <p>{{language.saturday}}</p>
          <div></div>
        </li>
        <li>
          <p>{{language.weekday}}</p>
          <div></div>
        </li>

      </ul>
    </div>
    <div class="y-bottom">
      <!--本周任务-->
      <div class="y-one">
        <div class="y-top">
          <div></div>
          <div>
            <p>{{language.pastTimes}}</p>
          </div>
          <div>
            <span><i class="el-icon-star-on"></i></span>
            <span><i class="el-icon-star-on"></i></span>
            <span><i class="el-icon-star-on"></i></span>
          </div>
        </div>
        <ul>
          <li>
            <p>1</p><span>{{language.taskOne}}</span><span><i class="el-icon-circle-plus"></i></span>
          </li>
          <li>
            <p>2</p><span>{{language.taskTow}}</span><span><i class="el-icon-circle-plus"></i></span>
          </li>
          <li>
            <p>3</p><span>{{language.taskThree}}</span><span><i class="el-icon-circle-plus"></i></span>
          </li>
        </ul>
      </div>
      <!--今日任务-->
      <div class="y-one">
        <div class="y-top">
          <div></div>
          <div>
            <p>{{language.today}}</p>
          </div>
          <div>
            <span><i class="el-icon-star-on"></i></span>
            <span><i class="el-icon-star-on"></i></span>
            <span><i class="el-icon-star-on"></i></span>
          </div>
        </div>
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
    </div>
    <div class="y-foot">
      <p class="y-title">{{language.routine}}</p>
      <div class="y-tow">
        <ul>
          <li>
            <p>1</p><span>{{language.routineOne}}</span>
          </li>
          <li>
            <p>2</p><span>{{language.routineTow}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Language from "./../language/Language"
    export default {
        name: "ThisWeek",
        data(){
            return{
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
    .px2rem(margin-bottom,30);
    ul{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .px2rem(height,25);
      li{
        .px2rem(line-height,100);
        position: relative;
        left: 0;
        top:0;
        p{
          .px2rem(font-size,25);
          font-weight: bold;
        }
        div{
          .px2rem(width,10);
          .px2rem(height,10);
          border-radius: 50%;
          .px2rem(margin-top,-20);
          margin: auto;
          position: absolute;
          .px2rem(bottom,20);
          .px2rem(left,20);
        }
      }
      .action{
        p{
          color:#F21885 ;
        }
        div{
          background: #F21885;
        }
      }
      li:nth-child(1){
        p{
          color:#999999 ;
        }
        div{
          background: #999999;
        }
      }
      li:nth-child(7){
        p{
          color:#999999 ;
        }
        div{
          background: #999999;
        }
      }
    }
  }
  .y-bottom .y-one{
    .px2rem(margin-bottom,25);
    overflow: hidden;
    .px2rem(height,270);
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

        }
      }
      li:nth-child(1){
        margin-top: 0;
      }
    }
  }
  .y-bottom .y-top{
    .px2rem(margin-left,32);
    overflow: hidden;
    div:nth-child(1) {
      .px2rem(height, 30);
      .px2rem(width, 10);
      background: #FF4C4C;
      float: left;
      .px2rem(margin-top, 30)
    }
    div:nth-child(2){
      float: left;
      .px2rem(margin-left,-20);
     p{
       .px2rem(font-size,30);
       color: #999999;
       .px2rem(line-height,90);
     }
    }
    div:nth-child(3){
      float: right;
      .px2rem(margin-right,30);
      span{
        .px2rem(font-size,30);
        color: #999999;
        .px2rem(line-height,90);
      }
    }

  }
  .y-bottom .y-one:nth-child(1) .y-top{
    div:nth-child(1) {
      background: #FF4C4C;
    }
  }
  .y-bottom .y-one:nth-child(2){
    ul li p{
      background: #FFD400;
    }
    .y-top{
      div:nth-child(1) {
        background: #00B377;
      }
  }
  }
  .y-foot .y-title{
    text-align: center;
    .px2rem(line-height,70);
    .px2rem(font-size,30);
    color: #999999;
  }
  .y-foot .y-tow{
    .px2rem(margin-bottom,25);
    .px2rem( padding,30);
    overflow: hidden;
    height: 100%;
    .px2rem(width,750-64-60);
    .px2rem(margin-left,32);
    background:#FFFFFF;
    p{
      .px2rem(font-size,20);
      .px2rem(line-height,80);
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

        }
      }
      li:nth-child(1){
        margin-top: 0;
      }
    }
  }

</style>

