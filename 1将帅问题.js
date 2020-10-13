// 问题分析
// 首先帅和将的位置都是123456789
// 当帅是147的时候将不能是147
// 所以当j-i的时候都是相差3 所以我们可以取绝对值之后再模3 看是否等于 等于0则代表 将和帅在一条直线上则不可取

// 就是要分析i与j之间的映射，联系是什么 怎样满足条件 什么时候不满足条件 
function shuai(arr,fn){
    if(!Array.isArray(arr)) return 'arr不是一个数组'
    if(typeof fn !== 'function') return 'fn不是一个函数'
    for (let i = 1;i < 10;i++){
        for(let j = 1;j < 10;j++){
            if(condition(i,j)){
                let a = fn(i,j)
                arr.push(a)
            }
        }
    }
    return arr
}
function merge(k,v){
    let newArr = []
    newArr.push(`${k},${v}`)
    return newArr
}
function condition(k,v){
    return (Math.abs(k - v) % 3 !== 0)
}
const newArr = shuai([],merge)
console.log(newArr)


let sum = 0
function reduce(arr,fn,sum){
    arr = [2,2,2,23,6,5,9]
    let index = -1
    let length = arr.length
    while (++index < length){
        sum += fn(arr[index])
    }
    return sum
}
let arr = [1,2,3,4,5,6,7,8,9]

function fn(val){
    return val
}
let sumShu = reduce(arr,fn,sum)
console.log(sumShu)
console.log(arr)