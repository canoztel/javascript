//SEÇİCİLER -STYLE ÖZELLİKLERİ

//Classname ,id , tag name

//getElementById : Elementi id' sine göre seçer ve yakalar.

const button = document.getElementById("ornek1");

console.log(button);
console.log(button.getAttribute("id"));
console.log(button.className);

const classListesi = button.classList[3];
console.log(classListesi);
classListesi.forEach(function(classx){
    console.log(classx);
})