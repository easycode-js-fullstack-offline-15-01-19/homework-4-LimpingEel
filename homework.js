// -------------------------- Home work --------------------------
// -------------------------- Дорошенко Никита Андреевич --------------------------

// Функции. Задачи.
// #1

// function multiply() {
//      if (!arguments.length) { return 0; }

// 	    let result = 1;


// 	    for (let i = 0; i < arguments.length; i++) {
// 		   result *= arguments[i]
// 	    }


// 	    return result;
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
// 	if (number < 1 || number > 10) { return console.log('Error'); }
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
// return arr.concat(arr)
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

// let users = [
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


// function getUsers(users, key, value) {

//     let newUsers = [];

//     for (let i = 0; i < users.length; i++) {
//         if (users[i][key == value]) {
//             newUsers.push(users[i])
//         }
//     }


//     return newUsers;
// }

// Функции высшего порядка. Задачи.

// #1

// function processString(arr, handler) {
//     if (!Array.isArray(arr)) return console.log('error');


//     let newString = 'New value: ';

//     for (let i = 0; i < arr.length; i++) {
//          newString += handler(arr[i]);
//     }
    

//     return newString;
// }

// let mainRes1 = processString(['my', 'name', 'is', 'Trinity'], function (item) {
//     return item[0].toUpperCase() + item.slice(1)
// });


// #2
// let mainRes2 = processString([10, 20, 30], function (item) {
//     return item * 10 + ' ';
// });

// #3
// let mainRes3 = processString([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], function (item) {
//     return `${item.name} is ${item.age}` + ', ';
// });

// #4
// let mainRes4 = processString(['abc', '123'], function (item) {
//     return item.split('').reverse().join('') + ', ';
// });