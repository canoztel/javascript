//? Veri Tipleri
/*
1-String
2-Number
3-Boolen
4-Null
5-Undefined
6-Object
*/

//string
let name="Hello World."
console.log(name);
console.log(typeof name)

//number
let number=15;
console.log(number + " " + typeof number);

//boolen --> true & false
console.log(3>5);
console.log(9>4);

let a=7;
let b=6;
let sonuc=a+b;
console.log(sonuc==10);

//null --> boş
let c =null;
c=9;
console.log(c);

//Undefined --> tanımlanmamış değerler
let d;
console.log(d);

//Object

let phone={
    id:"10930501234122",
    price:150000
}
console.log(phone);


let func = function(){
console.log("Hey Guys!");
}

func();
console.log(typeof func);