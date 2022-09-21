// Exersize 1 

/** 1 */
// let a = 2
// let b = 3
// let c = 4
// let d = a + b * (c + (2 / a) -5)
// console.log(d)/**2 */


/** 2 */
// let a = 2
// let b = "3"
// let z = "a" + b
// alert(z)/**a3 */


/** 3  */
// let a = 4
// let b = ((+"4") + 4) +"55" + (2 + a) + (" z " + a)
// alert(b + 1)


/**4 */
// let z = 2
// if((z + 2) === 3 ) {
//     alert(1)
// } else if((z + 1) === 4) {
//     alert(2)
// } else {
//     alert(3)
// }

// if(z < 3 ) {
//     if(z > 1) {
//         if( z >= 2) {
//             alert(4)
//         }
//     } else {
//         alert(6)
//     }
// } else {
//     alert(7)
// } /** => 3; => 4; */



// exersize 2 tpeq 0 -> 10
// let i = 0
// while(i <= 10) {
//     console.log(i) /** 0 -> 10 */
//     i++
// }  


// exersize 3 tpeq 10 ->  1 ... 1 -> 10
// let i = 10
// let b = 1
// while(i > 0 && i < 11) {
//     console.log(i) 
//     if(i === 1) {
//         console.log(i) 
//         b = -1
//         i -= b
//         continue
//     } 
//     i -= b
// }  


// exersize 4 tpeq 1 3 5 7 9
// let i = 1
// while(i < 10 ) {
//     console.log(i)
//     i += 2
// }


// exersize 5 tpeq 1 ից 9 թվերի գւմարը === 45
// let i = 0
// let sum = 0
// while(i < 10) {
//     sum += i
//     i ++
// }
// console.log(sum);


// exersize 6 tpeq 1 ից 9 թվերի բազմապատկումը=== 45
// let i = 10
// let sum = 1
// while(i <= 15) {
//     sum *= i
//     i++
// }
// console.log(sum);


// exersize 7ինչ կլինի արժեքը -> 18
// let a = [ 24,22, [7, [84,99]], [3,1,6], [ 0,8, [4,5] ]  ]
// alert(a[3][1] + a[4][2][1] * a[3][0] + a[2].length)


// exersize 8 ["Hakob", "Poghos", "Petros", "Aramis", "Nika"] => Հակառակ ՀաջորդականՈւթյուն

// let a = ["Hakob", "Poghos", "Petros", "Aramis", "Nika"]
// let i = 0
// let opposite = []
// while(a[i]) {
//     opposite[i++] = a[ a.length - i]
// }
// alert(a = opposite)


// exersize 8 ["Hakob", "Poghos", "Petros", "Aramis", "Nika"] => Հակառակ ՀաջորդականՈւթյուն
// let i = 0
// let i2 = a.length - 1  
// let opposite = []
// while(i <= i2) {
//     opposite[i] = a[i2]
//     opposite[i2] = a[i]
//     i2--
//     i++
// }
// alert(opposite)


// exersize 9
// let x = [5, 10, 33];
// let i = 0;
// while(i < x.length) {
//     x[i] *= 2
//     i++
// }
// x = x + 2


// exersize 10 ինչ կտպի Ալերտը
// let y = 66;
// let x = 5;
// let z = 9;
// let a = y + x;
// let o = [y * 2];
// o[x] = 4;

// alert(((!!!(z === 1 + 3 * 2 + ( 5 % 2 ))) && !(o[0] === 662)) || (x * y < 100 && o.length >=  6));


// exersize 11 ստեղծել ֆունկցիա որը վերցնում է Array եվ տպում 1 նրա միջի Արժեքները 
// function Sum(arr) {
//     let sum = 0
//     for(let i = 0;i < arr.length;i++) {
//         sum = sum + arr[i] 
//     }
//     return sum
// }
// console.log(Sum([1,2,3,4,5]))


// exersize 11 Recursion ստեղծել ֆունկցիա որը վերցնում է Array եվ տպում 1 նրա միջի Արժեքները 
// function Sum(arr,i) {
//     if( i <= 0 ) {
//         return 0
//     }

//     return Sum(arr,i - 1) + arr[i - 1]
// }
// alert(Sum([1,2,3,4,5],[1,2,3,4,5].length))


// exersize 12 ինչ կտպեն Alert—ները
// let a = 9
// if(a > 0) {
//     let b = 2

//     if(b > 0) {
//         let a = 3
//         alert(a + b)// 5
//     }

//     b = 4
//     alert(b + a)// 13

//     let i = 0
//     while(i < 2) {
//         alert(i + b + a)// 13 
//         i = i + 2
//     }
//     alert(i)// 2
// } 
// alert(a)//9


// exersize 13 ինչ կտպի
// let f = function(num) {
//     return num * 2
// };
// let x = [
//     {
//         y:[f(1),f(10)]
//     },
//     {
//         z:{
//             a:{ 
//                 b:[f(7),f(9)]
//             },
//             c:{
//                 z:[f(20),f(12),f(21)]
//             }
//         }
//     },
//     20,
//     [
//         [7,5,2]
//     ],
//     f
// ];
// alert(x[0].y[1] + x[3][0][2] + x[2] + x[4](5));// 52


