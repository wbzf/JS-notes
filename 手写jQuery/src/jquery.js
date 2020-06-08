// window.jQuery = function(){
//     console.log('我要透药娘')
// }

window.jQuery = function(selectorOrArray){//selector
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)
    }
    if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }
    // const  elements = document.querySelectorAll(selectorOrArray)
    // let elements = document.querySelectorAll(selectorOrArray)
    // return elements // 不 return elements
    
    //api可以操作elements
    // const api = {
    //     // 闭包 函数访问外部的变量 函数不死elements不死
    //     addClass(className){
    //         for(let i = 0; i < elements.length; i++){
    //             elements[i].classList.add(className)
    //         }
    //         // return undefined
    //         // return api
    //         return this
    //     }
    // }
    // return api 

    return {
        addClass(className){
            for(let i = 0; i < elements.length; i++){
                elements[i].classList.add(className)
            }
            return this
        },
        find(selector){
             let array = []
             for(let i = 0; i < elements.length; i++){
                 const e = Array.from(elements[i].querySelectorAll(selector))
                 array = array.concat(e)
             }
            //  return array //链式操作没有了
            //  return this // 不能return this 操作的不是elements了

            //改elements 有bug
            // elements = array
            // return this

            // 让jQuery接受一个数组 返回一个新Api
            // const newApi = jQuery(array)
            // return newApi 
            // return jQuery(array)

            array.oldApi = this // this是 旧api
            return jQuery(array)
        },
        oldApi: selectorOrArray.oldApi,
        end(){
            return this.oldApi // this是 新Api
        },
        each(fn){
            for(let i = 0; i < elements.length; i++){
                fn.call(null, elements[i], i)
            }
            return this
        },
        parent(){//获取每个元素的爸爸
            const array = []
            this.each(node => {
                if(array.indexOf(node.parentNode) === -1){
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children(){
            const array = []
            this.each(node => {
                array.push(...node.children) //展开操作符 将node.children数组拆开
            })
            return jQuery(array)
        },
        prints(){
            console.log(elements)
        }
    }
}

window.$ = window.jQuery
