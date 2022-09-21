// Model 1

// function firstRepeate(str) {
//     for(let i = 0;i < str.length;i++) {
//         if(str.indexof(str[i]) === str.lastIndexOf(str[i])) {
//             return str[i]
//         }
//         console.log();
//     }
// }
// firstRepeate("amazon")



// Model 2

// function firstRepeate(str) {
//     debugger
//     const arr = str.split("");
//     const obj = arr.reduce(function(aggr,val) {
//         if(aggr[val] === undefined) {
//             aggr[val] = 1
//         } else {
//             aggr[val]++;
//         }
//         return aggr
//     }, {})

//     const keys = Object.keys(obj)

//     for(let i = 0;i < keys.length;i++) {
//         const index = keys[i]
//         if(obj[index] === 1) {
//             return index
//         }
//     }

//     return keys[index]
// }
// console.log(firstRepeate("gggtttyyyl"));


// Model 3

// function firstRepeate(str) {
//     debugger
//     const arr = str.split("");
//     const obj = arr.reduce(function(aggr,val) {
//         if(aggr[val] === undefined) {
//             aggr[val] = 1
//         } else {
//             aggr[val]++;
//         }
//         return aggr
//     }, {})

//     const keys = Object.keys(obj)
//     const values = Object.values(obj)
//     const index = values.indexOf(1)

//     return keys[index]
// }
// console.log(firstRepeate("gggtttyyyl"));