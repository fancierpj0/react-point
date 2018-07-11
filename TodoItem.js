import React from 'react';

export default class TodoItem extends React.Component{

  render(){
    let {handleDel, item} = this.props;

    return (
      <React.Fragment>

        {/*
          <li
            key={index}
            dangerouslySetInnerHTML={{__html:item}}
          >
            {
              //TODO 如果一个元素使用dangerouslySetInnerHTML来设置内部的html，那么不要在元素内部再使用jsx，这样会报错
              //invariant.js:42 Uncaught Error: Can only set one of `children` or `props.dangerouslySetInnerHTML`.
            }
          </li>
        */}

        <li>
          {item.content}
          <button onClick={(ev)=>handleDel(ev,item.id)}>删除</button>
        </li>
      </React.Fragment>
    )
  }
}