// exersize 14 ինչ կտպի
// let a = [3, 7, 2, 4]
// let z = 0;

// let f = function(a) {
//     return a + 2;
// };

// a.forEach(function(val) {
//     z = z + f(val) + 2 
// }); // z = 32


// let f2 = function(d) {
//     return f(d) + f(d)
// };

// let f3 = function(d) {
//     return f2(d) + 1
// };

// alert( f( f3( f2(z) ) ))// 143


// exersize 15 ինչ կտպի
// let y = 10
// let div = function(t, s) {
//     return t / s
// };

// let dip = function(y, zoo) {
//     return zoo(y) * zoo(y)
// };

// let yup = function(d) {
//     return div(y, 2)
// };

// let d = dip(4, yup)
// alert(d) // 25



// exersize 16 // Ստեղծել Reduce function  Ինքնուրույն

// const originalReducer = [5,9,10].reduce(function(aggr,val,i) {
//     console.log(i);
//     return aggr += val
// });
// alert(originalReducer);


// function Reduce(arr,callback,aggr) {
//     arr.forEach(function(val,i) {
//         (aggr === undefined && i === 0) ? aggr = val : aggr = callback(aggr,val,i)
//     })
//     return aggr
// }
// const byHandleReducer = Reduce([5,9,10],function(aggr,val,i) {
//     return Math.max(aggr,val)
// });
// alert(byHandleReducer);


// exersize 17 գրել Transform Function ,որը կստանա օբյեկտներից կազմվաց զանգվաց և կվերադարձնի փոփողված տարբերակով
// function Transform(array) {
//     return array.filter((val,i) => val.gender === "male")
//     .map((value) => {
//         const key = Object.keys(value);
//         return key.map((val) => val === "fn" ? "firstname" : val === "ln" ? "LastName" : val)
//         .reduce((aggr,val,i) => {
//             aggr[val] = value[key[i]]
//             return aggr
//         },{});
//     });
// }

// const newTransfprm = Transform([
//     {fn:"joe",ln:"Mikayelyan",ph:"093535353",gender:"male"},
//     {fn:"Mishel",ln:"Araqelyan",ph:"093535353",gender:"male"},
//     {fn:"Arnold",ln:"Gexamyan",ph:"093535353",gender:"female"},
//     {fn:"Franklin",ln:"Karapetyan",ph:"093535353",gender:"female"}
// ])
// alert(JSON.stringify(newTransfprm));


// exersize 18 գրել getAvgByColor ֆունկցիա,որը կստանա օբյեկտներից կազմված զանգված;
// ֆունկցիան պետք է վերադարձնի միջին տարիքը այն մարդկանց ում մազերի գույնը համապատասխանում է 
// արգումենտով փողանցված գույնին ;

// function getAvgByColor(array,hairColor) {
//     return array.filter((val,i) => val.hairColor === hairColor)
//     .map((val) => val.age)
//     .reduce((aggr,val,i,array) => {
//         aggr += val
//         if(array.length - 1 === i)
//         return aggr / array.length
//         return aggr
//     },0)
// }

// const semiAge = getAvgByColor([
//     {name:"Joe",age:13,hairColor:"red"},
//     {name:"Beynaminoe",age:25,hairColor:"red"},
//     {name:"Beynaminoe",age:25,hairColor:"red"},
//     {name:"Chriss",age:10,hairColor:"blue"},
//     {name:"Roland",age:18,hairColor:"green"}
// ],"red")
// alert(JSON.stringify(semiAge));


// Exersize 19 ընտրել ամենաշատ քանակով ընկերներ ունեցող objecti name; որը համապատասղանում ե տվյալ անվանը
// function getPersonFirend(people,frienfName) {
//     return people.map((val) => {
//         return {...val,friends:val.friends.filter((val) => val.name === frienfName)}
//     }) 
//     .reduce((aggr,val,i,array) => {
//         aggr = Math.max(aggr,val.friends.length)
//         if(array.length - 1 === i ) {
//             return array.filter((val) => val.friends.length === aggr)
//         }
//         return aggr
//     },0)
//     .map((val) => {
//         return val.name
//     }).join(",")
// }

// const response = getPersonFirend([
//     {
//         name:"Joe",
//         friends:[
//             {name:"ars",age:15},
//             {name:"ars",age:14},
//             {name:"susan",age:12},
//             {name:"susan",age:15},
//             {name:"susan",age:14},
//             {name:"susan",age:12},
//             {name:"susan",age:15},
//             {name:"susan",age:18},
//         ]
//     },
//     {
//         name:"Niko",
//         friends:[
//             {name:"ars",age:15},
//             {name:"ars",age:14},
//             {name:"susan",age:12},
//             {name:"susan",age:15},
//             {name:"susan",age:14},
//             {name:"susan",age:12},
//             {name:"susan",age:15},
//             {name:"susan",age:18},
//             {name:"susan",age:12}
//         ]
//     },
//     {
//         name:"Fred",
//         friends:[
//             {name:"susan",age:12},
//             {name:"susan",age:15},
//             {name:"susan",age:18},
//             {name:"susan",age:12},
//             {name:"susan",age:14},
//             {name:"susan",age:12},
//         ]
//     }
// ],"susan");
// alert(JSON.stringify(response))



