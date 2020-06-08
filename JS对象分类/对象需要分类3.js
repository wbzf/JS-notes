// 正方形搞定了 再写个圆
// function Circle(radius){
//     this.radius = radius
// }
// Circle.prototype.getArea = function(){
//     return Math.pow(this.radius,2) * Math.PI
// }
// Circle.prototype.getLength = function(){
//     return this.radius * 2 * Math.PI
// }
// let circle = new Circle(5)
// circle.radius
// circle.getArea()
// circle.getLength()

// 圆搞定了 再写个长方形
// function Rect(width, height){
//     this.width = width
//     this.height = height
// }
// Rect.prototype.getArea = function(){
//     return this.width * this.height
// }
// Rect.prototype.getLength = function(){
//     return (this.width + this.height) * 2
// }
// let react = new Rect(4,5)
// rect.width
// rect.height
// rect.getArea()
// rect.getLength()

// 对象需要分类
// 理由一
// 有很多对象拥有一样的属性和行为
// 需要把他们分为同一类
// 如square1和square2
// 这样创建类型对象的时候就很方便

// 理由二
// 但是还有很多对象拥有其他的属性和行为
// 所以就需要不同的分类
// 比如Square/Circle/Rect就是不同的分类
// Array/Function也是不同的分类
// 而Object创建出来的对象 是最没有特点的对象