// let obj1 = {}
// let obj2 = new Object()
// let key = prompt('Enter key', 'adress')
// let val = prompt('Enter value', 'adress')
// let user = {
//     name: 'Vasya',
//     age: 15,
//     isAdmin: false,
//     'like dogs': true,
//     [key+'user']: val,
// }
// user[key] = 'asdasdasd'
// user.name = 'User1'
// user.surname = '123'
// delete user.age
// console.log(user)

// function makeUser(name, age){
//     return { name, age }
// }
// let user = makeUser('Vasya', 20)
// console.log('nameSurname' in user)

// let user = {
//     name: 'Vasya',
//     age: 16,
//     'is Admin': false,
//     // 1:1
// }

// for (let index in user){
//     console.log(index, user[index])
// }
// let admin = {}
// for(let key in user){
//     admin[key] = user[key]
// }

// let adress = {
//     'street': 'Shishkina'
// }

// let admin1 = Object.assign({}, user, adress)
// admin.name = 'admin'
// admin['is Admin'] = true
// console.log(user)
// console.log(admin1)

// let user = {
//     name: 'Vasya',
//     age: 16,
//     'is Admin': false,

//     say_hello(){
//         //console.log('Hello', user.name, this.age + 100)
//         return (`Hello ${this.name}, ${this.age + 100}`)
//     }
// }

// let arrow = () => {}

// function newUser(name, age){
//     return {name, age}
// }

// function hello(){
//     return (`Hello ${this.name}, ${this.age}`) 
// }

// let manager = new newUser('manager', 20)
// manager['is Admin'] = false
// manager['say_hello'] = hello
// console.log(hello())
// console.log(manager.say_hello())

// let admin = Object.assign({}, user)
// admin.name = 'admin'
// admin.age = 25
// console.log(admin)
// console.log(admin[say_hello()])

// let user = {
//     name: 'Vasya',
//     age: 15,
//     address: {
//         street: 'Shishkina',
//         house: 15,
//         flat: 10,
//     }
// }

// console.log(user['address']['street'])
// console.log(user?.address?.street)

// let array = []
// let array2 = new Array()

// let array3 = [1,2,3,4,5]
// console.log(array3[0])
// console.log(array3.length)
// array[0]=100
// console.log(array3)
// let arr = [
//     {name: 'Vasya', age: 15},
//     {name: 'Kirill', age: 17},
//     {name: 'manager', age: 15},
// ]
// console.log('deleted elem', arr.unshift())
// console.log('left', arr)

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// for (let i in arr){
//     console.log(arr[i])
// }

// for (let item of arr){
//     console.log(item)
// }

// arr.forEach((elem) => console.log( elem))

// let arraw = () => {}
// console.log(arr.indexOf(15))
// let arr = [15, 1, 2, 3, 15]

// let res = arr.filter(function(item, index, arr){
//     if (item < 10){
//         return item
//     }
// })
// let res = arr.filter((item) => item < 10)
// console.log(res)

// let res = arr.map(function(item, index, arr){
//     return item*2
// })

// function compareNum(a, b){
//     if (a>b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// console.log(arr.sort(compareNum).reverse().filter(item => item > 5))

// let arr = [1, 2, 3, 15, 15]

// // let str = 'sdfsdf,sdfsdf,sdfsdf,fdgdfg';
// // let arr = str.split(',')
// // console.log(arr.join('!  '))
// let sum = 0;
// let res = arr.reduce((acc, item) => acc+item, 0)

// console.log(res)