// exersize 20 ստեղծել ֆունկցիա որը կստանա զանգված եվ մեկ հատ տիվ -> Index; 
// որը կվերադարձնի մեկ այլ զանգված որը կպարունակի բոլոր թվերը բացի տրված index ից;

// function removeAtIndex(array,index) {
//     return array.filter((val,i) => i !== index)
// }

// alert(removeAtIndex([5,10,15,20],2)); // վերադարձնում է [5,10,20];

// exersize 21 բինարյան թվերից ստանալ սովորական տվեր

// function BineryToNumber(binary) {
//     return binary.split("").reverse().map((toNumber) => +toNumber)
//     .reduce((aggr,val,index) => {
//         if(val) aggr += Math.pow(2,index);
//         return aggr
//     },0)
// }
// alert(BineryToNumber("100101"))
// console.log(parseInt(100101,2));



// exersize 22 վերադարձնել այն օբջեկտը որը բռնում է տրված տեքստին
// function Find(array,searchText) {
//     return array.filter((value,index,arr) => {
//         const keys = Object.keys(value)
//         const good = keys.map((val) => {
//             if(value[val] === searchText )return index;
//         })
//         .filter((val) => val !== undefined).join(" ")

//         return good === `${index}`
//     })
// }

// function Find(array,searchText) {
//     return array.filter((value,index,arr) => {
//         const values = Object.values(value);
//         if(values.join(",").toLocaleLowerCase().search(searchText) !== -1) {
//             return true
//         }
//         return false
//     })
// }

// const originFind = Find([
//     {name:"Joe",age:13,hairColor:"red"},
//     {name:"Beynaminoe",age:25,hairColor:"red"},
//     {name:"Beynaminoe",age:25,hairColor:"red"},
//     {name:"Chriss",age:10,hairColor:"blue"},
//     {name:"Roland",age:18,hairColor:"green"}
// ],"chriss")
// console.log(JSON.stringify(originFind));



// exersize 23 փոխեք Արժեքները տեղերը,  {name:"armen"} {armen:"name"}
// function magic(obj) {
//     return Object.keys(obj).reduce((aggr,val,i) => {
//         aggr[obj[val]] = val
//         return aggr
//     },{})
// }

// alert(JSON.stringify(magic({
//     name:"armen",
//     lastName:"gevorgyan"
// })))



// exersize 24  Ստանալ Diamond
// function Diamonds(height) {
//     let str = ""
//     let numberStars = 1
//     let numberSpace = height/2 -1
//     let indicatorStarts = 2
//     let indicatorSpace = 1
//     for(let i = 0;i < height;i++) {
//         str += bottomSpace(numberSpace) + stars(numberStars) + bottomSpace(numberSpace) + "\n"
//         if(numberStars === height){indicatorStarts = -2;indicatorSpace = -1}
//         numberStars += indicatorStarts
//         numberSpace -= indicatorSpace
//     }
//     return str
// }
// function stars(num) {
//     let str = ""
//     for(let i = 0;i < num;i++) {
//         str += "*"
//     }   
//     return  str
// }
// function bottomSpace(num) {
//     let str = ""
//     for(let i = 0;i < num;i++) {
//         str += " "
//     }   
//     return  str
// }
// alert(Diamonds(5))
// // --*--
// // -***-
// // *****
// // -***-
// // --*--



// exersize 25  ստեղծել Math.Pow(5,3) Ինքնուրույն
// function MathPow(indicator,degree) {
//     let response = 1
//     for(let i = 0;i < degree;i++) {
//         response *= indicator
//     }
//     return response
// }
// alert(MathPow(2,3)) alert(2**4)



// exersize 26  ստեղծել Reverse ֆունկցիա որը կստանա թիվ եվ կվերադարձնի հակառակ ուղությամբ
// function Reverse(num) {
//     const numStr = "" + num
//     const reverstNumStr = numStr
//     .split("")
//     .reverse()
//     .join("")
//     return +reverstNumStr
// }
// alert(Reverse(5829))



// exersize 27  ստեղծել ֆունկցիա որը կստանա տեքստ եվ կվերադարձնի դրա յուրաքանչյուր նիշերի քանակը
// function charactersFrequence(text) {
//     const splitidText = text.split("")
//     let memory = {}
//     for(let i = 0;i < splitidText.length;i++) {
//         memory[splitidText[i]] === undefined ?  memory[splitidText[i]] = 1 : memory[splitidText[i]]++
//     }
//     return memory
// }
// console.log(charactersFrequence("Heeeello-World"));


