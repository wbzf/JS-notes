window.dom = {
    // create: function(){},
    create(string){//用于创建节点
        // return document.createElement(string)
        // const container = document.createElement('div')
        const container = document.createElement("template")
        container.innerHTML = string.trim(); //trim去空格
        // console.log("test")
        // console.dir(container)
        // return container.children[0]
        return container.content.firstChild
    },
    after(node,node2){ //将node2插入到node后面
        // insertBefore() 方法在您指定的已有子节点之前插入新的子节点
        // node.parentNode.insertBefore(node,node2) //将node插入node2前面
        node.parentNode.insertBefore(node2,node.nextSibling) //将node2插入到node下一个元素之前
    },
    before(node,node2){//将node2插入到node前面
        node.parentNode.insertBefore(node2,node)
    },
    append(parent, node){//用于新增儿子节点
        parent.appendChild(node)
    },
    wrap(node, parent){//用于新增爸爸节点
        dom.before(node,parent) //将parent节点插入到node节点之前
        dom.append(parent,node) //将node节点插入到parent节点里面
    },
    remove(node){
        node.parentNode.removeChild(node)
        return node //保留节点引用
    },
    empty(node){
        const childNodes = node.childNodes
        // const {childNodes} = node //解构赋值
        const array = []
        // for(let i = 0; i < childNodes.length; i++){
        //     console.log(childNodes.length) // length会变化
        //     dom.remove(childNodes[i])
        //     array.push(childNodes[i])
        // }
        let x = node.firstChild
        while(x){
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array //保留节点引用
    },
    attr(node, name, value){ //函数重载
        if(arguments.length === 3){
            node.setAttribute(name, value)
        }
        if(arguments.length === 2){
            return node.getAttribute(name)
        }
    },
    text(node, string){ //适配
        // node.innerText = string //ie
        // node.textContent = string //chrome
        if(arguments.length === 2){
            if('innerText' in node){
                node.innerText = string
            }else{
                node.textContent = string
            }   
        }
        if(arguments.length === 1){
            if('innerText' in node){
               return node.innerText
            }else{
               return node.textContent
            }   
        } 
    },
    html(node, string){
        if(arguments.length === 2){
            node.innerHTML = string
        }
        if(arguments.length === 1){
            return node.innerHTML
        }
    },
    style(node, name, value){
        if(arguments.length === 3){
            // dom.style(div, 'color', 'red')
            node.style[name] = value
        }
        if(arguments.length === 2){
            if(typeof name === 'string'){
                //dom.style(div,'color')
                return node.style[name]
            }
            if(name instanceof Object){
                // dom.style(test, {border: '1px solid red', color: 'blue'})
                for(let key in name){
                    // key: border/color
                    // node.style.border = 
                    // node.style.color = 
                    node.style[key] = name[key]
                }
            }
        }
    },
    class:{
        add(node, className){
            node.classList.add(className)
        },
        remove(node, className){
            node.classList.remove(className)
        },
        has(node, className){
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn){
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn){
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope){
        //如果有scope就用scope调用querySelectorAll
        //否则用document调用querySelectorAll
        return (scope || document).querySelectorAll(selector)
    },
    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter(n => n!==node)
    },
    next(node){
        let x = node.nextSibling
        while(x && x.nodeType === 3){
            x = x.nextSibling
        }
        return x
    },
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType === 3){
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn){
        for(let i = 0; i < nodeList.length; i++){
            fn.call(null, nodeList[i])
        }
    },
    index(node){
         const list = dom.children(node.parentNode)
         let i
         for(i = 0; i < list.length; i++){
             if(list[i] === node){
                break
             }
         }
         return i
    }
}


// dom.create = function(){
     
// }