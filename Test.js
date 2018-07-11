import React from 'react';

export default class Test extends React.Component{
  render(){
    console.log('Test render');

    return <div>{this.props.content}</div>;
  }
}