// function charactersFrequence(text) {
//     const splitidText = text.split("")
//     return splitidText.reduce((aggr,val,index,array) => {
//         aggr[val] === undefined ? aggr[val] = 1 : aggr[val]++
//         return aggr
//     },{})
// }
// console.log(charactersFrequence("Heeeello-World"));


// function MathMax(num) {
//     return Math.max(...num)
// }
// alert(MathMax([5,28,99,23,100,32]))


// function MathMax(num) {
//     return num.reduce((aggr,val) => {
//          return Math.max(aggr,val)
//     })
// }
// alert(MathMax([5,28,99,23,100,32]))


// function MathMax(num) {
//     return num.reduce((aggr,val) => {
//          if(aggr > val){ return aggr } else { return val }
//     })
// }
// alert(MathMax([5,28,99,23,100,32]))

// function MatMin(num) {
//     return num.reduce((aggr,val) => {
//          return Math.min(aggr,val)
//     })
// }
// alert(MatMin([5,28,99,23,100,32]))

// exersize 29  ստեղծել ֆունկցիա որը կստանա տեքստ եվ կվերադարձնի դրա նիշերի քանակը


// function forEach(arr,caalback) {
//     for(let i = 0;i < arr.length;i++) {
//     foo(arr[i],i,arr)
// }
// forEach([3,5,8],(val,i,arr) => {
//     console.log(val,i)
// })
// function forEach(arr,calback) {
//     function Loop(i) {
//         if(i >= arr.length) {
//             return undefined;
//         } 
//         calback(arr[i],i,arr)
//         Loop( i + 1)
//     }
//     Loop(0)
// }

// forEach([3,5,8],(val,i) => {
//     console.log(val,i)
// })



// exersize 30  ստեղծել Recurion Math.Pow() ֆունկցիա 

// function RecursionMathPow(indicator,degree) {
//     if(degree < 1) { return 1 }
//     return indicator * RecursionMathPow(indicator,degree - 1) 
// }
// alert(RecursionMathPow(5,3))

// Math.pow(5,3) //5 * 5 * 5
// Math.pow(5,3) // 5 * Math.pow(5,2) => 5 * Math.pow(5,1)
/* pow(5,3) => 125
*       5 * pow(5,2) =>  25
*               5 * pow(5,1) => 5   
*                             return pow(5,1) =>  1 */ 


// exersize 31  ստեղծել RecurionSum ֆունկցիա,մի օգտագործեք Array.flat()

// let sum = 0
// function RecurionSum(array) {
//     for(let i = 0;i < array.length;i++) {
//         if(!Array.isArray(array[i])) {
//             sum += array[i]
//         } else {
//             RecurionSum(array[i])
//         }
//     }
//     return sum
// }
// console.log(RecurionSum([4,3,[8,2],[3,6,[9,12,33],6],7,8,9]))

// function RecurionSum(array) {
//     const sumEachValue = array.reduce((aggr,val,i) => {
//         if(Array.isArray(val)) {
//             return aggr + RecurionSum(array[i])
//         } 
//         return aggr + val
//     },0)
//     return sumEachValue
// }
// console.log(RecurionSum([4,3,[8,2],[3,6,[9,12,33],6],7,8,9]))


// exersize 32 && 33
/*  Ստեղծել «stringifyJSON» անունով ֆունկցիա, 
* որն ընդունում է օբյեկտ, որը կարող է ունենալ կամայական խորությամբ 
* ենթաօբյեկտներ և զանգվածներ, և վերադարձնում է JSON տեքստ։ 
* Ձեր ֆունկցիան պետք է վերադարձնի այն, ինչ վերադարձնում է\  JSON.stringify ֆունկցիան, 
* այց բնականաբար JSON.stringify֊ը Ձեր ֆունկցիայի ներսում օգտագործելու իրավունք չունեք :)
*/

// AllTypeinObject JSON.stringify([1,true,false,undefined,null,NaN ,() => {return "hi"},{ name :  "joe"},[123,256],{name:undefined,func:() => {return "hi"}  username  : "hopar"}]) -> 
//                               "[1,true,false,     null,null,null,               null,{"name" : "joe"},[123,256],{                                        "userName" : "hopar"}]"
// undefined        => let a = JSON.stringify(undefined) => undefined,  typeof a => "undefined"
// null             => let a = JSON.stringify(null) => "null", typeof a => "string" 
// NaN              => let a = JSON.stringify(NaN) => "null", typeof a => "string" 
// number           => let a = JSON.stringify(234) => "234", typeof a => "string" 
// boolian          => let a = JSON.stringify(true) => "true", typeof a => "string"
// string           => let a = JSON.stringify(" Armen -> String ") => "" Armen -> String "",typeof a => "string"
// Array            => let a = JSON.stringify({}) => "{}" ,typeof a = "string"
// Object           => let a = JSON.stringify([]) => "[]" ,typeof a = "string"

