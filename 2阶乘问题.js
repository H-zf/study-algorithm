function fn(val){
    if(val === 1){
        // 等于1的时候直接return出去 不执行 并且fn(1)就是return的1
        return 1
    }
    return val * fn(val - 1)
}
let n = 20
let res = fn(n)
console.log(res)

// 函数颗粒化是尽可能减少函数参数入参 将一步一步处理的结果使用函数return 时 return出另一个函数的调用并且将数据传递给这个函数
let correntArr = ["age",'name',"height"]
let resArr = [
    {ccc:"name"},
    {ddd:"height"},
    {fff:"sadsad"},
    {eee:"dadwq"},
    {bbb:"age"}
]
let newArr = []
function search(k,arr){
    let obj = {}
    for (let i = 0;i < arr.length;i ++){
        Object.values(arr[i]).forEach((item)=>{
            if(k === item){
                obj = arr[i]
            }
        })
    }
    return obj
}
function setfn(k,v){
    let res = [...k,...v]
    let obj = {}
    return res.reduce((pre,next)=>{
        // 利用对象去重
        // 如果对象中存在某个属性 代表已经重复了 不错操作 如果对象中不存在某个属性代表没有 则push到pre中
        obj[next[Object.keys(next)[0]]] ? '' : obj[next[Object.keys(next)[0]]] = true && pre.push(next)
        return pre
    },[])
}
function sum(newArr,search,correntArr,resArr,setfn){
    correntArr.forEach((k)=>{
        newArr.push(search(k,resArr))
    })
    return setfn(newArr,resArr)
}
let result = sum(newArr,search,correntArr,resArr,setfn)
console.log(result)
// let newArr = []
// let correntArr = ["age",'name',"height"]
// let resArr = [
//     {ccc:"sadad",name:"sda",ddd:"dsad",height:"asdad",fff:"dddawq",name:"sdadw"},
//     {ccc:"w2w21",name:"2231",ddd:"2131",height:"21321",fff:"211",name:"sda2d221w"}
// ]
