// 将下列对象按照 name age height进行排序 有就按照该顺序排序 不存在的放在最后面
let sortArr = ["name","age","height"]
let list = [
    {name:"age"},
    {name:"asde"},
    {name:"name"},
    {name:"adw"},
    {name:"height"},
    {name:"fhwwa"}
]
// 将a，b可以在函数中return出一个大小不一样的数字就能排序了
// 就好比你是name的时候 我return出一个1 
// 你是age 的时候我return出一个2
// 这样就能进行比较了
const getsort = (k) => {
    let index = sortArr.indexOf(k)
    if(index > -1){
        return index
    }
    return sortArr.length
}
list.sort((a,b)=>{
    return getsort(a.name) - getsort(b.name)
})

console.log(list)
