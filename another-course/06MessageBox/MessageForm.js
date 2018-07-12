import React from 'react';

export default class MessageForm extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault(); //阻止表单的提交
    let message = {auth: this.auth.value, content: this.content.value};
    this.props.add(message); //调用父组件的方法 将值传递到父组件中
    this.auth.value = '';
    this.content.value = '';
  };

  render(){
    return (
      //使用onSubmit的好处在于 可以给表单元素设置required校验属性
      //form里的button默认就是type=submit
      <form className='form' onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="auth" className='control-label'>留言人</label>
          <input type="text" id="auth" className='form-control' ref={x => this.auth = x}required={true} />
        </div>
        <div className="form-group">
          <label htmlFor="content" className='control-label'>内容</label>
          <textarea id="content" className='form-control' cols='30' row="10" ref={x => this.content = x} required={true}/>
        </div>
        <div className="form-group">
          {/* 默认就是 type=submit */}
          <button className="btn btn-info">提交</button>
        </div>
      </form>
    );
  }
}