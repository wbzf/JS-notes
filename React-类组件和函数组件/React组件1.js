组件
就目前而言 一个返回React元素的函数就是组件
在Vue里 一个构造选项就可以表示一个组件

元素与组件
const div = React.createElement('div',...)
这是一个React元素
const Div = () => React.createElement('div',...)
这是一个React组件

React两种组件
1.函数组件
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}
使用方法: <Welcome name="nihui" />

2.类组件
class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>
    }
}
使用方法: <Welcome name="nihui" />

<Welcome />
会被翻译成什么
<div/>会被翻译为React.createElement('div')
<Welcome/>会被翻译成React.createElement(Welcome)
babeljs.io

React.createElement的逻辑
如果传入一个字符串'div' 则会创建一个div
如果传入一个函数 则会调用该函数 获取其返回值
如果传入一个类 则在类前面加个new 这会导致执行constructor
获取一个组件对象 然后调用对象的render方法 获取其返回值
demo1

添加props(外部数据)
demo2
类组件直接读取属性this.props.xxx
函数组件直接读取参数props.xxx

添加state(内部数据)
demo1
类组件用this.state读 this.setState写
函数组件用useState返回数组 第一项读 第二项写

类组件注意事项
this.state.n += 1 无效
其实n已经改变了 只不过UI不会自动更新而已
调用setState才会触发UI更新(异步更新)
因为React没有像Vue监听data一样监听state

setState会异步更新UI
setState之后 state不会马上改变 立马读state会失败
更推荐的方式是setState(函数)

this.setState(this.state) 不推荐
React希望我们不要修改旧state(不可变数据)
常用代码: setState({n:state.n + 1})

函数组件注意事项
跟类组件类似的地方
也要通过setX(新值)来更新UI

跟类组件不同的地方
没有this 一律用参数和变量

复杂state
如果state里不止有n怎么办
类组件里有n和m demo3
函数组件里有n和m demo4
函数组件另一种不推荐得到写法 你会发现m被置空 demo5

总结
类组件的setState会自动合并第一层属性
但是不会合并第二层属性 demo6 
使用Object.assign 或者 ...操作符
函数组件的setX则完全不会帮你合并
要合并自己用 ... 操作符合并去吧
