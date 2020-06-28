let data0 = {
  n: 0,
};

// 需求一: 用Object.defineProperty 定义n
let data1 = {};
Object.defineProperty(data1, "n", {
  value: 0,
});
console.log(`需求一: ${data1.n}`);

// 需求二: n不能小于0
// 即data2.n = -1应该无效 但data2.n = 1有效
let data2 = {};
data2._n = 0; // _n用来存储n的值
Object.defineProperty(data2, "n", {
  get() {
    return this._n;
  },
  set(value) {
    if (value < 0) {
      return;
    }
    this._n = value;
  },
});
console.log(`需求二: ${data2.n}`);
data2.n = -1;
console.log(`需求二: ${data2.n} 设置为 -1失败`);
data2.n = 1;
console.log(`需求二: ${data2.n} 设置为 1成功`);

// 如果对方直接使用data2._n呢
// 需求三 使用代理
let data3 = proxy({ data: { n: 0 } }); // 括号里是匿名对象 无法访问

function proxy({ data } /*options*/) {
  //解构赋值
  //   const { data } = options;
  const obj = {};
  // 这里的 n 写死了 理论上应该遍历data的所有key 这里做了简化
  Object.defineProperty(obj, "n", {
    get() {
      return data.n;
    },
    set(value) {
      if (value < 0) {
        return;
      }
      data.n = value;
    },
  });
  return obj; // obj就是代理
}
// data3就是obj
console.log(`需求三: ${data3.n}`);
data3.n = -1;
console.log(`需求三: ${data3.n}, 设置为 -1 失败`);
data3.n = 1;
console.log(`需求三: ${data3.n}, 设置为 1成功`);

// 需求四
let myData = { n: 0 };
let data4 = proxy({ data: myData });
console.log(`cnm: ${data4.n}`);
myData.n = -1;
console.log(`cnm: ${data4.n}, 设置为-1 失败了吗?`);
// 我现在改myData 是不是还能改

// 需求五 就算用户擅自修改myData 也要拦截他
let myData5 = { n: 0 };
let data5 = proxy2({ data: myData5 });

function proxy2({ data }) {
  let value = data.n;
  delete data.n;
  Object.defineProperty(data, "n", {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue < 0) {
        return;
      }
      value = newValue;
    },
  });
  // 加了上面的几句话 这几句话会监听data

  const obj = {};
  Object.defineProperty(obj, "n", {
    get() {
      return data.n;
    },
    set(value) {
      if (value < 0) {
        return;
      }
      data.n = value;
    },
  });
  return obj;
}
console.log(`需求五: ${data5.n}`);
myData5.n = -1;
console.log(`需求五: ${data5.n}, 设置为 -1失败了`);
myData5.n = 1;
console.log(`需求五: ${data5.n}, 设置为 1成功了`);

// 这代码看着眼熟吗?
// let data5 = proxy2({data:myData5})
// let vm = new Vue({data: myData})

// 总结
// Object.defineProperty;
// 可以给对象添加属性value;
// 可以给对象添加getter / setter;
// getter/setter 用于对属性的读写进行监控

// 代理(设计模式)
// 对myData对象的属性读写 全权由另一个对象vm负责
// 那么vm就是myData的代理

// vm = new Vue({data:myData})
// 1.会让vm成为myData的代理(proxy)
// 2.会对myData的所有属性进行监控

// 数据响应式
// Vue的data是响应式
// const vm = new Vue({data:{n:0}})
// 如果我修改vm.n 那么UI中的n就会响应我
// Vue2 通过 Object.defineProperty来实现数据响应式
