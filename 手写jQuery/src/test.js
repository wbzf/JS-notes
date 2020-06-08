window.jQuery = function(selectorOrArray){//selector
    const  elements = document.querySelectorAll(selectorOrArray)
    // let elements = document.querySelectorAll(selectorOrArray)
    // return elements // 不 return elements
    
    // api可以操作elements
    const api = {
        // 闭包 函数访问外部的变量 函数不死elements不死
        // addClass(className){
        //     console.log('cnm')
        //     return api
        // }
        
    }
    return api 
}