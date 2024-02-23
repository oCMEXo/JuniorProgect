// // || OR ИЛИ
// // true || true => true
// // true || false => true
// // false || true => true
// // false || false => false

// // && AND И
// // true && true => true
// // true && false => false
// // false && true => false
// // false && false => false

// // ! NOT НЕ
// // !true => false
// // !false => true
// // ______________________________________________________________________
// // || OR ИЛИ
// // true || true => true
// // true || false => true
// // false || true => true
// // false || false => false

// // && AND И
// // true && true => true
// // true && false => false
// // false && true => false
// // false && false => false

// // ! NOT НЕ
// // !true => false
// // !false => true

// const x = 2;
// const y = 3;

// if ((x ** 3 !== 9) || (y + 1 === 1)) {
//     console.log('trte');
// } else {
//     console.log('hmgf');
// }
// // _____________________________________________________________________________________---
// // все четные числа от -10 до 10 (включая оба) вывести в строук через запятую

// let str = '';
// for (let i = -10; i <= 10; ++i) {
//     if (i % 2 === 0) {
//         str = str + i + ', ';
//     }
// }

// console.log(str);
// Пользователь Valeriya Laktionova вышел
// Пользователь Valeriya Laktionova присоединился в качестве гостя

// Aliaksandr Krasnou 9:41
// // все четные числа от -10 до 10 (включая оба) вывести в строук через запятую

// let str = '-10';
// for (let i = -9; i <= 10; ++i) {
//     if (i % 2 === 0) {
//         str = `${str}, ${i}`;
//     }
// }

// console.log(str);
// // чтение чисел N и P. Написать ф-ию которая возводит N в степень P

// function pow(n, p) {
//     // return n ** p;
//     return Math.pow(n, p);
//     // let k = n;

//     // for (let i = 0; i < p - 1; ++i) {
//     //     k = k * n;
//     // }

//     // return k;
// }

// const n = +prompt('Enter n');
// const p = +prompt('Enter p');

// console.log(pow(n, p));

// Aliaksandr Krasnou 9:47
// // чтение чисел N и P. Написать ф-ию которая возводит N в степень P
// const n = +prompt('Enter n');
// const p = +prompt('Enter p');

// const pow = (n, p) => {
//     // return n ** p;
//     return Math.pow(n, p);
//     // let k = n;

//     // for (let i = 0; i < p - 1; ++i) {
//     //     k = k * n;
//     // }

//     // return k;
// }

// console.log(pow(n, p));

// Aliaksandr Krasnou 9:54
// const age = {
//     Mary: 18,
//     Peter: 20,
//     John: 80,
// };

// let sum = 0;
// const arrAges = Object.values(age);

// for(let i = 0; i < arrAges.length; ++i) {
//     sum = sum + arrAges[i];
// }

// console.log(sum);

// Aliaksandr Krasnou 9:56
// const age = {
//     Mary: 18,
//     Peter: 20,
//     John: 80,
// };

// let sum = 0;
// for (let key in age) {
//     sum = sum + age[key];
// }

// console.log(sum);
// const age = {
//     Mary: 18,
//     Peter: 20,
//     John: 80,
// };

// const arrAges = Object.values(age);
// const sum = arrAges.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);

// console.log(sum);
// let name = 'Mary';

// const user = {
//     name: 'John',

//     sayHi() {
//         alert(this.name);
//     }
// };

// user.sayHi.call(name);

// Aliaksandr Krasnou 10:01
// let name = 'Mary';

// const user = {
//     name: 'John',

//     sayHi() {
//         alert(this);
//     }
// };

// user.sayHi.call(name);

// Aliaksandr Krasnou 10:12
// console.log('start');

// function sayHi() {
//   console.log('hi');
// }

// const pr = new Promise((resolve) => {
//     console.log(1);

//     setTimeout(() => {
//         console.log(4);
//         resolve();
//         console.log(5);
//         sayHi();
//     }, 100);

//     console.log(2);
// });

// console.log('end');

// pr.then(() => { console.log(3) });
// Пользователь Maria Filipava вышел

// Aliaksandr Krasnou 10:17
// // Есть база данных сотрудников компании
// // Сделать след операции:
// // 1) Ввод имени, фамилии и зарплаты с клавиатуры
// // 2) Сохранение нового сотрудника в компании (в БД)
// // 3) Вывод всех сотрудников
// // 4) Сортировка по зп

// function Person(name, surname, salary) {
//     this.name = name;
//     this.surname = surname;
//     this.salary = salary;
// }

// const persons = [];

// const name = prompt('Enter name');
// const surname = prompt('Enter surname');
// const salary = +prompt('Enter salary');

// const person = new Person(name, surname, salary);

// persons.push(person);

// console.log(persons);
// Пользователь Hanna Ivanova вышел

// Aliaksandr Krasnou 10:20
// // Есть база данных сотрудников компании
// // Сделать след операции:
// // 1) Ввод имени, фамилии и зарплаты с клавиатуры
// // 2) Сохранение нового сотрудника в компании (в БД)
// // 3) Вывод всех сотрудников
// // 4) Сортировка по зп

// function Person(name, surname, salary) {
//     this.name = name;
//     this.surname = surname;
//     this.salary = salary;
// }

// function createPerson() {
//     const name = prompt('Enter name');
//     const surname = prompt('Enter surname');
//     const salary = +prompt('Enter salary');

//     return new Person(name, surname, salary);
// }

// const persons = [];

// const n = +prompt('How many people you would like to add?');

// for (let i = 0 ; i < n; ++i) {
//     persons.push(
//         createPerson()
//     );
// }

// console.log(persons);
// Пользователь Hanna Ivanova присоединился в качестве гостя

// Aliaksandr Krasnou 10:23
// // Есть база данных сотрудников компании
// // Сделать след операции:
// // 1) Ввод имени, фамилии и зарплаты с клавиатуры
// // 2) Сохранение нового сотрудника в компании (в БД)
// // 3) Вывод всех сотрудников
// // 4) Сортировка по зп (убывание)

// function Person(name, surname, salary) {
//     this.name = name;
//     this.surname = surname;
//     this.salary = salary;
// }

// function createPerson() {
//     const name = prompt('Enter name');
//     const surname = prompt('Enter surname');
//     const salary = +prompt('Enter salary');

//     return new Person(name, surname, salary);
// }

// const persons = [];

// const n = +prompt('How many people you would like to add?');

// for (let i = 0 ; i < n; ++i) {
//     persons.push(
//         createPerson()
//     );
// }

// console.log(persons);

// persons.sort(function (person1, person2) {
//     return person2.salary - person1.salary;
// });

// console.log(persons);
console.log(typeof null);
