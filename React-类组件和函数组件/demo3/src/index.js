import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App(){
  return (
    <div className="App">
      爸爸
      <Son messageForSon="儿子你好"/>
    </div>
  )
}

class Son extends React.Component{
  constructor(){
    super();
    this.state = {
      n : 0,
      m : 0
    }
  }
  addN(){
    this.setState({n: this.state.n + 1})
    // m 会被覆盖为 undefined吗？
    // class组件里面的setState 如果你对其中一部分进行修改 其他部分会自动沿用上一次的值
  }
  addM(){
    this.setState({m: this.state.m + 1})
    // n 会被覆盖为 undefined吗？
  }
  render(){
    return (
      <div className="Son">
        儿子 n: {this.state.n}
        <button onClick={() => this.addN()}>n+1</button>
        m: {this.state.m}
        <button onClick={() => this.addM()}>m+1</button>
        <Grandson />
      </div>
    )
  }
}

const Grandson = () => {
  const [n, setN] = React.useState(0)
  return (
      <div className="Grandson">
        孙子 n: {n}
        <button onClick={() => setN(n + 1)}>+1</button>
      </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
