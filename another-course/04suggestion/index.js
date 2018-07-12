import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import _jsonp from 'jsonp';
function jsonp(url,opts={}){
  return new Promise((resolve,reject)=>{
    //url是jsonp请求的路径 opts是请求的属性 第三个参数是成功的回调
    _jsonp(url, opts, function (err, data) {
      if(err) return reject(err);
      resolve(data); //成功调用resolve
    });
  });
}
//async + await await跟的是promise 有await就需要用async来修饰此函数
class Search extends React.Component {
  constructor(){
    super();
    this.state={
      search:''
      ,list:[]
      ,index:-1 //-1谁都没选中
    }
  }

  handleChange = async (e) => {
    let wd = e.target.value;
    this.wd = wd; //保存输入的内容 index越界后还要使用
    let {s} = await jsonp(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${wd}`, {param: 'cb'});
    this.setState({search: wd, list: s, index: -1});
  };

  changeIndex = (e) => {
    if(e.keyCode === 38||e.keyCode === 40){
      let index = this.state.index
        , len = this.state.list.length;
      //↑ or ↓
      if(e.keyCode === 38){
        e.preventDefault();
        if(index===-1){
          index = len - 1;
        }else{
          --index;
        }
      }
      if(e.keyCode === 40){
        if(index===len-1){
          index = -1;
        }else{
          ++index;
        }
      }
      this.setState({index, search: this.state.list[index]||this.wd});
    }
  };

  enter = (e) => {
    if(e.keyCode===13){
      window.open(`https://www.baidu.com/s?wd=${this.state.search}`);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <input type="text" className="form-control" value={this.state.search} onChange={this.handleChange} onKeyDown={this.changeIndex} onKeyUp={this.enter}/>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.state.list.map((item,index)=>(
                <li className={this.state.index===index?'active list-group-item':'list-group-item'} key={index} >{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Search/>, window.root);