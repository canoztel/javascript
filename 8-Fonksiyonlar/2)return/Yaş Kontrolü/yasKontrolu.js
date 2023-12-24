
function yasKontrolu(yas){
    if(yas>18){
        true;
    }
   
    else{
        return confirm("Ebeveynlerin izni var mı?");
    }
  
}

let yas = prompt("Yaşınızı Giriniz:",18);

if(yasKontrolu(yas)){
    alert("İzin verildi.");
}
else{
    alert("Reddedildi.");
}
