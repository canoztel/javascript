/*
function push (let value){

    return lenght;
}
Push metodu: dizinin sonuna bir değer ekler ve dizinin uzunluğunu döner.
*/

let team = ["ts","fb","gs","bjk"];
let rakam =["1","2","3"];


let diziUzunluk=team.push("ads");
console.log(diziUzunluk);

/*
function unshift (let value){

    return lenght;
}
Unshift metodu: dizinin başına bir değer ekler ve dizinin uzunluğunu döner.
*/

team.unshift("hs");
console.log(team);


let popx=team.pop(); //dizinin sonundan eleman siler ve o elemanı döner.
console.log(team);
console.log(popx);

let shiftx=team.shift(); //dizinin başından eleman siler ve o elemanı döner.
console.log(team);
console.log(shiftx);

let splicex=team.splice(1,2,"es");
console.log(team);




let stringx= team.toString();// string veri tipine çevirme
console.log(typeof team);
console.log(typeof stringx);

let joinx=team.join("*");//diziyi stringe çevirir ve araya istenile bir operator eklenir.
console.log(joinx);

let contactx=team.concat(rakam);//dizileri birleştirir.
console.log(contactx);

let slicex=contactx.slice(1,4);//diziyi istenilen yerden bölüp yeni dizi oluşturur.
console.log(slicex);

let lenghtx=contactx.length;//dizinin uzunluğunu döner
console.log(lenghtx);

let reversex=contactx.reverse();//diziyi ters çevirir.
console.log(reversex);

let indexOfx=contactx.indexOf("2");
console.log(indexOfx);

let sonuc = team.includes("bjk");//dizide arama yapar sonuc boolen değer döner
console.log(sonuc);

//ForEach döngüsü
let names=["a","b","c","d","f"];
names.forEach(function(name){
    console.log(name);
});
