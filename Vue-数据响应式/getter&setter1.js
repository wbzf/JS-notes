// data变了
// 一开始是{n:0} 传给 new Vue 之后立马变成{n:(...)}

let obj0 = {
  姓: "面",
  名: "包",
  age: 18,
};
// 需求一 得到姓名

let obj1 = {
  姓: "面",
  名: "包",
  姓名() {
    return this.姓 + this.名;
  },
  age: 18,
};
console.log(obj1.姓名());
// 姓名之后的括号不能删掉

//需求二 姓名不要括号也能得出值

let obj2 = {
  姓: "面",
  名: "包",
  get 姓名() {
    return this.姓 + this.名;
  },
  age: 18,
};
console.log(obj2.姓名);

//需求三 姓名可以被写
let obj3 = {
  姓: "面",
  名: "包",
  get 姓名() {
    return this.姓 + this.名;
  },
  set 姓名(xxx) {
    (this.姓 = xxx[0]), (this.名 = xxx.substring(1));
  },
  age: 18,
};
obj3.姓名 = "立党";
console.log(`姓${obj3.姓}, 名${obj3.名}`);
console.log(obj3);
// setter 用 = xxx 触发set函数
// 姓名:{...} 你确实可以对姓名进行读和写 但是并不存在姓名这个属性

// 在对象上添加属性
var _xxx = 0;
// xxx不存在
Object.defineProperty(obj3, "xxx", {
  get() {
    return this.age;
  },
  set(value) {
    this.age = value;
  },
});
