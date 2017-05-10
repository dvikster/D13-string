/**
 * Created by OSS PC 6 on 5/10/2017.
 */
//Строка
var str='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis nulla eu lorem iaculis sagittis vel ut dui. Phasellus sagittis mauris id faucibus pulvinar.';

//Строка как массив.
//Разбивка по символам
var resSplitAll=str.split('');
console.log(resSplitAll);

//Разбивка по пробелам
var resSplit=str.split(' ');
console.log(resSplit);

//Разбивка по предложениям
var resSplitDot=str.split('.');
console.log(resSplitDot);

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
document.getElementById('strLength').innerHTML = strLength;
document.getElementById('resSplit').innerHTML = resSplit;
document.getElementById('resSplitAll').innerHTML = resSplitAll;
document.getElementById('resSplitDot').innerHTML = resSplitDot;
document.getElementById('res').innerHTML = res;
document.getElementById('resLength').innerHTML = resLength;
document.getElementById('resAll').innerHTML = resAll;
document.getElementById('resAllLength').innerHTML = resAllLength;




