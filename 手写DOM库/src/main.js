// console.log('hi')
// document.createElement('div')
// const div = dom.create('div')
const div = dom.create("   <div><span>药娘</span></div>")
document.body.appendChild(div)
// const div = dom.create("<tr><td>hi</td></tr>") //有bug div里不能放td 用template
// const span = dom.create('span')
// div.appendChild(span)
console.log(div)

// const div1 = dom.create("<div>药娘</div>")
// dom.after(test,div1)

// const div1 = dom.create("<div>伪娘</div>")
// dom.before(test,div1)

// const div1 = dom.create("<div>透药娘</div>")
// dom.append(xxx,div1)

// const div1 = dom.create('<div id = "parent"></div>')
// dom.wrap(test,div1)

// const node = dom.remove(e1)
// console.log(node)

// const nodes = dom.empty(empty)
// console.log(nodes)

// dom.attr(test,'title','我要透药娘')
// const title = dom.attr(test,'title')
// console.log(`title: ${title}`)

// dom.text(test,'我要透药娘')
// console.log(dom.text(test))

// dom.html(test,'<p>透药娘</p')
// console.log(dom.html(test))

// dom.style(test, {border: '1px solid red', color: 'blue'})
// dom.style(test, 'border', '1px solid black')
// console.log(dom.style(test, 'border'))

// dom.class.add(test, 'red')
// dom.class.add(test, 'blue')
// dom.class.remove(test, 'blue')
// console.log(dom.class.has(test, 'blue'))

// const fn = ()=>{
//     console.log('我要透药娘')
// }
// dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)

// const testdiv = dom.find('#test')[0]
// console.log(testdiv)
// const testdiv2 = dom.find('.red',testdiv)[0]
// console.log(testdiv2)

// console.log(dom.parent(test))

// console.log(dom.children(empty))

// console.log(dom.siblings(e1))

// console.log(dom.next(e1))

// console.log(dom.previous(e2))

// dom.each(dom.children(empty),n => dom.style(n, 'color', 'red'))

// console.log(dom.index(e2))
