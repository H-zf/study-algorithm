// 防抖
// 永远保留最后一次
function debounceLast(func,wait){
    // 使用闭包将定时器存起来 以此来判断是否存在定时器 存在就代表开启过定时器 则关闭
    let timerid = null
    return function(){
        // 可以通过...arg获取参数
        if(timerid) clearTimeout(timerid)
        timerid = setTimeout(()=>{
            func.call(null,arguments)
        },wait)
    }
}

function debounceLast2(func,wait,immediate){
    // 使用闭包将定时器存起来 以此来判断是否存在定时器 存在就代表开启过定时器 则关闭
    let timerid = null
    return function(){
        if(timerid) clearTimeout(timerid)
        if(immediate && !timerid){
            func.call(null,arguments)
        }
        timerid = setTimeout(()=>{
            func.call(null,arguments)
        },wait)
    }
}



function debounceLast3(func,wait,immediate){
    // 使用闭包将定时器存起来 以此来判断是否存在定时器 存在就代表开启过定时器 则关闭
    // 第一次会执行函数，之后是开启定时器来执行  是节流和防抖的结合
    // last是用来记录上次触发的时间 使用闭包来存储该值 vue中用data来保存值 并进行比较
    let timerid = null
    let last
    return function(){
        let now = +new Date()

        if(last && now < last + wait){
            if(timerid) clearTimeout(timerid)
            timerid = setTimeout(()=>{
                last = now
                func.call(null)
            },wait)
        } else {
            last = now
            func.call(null)
        }
    }
}




function debounce(func,wait,immediate){
    let timerId,startTime,lastTime
    let later = function (){
        lastTime = new Date().getTime() - startTime
        if(lastTime < wait){
            timerId = setTimeout(func,wait - lastTime)
        }else {
            timerId = null
            if(immediate){
                func.call(null)
            }
        }

    }
    return function () {
        let {func,wait,immediate} = arguments
        startTime = new Date().getTime()
        if(immediate && !timerId){
            func.call(null)
        }
        if(!timerId){
            timerId = setTimeout(later,wait)
        }
    }
}
let priconsole = () => {
    console.log("123")
}
debounce(priconsole,1500,true)