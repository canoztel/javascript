//? Alert : Bir Uyarı POP-UP'ı oluşturur.
//! Prompt : Kullanıcıdan Bir Değer Alır Ve O Değeri String Olarak Döndürür.
//TODO Confirm: Kullanıcıdan Bir Değer Alır Ve Alınan Değeri Boolen Döndürür.



let number= prompt("Bir Sayı Giriniz: ");
console.log(number);

if(number<9){
    alert("Lütfen Farklı bir sayı giriniz!");
    prompt("Bir Sayi Giriniz:");
}

confirm("Devam Edilsin mi?");

//promt' da kullanıcıdan alınan değerler her zaman string döner.
//Number() yaparak bunun önüne geçebiliriz.
let yas= Number(prompt("Yaşınızı Giriniz: "));
console.log(typeof yas);

let boy=prompt("Boyunuzu Giriniz: ");
console.log(typeof boy);
