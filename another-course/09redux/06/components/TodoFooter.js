import React from 'react';
import {connect} from 'react-redux';
import actions from '../store/action/index'; //actions 是 actionCreator组成的对象

class TodoFooter extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav nav-pills" onClick={(e)=>{
          // console.log(e.target.dataset.type); //点击的某一个
          let result = e.target.dataset.type;
          this.props.changeType(result);
        }}>
                                    {/* h5 data-开头  */}
          <li className={this.props.type==='all'?'active':''}><a data-type="all">全部</a></li>
          <li className={this.props.type==='unfinish'?'active':''}><a data-type="unfinish">未完成</a></li>
          <li className={this.props.type==='finish'?'active':''}><a data-type="finish">已完成</a></li>
        </nav>
      </div>
    )
  }
}

export default connect(state=>({...state}),actions)(TodoFooter);