// alert(JSON.stringify(undefined) === stringyfyJson(undefined))
// alert(JSON.stringify(null) === stringyfyJson(null))
// alert(JSON.stringify(123) === stringyfyJson(123))
// alert(JSON.stringify(NaN) === stringyfyJson(NaN))
// alert(JSON.stringify("hello world") === stringyfyJson("hello world"))
// null             => let a = JSON.stringify(null) => "null", typeof a => "string" 
// NaN              => let a = JSON.stringify(NaN) => "null", typeof a => "string" 
// number           => let a = JSON.stringify(234) => "234", typeof a => "string" 
// boolian          => let a = JSON.stringify(true) => "true", typeof a => "string"
// string           => let a = JSON.stringify(" Armen -> String ") => "" Armen -> String "",typeof a => "string"



// function stringyfyJson(input) {
//     // undefined
//     if(input === undefined) {
//         return undefined
//     } 

//     // null
//     if(input === null) {
//         return "null"
//     }

//     // number
//     if(typeof input === "number") {
//         if(isNaN(input)) {
//             return "null"
//         }
//         return "" + input
//     }

//     // boolian
//     if(typeof input === "boolean") { 
//         return "" + input 
//     }

//     // string
//     if(typeof input === "string") { 
//         return "\""+input+"\""
//     }

//     if(Array.isArray(input)) {
//         return "[" + input.map((key) => {
//             if(typeof key === "function" || typeof key === "undefined") {
//                 return null
//             }
//             return key
//         }).map(stringyfyJson).join(",") + "]"
//     }

//     if(typeof input === "object" && typeof input !== "function" && Array.isArray(input) !== true) {
//         return "{" + Object.keys(input).filter((key) => {
//             return typeof input[key] !== "function" 
//         }).map((key) => {
//             if(input[key] === undefined) { return "" }
//             return "\"" + key + "\":" + stringyfyJson(input[key])
//         }) + "}"
//     }

//     if(typeof input === "function") { 
//         return undefined
//     }

// }
// console.log(stringyfyJson(sampleData) === JSON.stringify(sampleData))
// console.log(stringyfyJson([1,true,false,undefined,null,NaN ,() => {return "hi"}, { name :  "joe"},[123,256],{name:undefined,func:() => {return "hi"}}, {username   : "hopar"}]))
// console.log(JSON.stringify([1,true,false,undefined,null,NaN ,() => {return "hi"}, { name :  "joe"},[123,256],{name:undefined,func:() => {return "hi"}}, {username   : "hopar"}]))


// console.log(stringyfyJson([() => {},undefined]))
// console.log(JSON.stringify([() => {},undefined]))
// console.log(stringyfyJson([() => {},undefined]) === JSON.stringify([() => {},undefined]))



// exersize 34 լուծել վարժությունները  for => This 

// վարյույուն 1 այնպես անել վոր տպի 45
// const a = {
//     age:23,
//     foo:function(arr) {
//         // տարբերակ 1
//         arr.forEach((val) => {
//             alert(this.age + val)
//         })

//         // տարբերակ 2 
//         arr.forEach(function(val) {
//             alert(this.age + val)
//         }.bind(this))
        
//         // տարբերակ 3
//         arr.forEach(function(val) {
//             alert(this.age + val)
//         },this)
//     }
// }

// a.foo([22])

// վարյույուն 2 ինչ կտպի

// function zoo() {
//     alert(this.age)
// }

// const b = {
//     age:44
// }

// const a = {  
//     age:23,
//     foo: zoo.bind(b)
// }

// console.log(a.foo)
// /**a.foo()*/


// վարյույուն 3 փոխեք աjս կոդը այնպես որ այն Alert անի "mike"
// const a = {
//     name: "joe",
//     f:function() {
//         alert(this.name)
//     }
// }

// const b = {
//     name:"mike"
// }
// a.f()
// a.f.call(b)


// վարյույուն 4 այնպես արեք վոր կոդը վերադարձնի նոր օբյեկտ
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// const a = new Person("mike","Jhon");
// alert(JSON.stringify(a))


// վարժություն 5 Փոխեք կոդը որ this_ը լինի undefined;
// "use strict"
// function func() {
//     alert(this);
// }
// func()

// exersize 35 ?

/*Ստեղծեք canvas և դրա ներքևում button։  
* button էլեմենտը սեղմելիս canvas-ի վրա պետք է ավելանա կլոր օբյեկտ(գնդակ)` 
* կամայական տեղում, կամայական չափի,  որը կշարժվի կամայական ուղղությամբ։ Որպես հավելում, 
* կարող եք փորձել ստեղծել տարբեր գույների կլոր գնդակներ։ 
* Գնդակը պետք է canvas-ի եզրերին հասնելիս փոխի իր ուղղությունը, այնպես, 
* որ միշտ մնա canvas-ի ներսում։ Արդյունքում կունենանք canvas-ի ներսում շարժվող 
* գնդակների փունջ։ Կարող ենք ավելացնել 
* նոր գնդակներ սեղմելով canvas-ի ներքևի button-ը։   */

// exersize  36 this () => Arrow

// վարժություն 1
// const a = {
//     age:22,
//     name:"joe",
//     getName:function() {
//         return this.name
//     },
//     getAge: () => {
//         return this.name
//     }
// };

