import React from 'react'

class App extends React.Component{
    constructor (props){
        super(props)
        this.state = {n:1}
    }
    onClick = () => {
        this.setState({
            n: this.state.n + 1 // 2
        })
        this.setState({
            n: this.state.n + 1 // 2
        })
    }
    onClick2 = () => {
        this.setState((state) => ({n: state.n + 1}))
        this.setState((state) => ({n: state.n + 1}))
    }
    render(){ 
        return (
            <div className="App">nihui
            <button onClick={this.onClick2}>+2</button>
            <B name={this.state.n}></B>
            </div>
        )
    }
}

class B extends React.Component {
    componentWillReceiveProps(newProps, nextContext){
        console.log('旧的props')
        console.log(this.props)
        console.log('props变化了')
        console.log('新的props')
        console.log(newProps)

    }
    render(){
        return (
        <div>{this.props.name}</div>
        )
    }
}

export default App
