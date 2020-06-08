// JS世界
// JS开发者说要有window 就有了window(浏览器提供)
// 要有console 于是就有了console 并且挂到window上
// 要有对象 于是就有了Object 并且挂到window上
// let person = {} 等价于 let person = new Object()
// 要有数组(一种特殊的对象) 于是就有了Array 并且挂到window上
// let a = [1,2,3] 等价于 let a = new Array(1,2,3)
// 要有函数(一种特殊的对象) 于是就有了Function 并且挂到window上
// function f(){} 等价于 let f = new Function()
// 因为方便 挂在window上的东西可以在任何地方直接使用

{
  <script src="1\window内存图.png"></script>;
}

// window.药娘 = function () {
//   console.log("我要透药娘");
// }
// 药娘 //f(){console.log("我要透药娘")}

// 关于window
// window变量和window对象是两个东西
// window变量是一个容器 存放window对象的地址
// window对象是Heap里的一堆数据
// 可以让 let 药娘 = window 那么这个药娘就指向了window对象 window变量就可以死了

<script src="1\window内存图(详细).png"></script>;

// 同理
// console和console对象不是同一个东西
// Object和Object函数对象不是同一个东西
// 前者是内存地址 后者是一堆内存
