let data = [
    {date:"2010",month:"5",day:"15"},
    {date:"2010",month:"5",day:"15"},
    {date:"2009",month:"5",day:"15"},
    {date:"2009",month:"5",day:"15"},
    {date:"2008",month:"5",day:"15"},
    {date:"2008",month:"5",day:"15"},
    {date:"2007",month:"5",day:"15"},
    {date:"2007",month:"5",day:"15"},
    {date:"2007",month:"5",day:"15"}
]
let obj = {}
data.forEach((item,index)=>{
    obj[item.date] = {}
})
let arr = []
for (const iterator in obj) {
    data.forEach((item)=>{
       if(iterator === item.date){
           if(!obj[iterator].children){
            obj[iterator].children = []
            obj[iterator].children.push(item)
           } else {
               obj[iterator].children.push(item)
           }
       } 
    })
    // forEach循环完毕 相当于找到了所有符合当前条件的所有数据
    arr.push({data:iterator,
        children:obj[iterator].children})
}
// let arr = []
// for (const iterator in obj) {
//     arr.push(
//         {data:iterator,
//         children:obj[iterator].children}
//     )
// }
console.log(arr)
// let arr = [...obj]
// console.log(arr)
// transfer [
//     {
//         data:"2010",
//         children:[
//             {month:"5"}
//         ]
//     }
// ]






























