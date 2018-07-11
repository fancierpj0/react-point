import React from 'react';
import './style.css'

export default class App extends React.Component {
  state = {
    show: true
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello,ahhh</div>
        <button onClick={()=>this.setState({show:!this.state.show})}>toggle</button>
      </React.Fragment>
    );
  }
}
