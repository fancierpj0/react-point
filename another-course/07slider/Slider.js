import React from 'react';
import styled from 'styled-components';
import SliderList from "./SliderList";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";

class _Slider extends React.Component {
  constructor(){
    super();
    this.state = {index: 0}; //表示当前是第几张
  }

  go = (step) => { // 切换
    let index = this.state.index + step
      , max_index = this.props.items.length;
    // index === max_index && (index = 0);
    // index < 0 && (index = max_index - 1);

    //无缝
    if(index>max_index){ //max_index时为追加的那一张
      this.$ul.style.transitionDuration = '';
      this.$ul.style.left = 0; //瞬间会到0
      setTimeout(() => { //等动画移除后并且回到了0点 再增加回动画时间（端时间内）
        this.$ul.style.transitionDuration = this.props.speed+'s';
        index = 1; //下一次该走1了 也就是第二张 索引为max_index是第1张
        this.setState({index: index});
      }, 30);
      return; //因为设了setTimeout 所以要等待setTimeout后再设置最新状态
    }

    if(index<0){//因为最后追加了一张 要跳过这一张
      this.$ul.style.transitionDuration = '';
      this.$ul.style.left = max_index*-1*400+'px'; //瞬间会到0
      setTimeout(() => {
        this.$ul.style.transitionDuration = this.props.speed+'s';
        index = max_index - 1;
        this.setState({index: index});
      }, 30);
      return;
    }
    this.setState({index: index});
  };

  turn = () => { // 轮播
    this.timer = setInterval(() => {
      this.go(1);
    },this.props.delay*1000);
  };

  componentDidMount(){ //页面加载完成后 看是否需要自动轮播
    if(this.props.autoplay){
      this.turn();
    }
    this.$ul = this.list.ul;
  }

  render() {

    return (
      <div className={this.props.className} onMouseEnter={() => {
        clearInterval(this.timer);
      }} onMouseLeave={() => {
        this.turn()
      }}>
        <SliderList ref={x=>this.list=x} index={this.state.index} items={this.props.items} speed={this.props.speed}/>
        {this.props.arrows ? <SliderArrows go={this.go}/> : null}
        {this.props.dots ? <SliderDots items={this.props.items} index={this.state.index} go={this.go}/> : null}
      </div>
    );
  }
}

export default styled(_Slider)`
  width: 400px;
  height: 300px;
  border: 5px solid red;
  margin: 0 auto;
  position:relative;
  overflow: hidden;
  ul,li{list-style:none;margin:0;padding:0;}
  ul{
    position:absolute;height:300px;left:0;top:0;
    li{width:400px;height:300px;float:left;
      img{width:100%;height:100%}
    }
  }
  .slider-arrows{
    position:absolute;
    width: 100%;
    height: 40px;
    left:0;
    top: 50%;
    transform:translateY(-50%);
    span{
      width: 30px;
      height: 40px; 
      display:block;
      background:#fff;
      text-align: center;
      line-height:40px;
      user-select: none;
      cursor:pointer;
      &:nth-of-type(1){
        float:left;
      }
      &:nth-of-type(2){
        float:right;
      }
    }
  }
  .slider-dots{
    position:absolute;
    text-align: center;
    width:100%;
    left:0;
    bottom:20px;
    span{
      background:pink;display: inline-block;width: 20px;height: 20px;border-radius:50%;margin:3px;cursor:pointer;
      &.active{background:rgba(233,222,100,0.8)}
    }
  }
`