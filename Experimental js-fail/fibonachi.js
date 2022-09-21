/*Example 1*/
// fibonachi =>  0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// index     =>  0, 1, 2, 3, 4, 5, 6,  7,  8,  9,

// function fibonacci(index) {
//     let one = 0 
//     let two = 1
//     let response = 0
//     if(index < 2)return index
//     for(let i = 2;i <= index;i++) {
//         response = (one + two);
//         one = two
//         two = response
//     }
//     return response
// }
// alert("here")
// alert(fibonacci(1000))

/*Example 2*/
// fibonachi =>  0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// index     =>  0, 1, 2, 3, 4, 5, 6,  7,  8,  9,
// function Fib(num) {
//     if(num < 2) return num;
//     return Fib(num - 1) + Fib(num - 2) 
// }
// alert("here")
// alert(Fib(43))

// function Fib(num) {
//     if(num < 2) return num;
//     return Fib(num - 1) + Fib(num - 2) 
// }
// alert("start")
// alert(Fib(43))
// const memoFib = memoize(function(n) {
//     if(n < 2) return n;
//     return memoFib(n - 1) + memoFib(n - 2) 
// })

// function memoize(fn) {
//     const cache = {};
//     return (n) => {
//         if(cache[n] === undefined) {
//             cache[n] = fn(n);
//         }
//         return cache[n];
//     }
// }

// console.log(memoFib(5))
// const foo = boo()
// function boo() {
//     const cache = {};
//     return (n) => {
//         if(cache[n] === undefined) {
//             // cache[n] = fn(n);
//         }
//         return cache[n];
//     }
// }

// console.log(foo)
// class Func {
//     constructor(y,t) {
//         this.x = y 
//         // return this
//     }
// }

// const f = new Func(8,9)
// console.log(f)
// console.log(f)

// let a = [2,3,4]
// let b = a

// a.push("kk")

// alert(b)
// alert(a)

// let a = {name:"joe"}
// let b = a
// b.name = "glora"
// alert(JSON.stringify(a))

// function foo(arr) {
//     arr.push(55)
// }

// let a = [1,2,3]
// foo(a)

// alert(a)
// debugger
// function foo(n) {
//     if(n < 2) {
//         return n
//     }

//     return foo(n - 1) + foo(n - 2)
// }
// console.log(foo(5))


// const memoFib = memoize(function(n) {
//     if(n < 2) return n;
//     return memoFib(n - 1) + memoFib(n - 2) 
// })

// function memoize(fn) {
//     const cache = {};
//     return (n) => {
//         if(cache[n] === undefined) {
//             cache[n] = fn(n);
//         }
//         return cache[n];
//     }
// }

// console.log(memoFib(6))



