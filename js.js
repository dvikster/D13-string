/**
 * Created by OSS PC 6 on 5/10/2017.
 */
//Строка
var str='Lorem ipsum dolor L';
// var str='pul';
console.log(str);

//Строка как массив.
// Доступ к символам как к массиву
// Чтобы получить символ, используйте вызов charAt(позиция).
// Первый символ имеет позицию
var strChartAt = str.charAt(0);
var strChartAt2 = str[0];
console.log(strChartAt);
console.log(strChartAt2);

//Подсчет символов в строке - Длина строки
var strLength = str.length;
console.log(strLength);

//Подсчет количества определенных символов в строке.
//Без учета регистра
var res=str.match(/l/gi);
//Кол-во определенных символов без учета регистра
var resLength=str.match(/l/gi).length;
console.log(res);
console.log(resLength);

//С учетом регистра
var resAll=str.match(/l/g);
//Кол-во определенных символов c учетом регистра
var resAllLength=str.match(/l/g).length;
console.log(resAll);
console.log(resAllLength);




document.getElementById('str').innerHTML = str;
document.getElementById('strChartAt').innerHTML = strChartAt;
document.getElementById('strChartAt2').innerHTML = strChartAt2;
document.getElementById('strLength').innerHTML = strLength;

document.getElementById('res').innerHTML = res;
document.getElementById('resLength').innerHTML = resLength;
document.getElementById('resAll').innerHTML = resAll;
document.getElementById('resAllLength').innerHTML = resAllLength;



//Разбивка по символам
// var resSplitAll=str.split('');
// console.log(resSplitAll);

//Разбивка по пробелам
// var resSplit=str.split(' ');
// console.log(resSplit);

//Разбивка по предложениям
// var resSplitDot=str.split('.');
// console.log(resSplitDot);

// document.getElementById('resSplit').innerHTML = resSplit;
// document.getElementById('resSplitAll').innerHTML = resSplitAll;
// document.getElementById('resSplitDot').innerHTML = resSplitDot;