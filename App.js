import React from 'react';
import './style.css'
import {CSSTransition,TransitionGroup} from 'react-transition-group';

export default class App extends React.Component {
  state = {
    list:[]
  };

  handleAddItem = () => {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        {
          //TODO 想让每个生成的item都被Transition包裹

          //emm...还是要给每个都套一层CSSTransition
          //然后还在最外面，所有item外面，套一层 TransitionGroup
          //此时的好处在于单个item的 CSSTransition 无需设置in
        }

        <TransitionGroup>
          {
            this.state.list.map((item,index)=>{
              return (
                <CSSTransition
                  timeout={1500}
                  classNames='fade'
                  unmountOnExit
                  onEntered={(el)=>{el.style.color='blue'}}
                  appear={true}
                  key={index}
                >
                  <div key={index}>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>

        <button onClick={this.handleAddItem}>toggle</button>
      </React.Fragment>
    );
  }
}
