// let list = [
//     {id:1,name:"hzf",parentId:0},
//     {id:2,name:"hzf",parentId:0},
//     {id:3,name:"hzf",parentId:1},
//     {id:4,name:"hzf",parentId:1},
//     {id:5,name:"hzf",parentId:3},
//     {id:6,name:"hzf",parentId:2},
//     {id:7,name:"hzf",parentId:3}
// ]

// 使用递归寻找对应的树节点
// 第一步 找到需要进行递归的数据
// 第二步 通过每个找到的数据继续查找他的子节点 直到子节点的id 没有对应的parentId与之对应
// function queryChildrenNode(item, arr){
//     let queryArr = arr.filter((k)=>{
//         return k.parentId === item.id
//     })

//     if(queryArr.legnth !== 0){
//         queryArr.forEach((k)=>{
//             // 第一次for循环没有children属性 第二次有了 所以需要判断一下  
//             item.children = item.children || []
//             item.children.push(k)
//             queryChildrenNode(k,arr)
//         })
//     }
// }
// function queryParent(arr,condition){
//     let ccc = arr.filter((item)=>{
//         return item.parentId === condition
//     })
//     ccc.forEach((k)=>{
//         queryChildrenNode(k,arr)
//     })
//     return ccc
// }

// let cccccccc = queryParent(list,0)

// console.log(cccccccc)

let arr = [1,2,3,54,87,5,87,9,47]
let len = arr.length
// for(let i = 0;i < len;i++){
//     for(let j = 0;j < len;j++){
//         if(arr[i] < arr[j]){
//             let temp = arr[j]
//             arr[j] = arr[i]
//             arr[i] = temp
//         }
//     }
// }

// 选择排序
for(let i = 0;i <len;i++){
    let minindex = i
    for(let j = 0;j <len;j++){
        if(arr[i]>arr[j]){
            minindex = j
        }
    }

}


// for (let i = 0;i < list.length;i ++){ // children
//     for (let j = 0;j < list.length;j ++){ // parent
//         if(list[i].parentId === list[j].id){
//             list[j].children = list[j].children || []
//             list[j].children.push(list[i])
//         }
//     }
// }
// console.log(list)

// 使用递归实现
// function digui(arr,k){
//     let childrenNode = arr.filter((item)=>item.parentId === k.id)
//     if(childrenNode.length !== 0){
//         childrenNode.forEach(element => {
//             k.children = k.children || []
//             k.children.push(element)
//             digui(arr,element)
//         })
//     }
//     // 返回k是调用该函数之后将k值进行了改变 
//     return k
// }
// function findParent(arr){
//     let parentNode = arr.filter((item)=>item.parentId === 0)
//     for (let index = 0; index < parentNode.length; index++) {
//         const element = parentNode[index]
//         // 这里的element元素实则是被改变了
//         digui(arr,element)
//     }
//     return parentNode
// } 

// let newArr = findParent(list)
// console.log(newArr)



// for 循环中是采取的引用传递的方式，将id为3的添加到id为1中的时候 该对象中是继续添加了id为5的数据  所以是可以形成id为1中存在children 且children中又存在children 
// 0:
// children: Array(2)
// 0:
// children: Array(2)
// 0:
// id: 5
// name: "hzf"
// parentId: 3
// __proto__: Object
// 1:
// id: 7
// name: "hzf"
// parentId: 3
// __proto__: Object
// length: 2
// __proto__: Array(0)
// id: 3
// name: "hzf"
// parentId: 1


