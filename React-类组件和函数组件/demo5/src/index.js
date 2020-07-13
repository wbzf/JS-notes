import React from "react"
import ReactDOM from "react-dom"

import "./style.css"

function App() {
  return (
    <div className="App">
      爸爸
      <Son />
    </div>
  )
}

class Son extends React.Component {
  constructor() {
    super()
    this.state = {
      n:0,
      m:0
    }
  }
  addN(){
    this.setState({n: this.state.n + 1})
  }
  addM(){
    this.setState({m: this.state.m + 1})
  }
  render(){
    return (
      <div className="Son">
        儿子 n: {this.state.n}
        <button onClick={() => this.add()}>n+1</button>
        m: {this.state.m}
        <button onClick={() => this.addM()}>m+1</button>
        <Grandson />
      </div>
    )
  }
}

const Grandson = () => {
  const [state, setState] = React.useState({
    n:0, m:0
  });

  return (
    <div className="Grandson">
      孙子 n:{state.n}
      <button onClick={() => setState({n:state.n + 1})}>n+1</button>
      m:{state.m}
      <button onClick={() => setState({m:state.m + 1})}>m+1</button>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)