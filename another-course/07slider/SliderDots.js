import React from 'react';

export default class SliderDots extends React.Component{
  render(){
    //无缝时，越界了并且只是第一个span就加上active
    return (
      <div className='slider-dots'>
        {this.props.items.map((item,index)=>(
          <span key={index} className={(this.props.index===index||(this.props.index===this.props.items.length&&index===0))?'active':''} onClick={()=>{this.props.go(index-this.props.index)}}></span>
        ))}
      </div>
    )
  }
}