/*
 paramatresiz ve gereiye değer döndürmeyen metot tanımlamak
function methodİsmi(){
    //* kodlar
} 
*/

//hazırlama ve tanımlama
function yazdir(){
    console.log("Can");
}

//çalıştırma
yazdir();


/* PARAMETRELİ METOT TANIMLAMA 
*/

let yeniSatir ="\r\n";
function yazdir2(isim , soyisim){
    debugger;
    console.log(isim + yeniSatir + soyisim)
}
debugger;
 yazdir2("Rest","Coast");
 yazdir2("Can", "Öztel");

//örnek 

 cube(5);
 cube(3);
 cube(4);
 
 function cube(sayi){
    console.log(sayi*sayi*sayi);
 }
