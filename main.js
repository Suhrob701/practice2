// function calculator() {
//     // Birinchi sonni so'rash
//     let num1 = parseFloat(prompt("Birinchi sonni kiriting:"));
//     if (isNaN(num1)) {
//         alert("Iltimos, raqam kiriting!");
//         return;
//     }

//     // Amalni so'rash
//     let operation = prompt("Amalni tanlang (+, -, *, /):");
//     if (!["+", "-", "*", "/"].includes(operation)) {
//         alert("Noto'g'ri amal tanlandi!");
//         return;
//     }

//     // Ikkinchi sonni so'rash
//     let num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
//     if (isNaN(num2)) {
//         alert("Iltimos, raqam kiriting!");
//         return;
//     }

//     // Hisoblash
//     let result;
//     switch (operation) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             if (num2 === 0) {
//                 alert("Nolga bo'lish mumkin emas!");
//                 return;
//             }
//             result = num1 / num2;
//             break;
//     }

//     // Natijani chiqarish
//     alert(`Natija: ${num1} ${operation} ${num2} = ${result}`);
// }

// // Kalkulyatorni ishga tushirish
// calculator();

let son = 5;
let qoldiq = son % 2;
alert(`5 % 2 ga bo'lganingizda qoldiq: ${qoldiq}`);

let randomSon = Math.floor(Math.random() * 10) + 1;
alert(`1 dan 10 gacha random son: ${randomSon}`);

let num = 12.510;
alert(`12.510 butun son: ${Math.floor(num)}`);

let text = "MARS IT SCHOOL";
let uzunlik = text.length
alert(`"MARS IT SCHOOL" so'zidagi harflar soni: ${uzunlik}`);


for (let i = 0; i < 10; i++) {
    console.log(`MARS IT SCHOOL: ${i}`); 
}

let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
let ism = harflar[17] + harflar[19] + harflar[6] + harflar[16] + harflar[13] + harflar[1];
alert(`Sizning ismingiz: ${ism}`);


let yosh = prompt("Yoshingizni kiriting:"); 

if (yosh > 18) {
    console.log("Siz balog'at yoshiga yetgansiz.");
} else if (yosh < 18) {
    console.log("Siz balog'at yoshiga yetmagansiz.");
} else if (yosh == 18) {
    console.log("Balog'at yoshi muborak!");
} else {
    console.log("Iltimos, to'g'ri yosh kiriting.");
}

let name = prompt("Ismingizni kiriting:"); 
let teskari = name.split('').reverse().join('');
console.log(`Ismingizning teskari ko'rinishi: ${teskari}`);


let tu = prompt("Ismingizni kiriting:");
let ge = prompt("Yoshingizni kiriting:");

let div = document.createElement("div");    


div.innerHTML = `Ismingiz: ${tu} <br> Yoshingiz: ${ge}`;


div.style.fontSize = "20px"; 
div.style.color = "blue"; 
div.style.backgroundColor = "yellow"; 
div.style.border = "2px solid black"; 


document.body.appendChild(div);

let sonlar = [1,2,3,4,5,6,7,8,9,10];
let juft = sonlar.filter(num => num % 2 === 0)
console.log(juft)
