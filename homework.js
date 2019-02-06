// -------------------------- Home work --------------------------
// -------------------------- Дорошенко Никита Андреевич --------------------------

// Функции. Задачи.
// #1

// function multiply() {
// 	let result = 1;
// 	for (let i = 0; i < arguments.length; i++) {
// 		result *= arguments[i]
// 	}
// 	return result;
// }

// #2

// function str(a) {
// 	if (typeof a !== 'string') return console.log('Error')
// 	let newStr = '';
// 	for (let i = a.length - 1; i >= 0; i--) {
// 		newStr += a[i]
// 	}
// 	return newStr
// }

// #3

// function a(str) {
// 	let n = '';
// 	for (let i = 0; i < str.length; i++) {
// 			n += str.charCodeAt(i) + ' ';
// 	}
// 	return n
// }

// #4                

// function yourNumber(number) {
// 	if (number < 0 || number > 10) { return console.log('Error'); }
// 	let random = Math.round(Math.random() * 10);
// 	if (number === random) {
// 		console.log('Вы выиграли')
// 	} else {
// 		console.log(`Вы не угадали ваше число ${number}, а выпало число ${random}`)
// 	}
// }

// #5

// function a(number) {
// 	let arr = [];
// 	for (let i = 1; i <= number; i++) {
// 		arr.push(i)
// 	}
// 	return arr
// }

// #6

// let arr = [1,2,3];

// function doubleArray(arr) {
// 	arr2 = arr.concat(arr)
// 	return arr2
// }

// #7  

// function arr() {
// 	let newArr = [];
// 	for (let i = 0; i < arguments.length; i++) {
// 		arguments[i].shift()
// 		newArr.push(arguments[i])
// 	}
// 	return newArr
// }

// #8

// let arr = [
// 	{
// 		name: 'Denis',
// 		age: '29',
// 		gender: 'male'
// 	},
// 	{
// 		name: 'Ivan',
// 		age: '20',
// 		gender: 'male'
// 	}
// ]

// const check = arr.filter(function (user) {
// 	if (typeof user.name === 'string' && typeof user.age === 'string' && typeof user.gender === 'string') return user
// });

// Функции высшего порядка. Задачи.

// #1

// function firstFunc(arr, handler1) {
// 	let str = 'New value: ' + arr

// 	return str
// }

// function handler1() {
	
// }