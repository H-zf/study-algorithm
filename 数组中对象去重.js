let arr = [
    {a:12,b:34,c:56},
    {a:123,b:345,c:567},
    {b:34,a:12,c:56},
    {a:12,b:34,c:56}
]

let newArr = []
arr.forEach((item)=>{
    if(!newArr.length){
        newArr.push(item)
    } else {
        newArr.findIndex((key)=>JSON.stringify(key) === JSON.stringify(item)) < 0 && newArr.push(item)
    }
})
console.log(newArr)

let obj = [1,2,3,4] , obj1 = [1,2];
let newArr1 = []
obj.forEach(item => {
    // obj1.forEach(key=> {
    //     if(item === key){
    //         newArr1.push(item)
    //     }
    // })
    !(obj1.findIndex(key => key===item) < 0) && newArr1.push(item)
})
console.log(newArr1)

let arr1 = [
    {a:1,b:2,c:3},
    {b:2,a:1,c:3},
    {a:11,b:22,c:33},
    {a:1,b:2,c:3},
]

function setSelect(arr){
    let newArr = []
    arr.forEach((item) => {
        newArr.length ? newArr.push(item) : newArr.findIndex(key => JSON.stringify(key) === JSON.stringify(item)) ? newArr.push(item) : ''
    })
}

function quchong (arr) {
    let newArr = []
    arr.forEach((item)=>{
        if(!arr.length || newArr.findIndex(key => JSON.stringify(key) === JSON.stringify(item)) < 0){
            newArr.push(item)
        }
    })
    return newArr
}

console.log("111",quchong(arr1))


// 深拷贝
let obj8 = {
    a:1,
    b:2,
    c:[
        {d:1,e:2},
        {f:1}
    ]
}

function deepCloneSecond(obj){
    let newObj = {}
    for (item in obj){
        // item是遍历出来的每一个属性
        if(typeof obj[item] === 'string'){
            newObj[item] = obj[item]
        } else if(Object.prototype.toString.call(obj[item]) === '[object Object]'){
            newObj[item] = deepCloneSecond(obj[item])
        } else if(obj[item] instanceof Array){
            newObj[item] = deepCloneSecond(obj[item])
        }
    }

    return newObj
}

function deepClone (obj) {
    let newObj = {}
        for(item in obj){
            console.log('item--------',item)
            if(typeof obj[item] === 'string'){
                newObj[item] = obj[item]
            } else if(Object.prototype.toString.call(obj[item]) === '[object Object]') {
                newObj[item] = deepClone(obj[item])
            } else if(typeof obj[item] === 'number'){
                newObj[item] = obj[item]
            } else if(obj[item] instanceof Array){
                newObj[item] = deepClone(obj[item])
            }
        }
    return newObj
}

console.log('deep',deepClone(obj8))
// 判断对象用 Object.prototype.toString.call() 数组用instanceof

let ccc = Object.assign({},obj8) // 浅拷贝 
console.log('ccc-----',ccc)

console.log(10 > 9 > 1 == true)

let objarr = [{name:123},{name:456}]

for (item in objarr){
    console.log('item------',item)
}

// 数组中遍历 打印出的item是索引

let mapArr = [1,2,3,4]
mapArr = mapArr.map(item => {
    if(item === 1){
        return 100
    } else {
        return item
    }
})
// map使用的时候没有return的时候 是返回undifine
console.log('mapArr',mapArr)




