// alert(a.getName());
// alert(a.getAge());

// վարժություն 2
// const f = () => {
//     return this.name // window
// };
// const a = {
//     name : "Mike"
// };
// alert(f.call(a))


// վարժություն 3 

// function f() {
//     return () => {
//         return this.age;
//     };
// }
// const a = {
//     age:22
// };
// const z = f.call(a)
// alert(z())


// վարժություն 4
// function onlyՕddValue(arr) {
//     return arr.map((val) => val + 1).filter((val) => val % 2 === 0);
// }
// alert(o([5,40,29,44,33]))



// exersize  37  Clossure

// վարժություն 1
// let x = 7
// function a(y) {
//     return x + y
// }
// function b(z) {
//     let x = 99
//     return z(4)
// }
// alert( b(a) );


// վարժություն 2
// function a(x) {
//     return (y) => x + y;
// }
// let f = a(2)
// alert(f(4))


// վարժություն 3
// function a(x) {
//     return function(y)  {
//         return function(z)  {
//             return x + y + z
//         };
//     };
// }
// // let o = a
// let oo = a(2)
// let ooo = a(2)(4)
// let oooo = a(2)(4)(9)


// վարժություն 4

// function Cat() {
//     let numLives = 7
//     let name = "Jack"

//     this.age = 5
//     this.getAge = () => {
//         return this.age
//     }
//     this.getName = () => {
//         return name
//     }

//     this.catDies = () => {
//         numLives--
//     }

//     this.isDead = () => {
//         return numLives <= 0
//     }
// }

// let a = new Cat()
// a.catDies()
// a.catDies()
// a.catDies()
// a.catDies()
// alert(a.isDead())
// a.catDies()
// a.catDies()
// a.catDies()
// alert(a.isDead())
// alert(a.getName())
// a.age = 99
// alert(a.getAge())



// exersize  38 && 39  Promise  ինչ կտպի էկրանին
// վարժություն 1
// function func1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(2), 1000);
//     });
// }
// function func2(val) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(val + 3), 1000);
//     });
// }
// function func3(val) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(val + 4), 1000);
//     });
// }
// func1()
// .then((result) => func2(result))
// .catch((error) => 5)
// .then((result) => {
//     alert(result); // 5
//     throw new Error("oops");
// })
// .then((result) => func3(result))
// .catch((error) => func3(2)) 
// .then((result) => func2(result))
// .then((result) => alert(result)); // 9


// // վարժություն 2
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// job(true)
// .then(function(data) {
//     console.log(data); // success
//     return job(true); 
// }).then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }
//     return job(true);
// }).then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.log(error); // Defeat
//     return job(false);
// }).then(function(data) {
//     console.log(data);
//     return job(true);
// }).catch(function(error) {
//     console.log(error); // error
//     return 'Error caught';
// }).then(function(data) {
//     console.log(data); // Error caught
//     return new Error('test');
// }).then(function(data) {
//     console.log('Success:', data.message); // test
// }).catch(function(data) {
//     console.log('Error:', data.message); 
// });


// exersize  41 Promise   սարքել useReducer hook

// function useReducer(reducer,initialState) {
//     const [state,setState] = useState(initialState)

//     return [state,(actio,) => {
//         const newState = reducer(state,action);
//         setState(newState);
//     }]
// }
// const [todos,dispatch] = useReducer(reducer,state)

// exersize  42 Sum Of Two - Google-ի Հարցազրույցի հարց
/*
Ունենալով երկու ամբողջ թվերից բաղկացած a, b զանգավծներ և v թիվը ,
գտեք՝ արդյո՞ք գոյություն ունի այնպիսի թվերի զույգ,
որտեղ առաջին թիվը վերցված է a զանգվածից,
երկրորդ թիվը վերցված է b զանգվածից և այդ թվերի գումարը հավասար է v-ի:
Վերադարձրեք true,
եթե այդպիսի զույգ գոյություն ունի և false, եթե այդպիսի զույգ գոյություն չունի:
*/

// function sumPairExists(a,b,v) {
//     for(let i = 0;i < a.length;i++) {
//         const target = v - a[i]
//         for(let i2 = 0;i2 < b.length;i2++) {
//             if(b[i2] === target) {
//                 return b[i2] +  " + " + a[i] + " = " + v
//             }
//         }
//     }
//     return false
// }
// alert(sumPairExists([4,3,5,60,70,9,15],[67,12,20,2,1,0,17],22))
// function sumPairExists(a,b,v) {
//     const Catch = {}
//     for(let i = 0;i < a.length;i++) {
//         const target = v - a[i]
//         if (Catch[i] === undefined) {
//             Catch[i] = target
//         } 
//     }

//     for(let i2 = 0;i2 < b.length;i2++) {
//         if (Catch[b[i2]] !== undefined) {
//             // Catch[i] = target
//             return Catch[b[i2]]
//         } 
//     }

//     return false
// }

