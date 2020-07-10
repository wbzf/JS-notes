import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App(){
  return (
    <div className="App">
      爸爸
      <Son />
    </div>
  )
}

class Son extends React.Component{
  constructor(){
    super();
    this.state = {
      n : 0
    }
  }
  add(){
    // this.state.n += 1 为什么不行
    // React没有监听n 所以n变化了 React不知道
    // this.setState({n : this.state.n + 1}) // 不推荐修改原对象 推荐修改新对象
    // console.log(this.state.n) 有bug 因为setState是异步的 建议使用下面的方式
    this.setState((state)=>{ // state是没修改之前的
      const n = state.n + 1
      console.log(n)
      return {n:n}
    })
  }
  render(){
    return (
      <div className="Son">
        儿子 n : {this.state.n}
        <button onClick={() => this.add()}>+1</button>
        <Grandson />
      </div>
    )
  }
}

const Grandson = () => {
  // const array = React.useState(0)
  // const n = array[0]
  // const setN = array[1]
  const [n, setN] = React.useState(0) // setN之后得到一个新得到n
  return (
      <div className="Grandson">
        孙子 n:{n}
        <button onClick={() => setN(n + 1)}>+1</button>
      </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
