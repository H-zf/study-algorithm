// 二分法实则是将一组有序的数组，按照最快的方式找到自己想要找到的元素位置
let arr = [1,2,3,5,6,7,8,9]

// 二分法
// 将一组有序数列，按照最快的一种方式找到自己所需要的元素位置
function quiklyQuery(arr,k){
    let a = 0;
    let b = arr.length-1;
    let mid = Math.floor((a + b) / 2)
    while (arr[mid] !== k) {
        if(arr[mid] > k){
            b = mid - 1
        } else if(arr[mid] < k)  {
            a = mid + 1
        }

        mid = Math.floor((a + b) / 2)
    }
    return `${mid} ----  ${arr[mid]}`
}

let res = quiklyQuery(arr,8)
console.log(res)
// function erfen(arr,k){
//     let n = 0
//     let m = arr.length-1
//     let mid = Math.floor((m + n )/2)

//     while(k !== arr[mid]){
//         if(arr[mid] > k){
//             m = mid -1
//         } else if(arr[mid] < k) {
//             n = mid + 1
//         }
//         mid = Math.floor((m + n )/2)
//     }
//     return mid
// }

// let a = erfen(arr,8)
// console.log(a)