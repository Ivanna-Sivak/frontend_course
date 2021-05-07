// alert('Hello JS');

// Типи даних
/* 
 - number => 20, 21.2
 - string => '', "", ``
 - boolean => true, false
 - undefined 
 - null
 - symbol(es6)
 - bigint(es9)
 - object => object, array 
*/

/* Змінні
 - var
 - let(es6)
 - const(es6)
*/

// es => ecmascript
// es6 => ecmascript 2015 => 2016
// es9 => ecmascript 2018 => 2019

// javascript, es6+

// var a = 1000; // number
// let b = 'Logos'; // string
// const c = false; // boolean
// let d; // undefined
// let e = null; // null
// let f = Symbol(); // symbol
// let g = BigInt(12345678); // bigint

// let myCar = {
//     mark: 'Hyundai',
//     model: 'Tucson',
//     year: 2015,
//     outsideColor: 'white',
//     insideColor: 'black',
//     package: 'style'
// };

// let user = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     city: 'Lviv',
//     dateOfBirth: {
//         date: '03',
//         month: '09',
//         year: '1990'
//     },
//     email: 'ivanne@gmail.com',
//     phone: '+380938765432'
// };

// let prod = [{}, {}, {}];

// function nameFunction(param1,param2...){
//     data
// }

// alert(user);
// console.log(a);
// a = 2000;
// console.log(a);
// a = a + 500;
// console.log(a);
// a = 'some text';
// console.log(a);
// var a = 'opacha';
// console.log(a);

// console.log(b);
// b = 'Logos IT-academy';
// console.log(b);
// b = 2010;
// console.log(b);
// let b = 'opacha'; // error

// console.log(c);
// c = true; // error

// let mes = prompt('write some');
// console.log(mes);

// Умови 
// if(умова){
//     тіло умови
// }

// let n = 10;
// if (n > 110) {
//     console.log('yes');
// }

// let age = prompt('write your age');
// if(age >= 18){
//     console.log('Ласкаво просимо до клубу');
// }
// else if(age<18){
//     console.log('Вибачте, але ми не можемо Вас пропустити');
// }
// else{
//     console.log('Вибачте, але Ви ввели не числове значення');
// }

// let age = prompt('write your age');
// if(age >= 18 && age <= 100){
//     console.log('Ласкаво просимо до клубу');
// }
// else if(age>=0 && age<18){
//     console.log('Вибачте, але ми не можемо Вас пропустити');
// }
// else if(age>100 || age<0){
//     console.log('Вибачте, число не в межах 0 до 100');
// }
// else{
//     console.log('Вибачте, але Ви ввели не числове значення');
// }

// Цикли => for, while, do..while, for..of, for..in, for..await
// for(старт лічильника; умова циклу; крок зміни лічильника){
//     тіло циклу
// }

// for(let i=1; i<=10; i++){
//     // console.log(i);
//     // document.write('Ivan ')
//     // document.write('<h2>Loop</h2>');
//     document.write(`<h2>Loop ${i}</h2>`);
// }

// Функції 

// function nameFunction(param1?, param2?...){
//     тіло функції
// }

// function sayHello(){
//     document.write(`<h2>Hello</h2>`);
// }

// sayHello();
// sayHello();
// sayHello();

// for(let i=1; i<=10; i++){
//     sayHello();
// }

// function sayHello(name){
//     document.write(`<h2>Hello ${name}</h2>`);
// }

// sayHello('Ivan');
// sayHello('Petro');

let pizza = [
    {
        id: 1,
        title: 'Піца La П’єц',
        text: 'соус томатний, шинка, баварські ковбаски, сир моцарела, ковбаса салямі, прошуто.',
        image: 'https://www.lapiec-pizza.com.ua/wp-content/uploads/2018/07/LA-P_yets-1.png',
        price: 167
    },
    {
        id: 2,
        title: 'Капрічоза',
        text: 'соус томатний, сир моцарела, шинка, свіжі гриби.',
        image: 'https://www.lapiec-pizza.com.ua/wp-content/uploads/2018/08/Kaprichoza-1.png',
        price: 151
    },
    {
        id: 3,
        title: 'Цезаріо',
        text: 'соус вершковий, помідори, хрусткий салат, пармезан, куряче м’ясо, сир моцарела, перепелині яйця.',
        image: 'https://www.lapiec-pizza.com.ua/wp-content/uploads/2018/08/TSezario-1.png',
        price: 192
    }
];


function render(){
    pizza.forEach(prod => {
        document.querySelector('.container').innerHTML += 
        `
        <div class="product">
            <div class="product-image" style="background-image: url('${prod.image}');"></div>
            <div class="product-info">
                <h2 class="product-title">${prod.title}</h2>
                <p class="product-text">${prod.text}</p>
                <span class="product-price">${prod.price} грн</span>
            </div>
        </div>
        `
    });
}