// alert(sumPairExists([4,3,5,60,70,9,15],[67,12,20,2,1,0,17],22))


// function sumPairExists(a,b,v) {
//     const Catch = {}
//     for(let i = 0;i < a.length;i++) {
//         const target = v - a[i]
//         if (Catch[i] === undefined) {
//             Catch[i] = target
//         } 
//     }

//     for(let i2 = 0;i2 < b.length;i2++) {
//         if (Catch[b[i2]] !== undefined) {
//             // Catch[i] = target
//             return Catch[b[i2]]
//         } 
//     }

//     return false
// }

// alert(sumPairExists([4,3,5,60,70,9,15],[67,12,20,2,1,0,17],22))


// Առաջին չկրկնվող տառը - Amazon-ի Հարցազրույցի հարց
/*
    Գրե՛ք ֆունկցիա, որը ստանալով string, վերադարձնում է առաջին չկրկնվող տառը:
*/


// function firstNoneRepeateCharacter(str) {
//     const strArray = str.split("")
//     const objArray = strArray.reduce((aggr,val,i) => {
//         if(aggr[val] === undefined) {
//             aggr[val] = 1
//         } else {
//             aggr[val]++
//         }
//         return aggr
//     },{})
//     const keys = Object.keys(objArray)
//     for(let i = 0; i < keys.length;i++) {
//         if(objArray[keys[i]] === 1) {
//             return keys[i]
//         }
//     }
//     return false
// }
// function firstNoneRepeateCharacter(str) {
//     for(let i = 0; i < str.length;i++) {
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//             return str[i]
//         }
//     }
//     return false
// }
// console.log(firstNoneRepeateCharacter("bcbbeeiiffcaa"))





/* JavaScript Type Conversion Comparison */
// number compare to text
// console.log(`0 === "a" -> `,"a" === 0);
// console.log(`0 ==  "a" -> `,"a" ==  0);
// console.log(`0  >  "a" -> `,"a" >   0); 
// console.log(`0  <  "a" -> `,"a" <   0);

// // number compare empty string
// console.log(`-1 <  "" ->`,-1 <  "");
// console.log(`0 === "" ->`,0 === "");
// console.log(`0 ==  "" ->`,0 ==  "");
// console.log(`0  >  "" ->`,0 >   "");
// console.log(`0  <  "" ->`,0 <   "");

// // number compare with NaN 
// console.log("0 === NaN ->",0 === NaN);
// console.log("0 ==  NaN ->",0 ==  NaN);
// console.log("0 <   NaN ->",0 <   NaN);
// console.log("0 >   NaN ->",0 >   NaN);

// // NaN
// console.log("NaN === NaN ->",NaN === NaN);
// console.log("NaN ==  NaN ->",NaN ==  NaN);
// console.log("NaN <   NaN ->",NaN <   NaN);
// console.log("NaN >   NaN ->",NaN >   NaN);

// Null
// console.log(`5 + null -> `, 5 + null);
// console.log(`5 - null -> `, 5 - null);


// Like the == operator, the greater than and isNaN() operator is not strict,
// and therefore will allow you to mix strings and numbers.
// example below
// console.log("71 >  80  ->",71 > 80);
// console.log("71 > '30' ->",71 > "30");
// console.log("71 <  80  ->",71 < 80);
// console.log("71 < '30' ->",71 < "30");
// console.log("`71` < '30' ->", "71" < "30");
// console.log("`71` > '30' ->", "71" > "30");
// console.log("`15` < '16' ->","15" < "16");
// console.log("`15` > '12' ->","15" > "12");
// console.log(`isNaN("1") -> ${isNaN("1")}`);
// console.log(`isNaN("") -> ${isNaN("")}`);





// == operator not entertain type operands, not strict
// === operator entertain type operands, strict
// example below

// console.log("0 == false ->",`${0 == false} == -> not strict`);
// console.log("0 === false ->",`${0 === false} === -> strict`);
// console.log("1 == true ->",`${1 == true} == -> not strict`);
// console.log("1 === true ->",`${1 === true} === -> strict`);

// Antramabanakan Lucumner
// console.log("0.1 + 0.2 === 0.3", `false -> ${0.1 + 0.2}`); 
// console.log("0.1 + 0.7 === 0.8", `false -> ${0.1 + 0.7}`);


// string text number Tarorinak ` ashxatum erb hamematum es "4" < 40 ev nuyn dzev "5" < "50" ev aydpes
// for(let i = 0;i < 50;i++) {
//     console.log(`"${i}" > "40" -> `,""+ i +"" > "40");
// }
// console.log("30" < "30"); 




/**Ստանալ մեծ կղզի - Ֆանտաստիկ վարժություն */ 


// let input3 = [
//     [0,1,0,0,1],
//     [0,1,0,0,1],
//     [1,0,0,0,1],
//     [0,0,0,0,0],
//     [0,1,1,1,0]
// ]
// console.log(input3);
// // Ոe Need to compute each Row Size to use it in our calculations
// const data = {
//     rowSize:5,
//     id:2,
//     length:1,
//     islands:{},
//     max:0,
//     identify:null,
//     islandOr_Water:1
// }
// // Լօօպ
// function Loop(board) {
//     let {islandOr_Water} = data
//     for (let Row = 0; Row < board.length; Row++) {
//         const Line = board[Row];
//         for (let line_Index = 0; line_Index < Line.length; line_Index++) {
//             const value = Line[line_Index];
            
