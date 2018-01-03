import React, { Component } from 'react';
// import logo from './logo.svg';
import { Button,List } from 'antd-mobile';
import './App.css';
import {connect} from 'react-redux';
import {addNum,subtr,addNumAsync} from './index.redux';
const Item = List.Item;
const Brief = Item.Brief;
// const mapStateToProps = (state) => {
//   return {
//     num: state
//   }
// }
// const actionCreators ={addNum,subtr,addNumAsync}
// App = connect(mapStateToProps,actionCreators)(App);

@connect(
  // 你要state什么属性放到props里
  state=>({num:state.counter}),
  //你要什么方法放到props里，自动dispath
  {addNum,subtr,addNumAsync})
class App extends Component {
  
  constructor(){
    super();
    this.state={
       attr :['dave','dave2']
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <List >
            {this.state.attr.map(v=> <Item key={v} >{v}</Item>)}
          </List>
        </header>
        <p className="App-intro">
          <span>有机关枪：{this.props.num}</span>
          <Button type="primary" onClick={this.props.addNumAsync}>Button</Button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
