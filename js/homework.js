// Задачи для решения

// 1
// let array = ['Привет, ', 'мир', '!']
// console.log(array[0] + array[1] + array[2])

// 2
// let array = ['Привет, ', 'мир', '!']
// let text = array[0] + array[1] + array[2]
// console.log(text)

// 3 
// let array = ['Привет, ', 'мир', '!']
// array[0] = 'Пока, '
// console.log(array[0] + array[1] + array[2])

// 4 
// let array = {
//     'Петя': 13000,
//     'Коля': 99999,
// }
// console.log(array)

// 5
// let arr = {
//     'ru': ['голубой', 'красный', 'зелёный'],
//     'en': ['blue', 'red', 'green'],
// };
// console.log(arr.ru[1])

//// Работа с массивами ////
// 1
// let arr = ['a','b','c']
// alert(arr)

// 2
// let arr = ['a','b','c']
// console.log(arr[0], arr[1], arr[2])

// 3
// let arr = ['a','b','c','d']
// console.log(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`)

// 4
// let arr = [2, 5, 3, 9], result = 0;

// for (let i = 0; i < arr.length - 1; i+=2){
//     result += arr[i] * arr[i+1]
// }
// console.log(result)

//// Объекты (ассоциативные массивы) ////

// 1
// let obj = {a: 1, b: 2, c: 3}
// console.log(obj['c'])
// console.log(obj.c)

// 2
// let obj = {'Коля': '1000', 'Вася': '500', 'Петя': '200'};
// console.log('Коля:', obj['Коля'])
// console.log('Петя:', obj['Петя'])

// 3
// let obj = {1:'Понедельник', 2:'Вторник', 3:'Среда', 4:'Четверг', 5:'Пятница', 6:'Суббота', 7:'Воскресенье'}
// console.log(obj[1])

// 4
// let obj = {1:'Понедельник', 2:'Вторник', 3:'Среда', 4:'Четверг', 5:'Пятница', 6:'Суббота', 7:'Воскресенье'}
// let day = 3;
// console.log(obj[day])

//// Многомерные массивы ////
// 1
// let array = [[1,2,3],
//              [4,5,6],
//              [7,8,9]]

// console.log(array[1][0])

// 2
// let obj = { js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
// console.log(obj.js[0])

// 3
// let arr = {
//     'ru':['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
//     'en':['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
// }

// console.log(arr.ru[0])
// console.log(arr.en[2])

// 4
// let lang = 'ru', day = 3;
// let arr = {
//     'ru':['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
//     'en':['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
// }

// console.log(arr[lang][day])