//             if(value === islandOr_Water && islandOr_Water === 1) {
//                 findNeighbor(board,Row,line_Index);data.id++
//             } 

//             if(value === islandOr_Water && islandOr_Water === 0) {
//                 data.identify = null
//                 computeSizePositive(board,Row,line_Index);
//             } 
//         }
//     }
//     data.islandOr_Water = 0
// }


// // Functionall
// function computeSizePositive(board,Row,i) {
    
//     findNeighbor(board,Row,i)   //compute itselvs Value
//     findNeighbor(board,Row,i+1) //compute next Neighbour Value
//     findNeighbor(board,Row,i-1) //compute previous Neighbour Value
//     findNeighbor(board,Row-1,i) //compute top Neighbour Value
//     findNeighbor(board,Row+1,i) //compute bottom Neighbour Value
//     if( board[Row] && board[Row][i] ) data.length = 1
// }

// function findNeighbor(board,Row,line_Index) {
//     let {islandOr_Water} = data
    
//     let neighbour = board[Row] && board[Row][line_Index]
//     if(Row >= 0 && line_Index >= 0 && neighbour === 1) {
//         addIslandTo_Data(board,Row,line_Index)
//     }

//     neighbour = board[Row] && (board[Row][line_Index] > 1)
//     if(Row >= 0 && line_Index >= 0 && !!neighbour === true && islandOr_Water === 0) {
//         computeGreatIslind(board,Row,line_Index)
//     }
// }

// function computeGreatIslind(board,Row,line_Index) {
//     let {islands,max,identify} = data
//     let maxValue = islands[board[Row][line_Index]] + 1 
//     identify = board[Row][line_Index]
//     if( data.identify === null ) {
//         data.identify = board[Row][line_Index]
//     }  
    
//     if(data.identify !== identify){
//         maxValue = islands[data.identify] + (islands[board[Row][line_Index]] + 1)
//     } 
    
//     if(maxValue > max) {
//         data.max = maxValue
//     }
// }

// function addIslandTo_Data(board,Row,line_Index) {
//     let {islands,id,length} = data
//     board[Row][line_Index] = id
//     islands[board[Row][line_Index]] = length
//     data.length++
//     computeSizePositive(board,Row,line_Index)
// }

// // Start Function 
// function largestIsland(board) {
//     Loop(board,1);
//     Loop(board,0);
//     return data.max
// }
// alert(largestIsland(input3))









// Queen exersize, Թագուհիների խնդիրը
// n-թագուհիների խնդիրը: 
// n թագուհիներ տեղադրել n×n շախմատի տախտակի վրա այնպես, որ կամայական երկու թագուհիներ չհարձակվեն միմյանց վրա:

// Մուտք. ամբողջ թիվ n
// Արդյունք. Զանգված, որի ամեն էլեմենտը երկչափ զանգված է՝ n-թագուհիներ խնդրի բոլոր հստակ լուծումներով:

// Զանգվածի Յուրաքանչյուր էլեմենտը պարունակում է n-թագուհիների տեղակայման տարբերակ, որտեղ 'Q' - թագուհի և '.' - դատարկ տարածություն:

//  Օրինակ:

//    Մուտքագրում: 4
//    Արդյունք: [
//     [
//      ['.', 'Q', '.', '.'],
//      ['.', '.', '.', 'Q'],
//      ['Q', '.', '.', '.'],
//      ['.', '.', 'Q', '.'],
//     ],
//     [
//      ['.', '.', 'Q', '.'],
//      ['Q', '.', '.', '.'],
//      ['.', '.', '.', 'Q'],
//      ['.', 'Q', '.', '.'],
//     ]
//    ]


function nQueens(n) {
  const results = [];

  const board = Array.from({length: n}, () => Array.from({length: n}, () => "."));
  const dfs = (row) => {

    if (row === n) {
      results.push(clone(board));
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col, board)) {
        board[row][col] = 'Q';
        dfs(row + 1);
        board[row][col] = '.';
      }
    }

  };
  dfs(0);

  return results;
}

function clone(val) {
  return JSON.parse(JSON.stringify(val));
}

function isValid(row, col, board) {
  const n = board.length;

  for (let i = row - 1; i >= 0; i--) {
    if (board[i][col] === 'Q') {
      return false;
    }
  }

  for (let i = row - 1, x = col + 1; i >= 0 && x < n; i--, x++) {
    if (board[i][x] === 'Q') {
      return false;
    }
  }

  for (let i = row - 1, x = col - 1; i >= 0 && x >= 0; i--, x--) {
    if (board[i][x] === 'Q') {
      return false;
    }
  }

  return true;
}


console.log(nQueens(4));
