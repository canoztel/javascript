//return'ün döndürdüğü değer metotun çağrıldığı yere bırkamasıdır.
//Geriye değer döndüren metot tanımalamak --- return

let donDeger = cube(3); //cube(3) ile çağırıldı.
console.log(donDeger);

function cube(sayi){ //sayi parametreli cube fonksiyonunun tanımlanması
    let sonuc = sayi*sayi*sayi;
    return sonuc; //fonksiyonun dışına döndürür.
}

//return'ün döndürdüğü değer metotun çağrıldığı yere bırkamasıdır.



//ÖNEMLİ ÖRNEK

let deger = kareAl(2);
kupAl(deger);

function kareAl(sayi){
    let sonuc=sayi*sayi;
    return sonuc; 
    console.log(rest); //return anahtar kelimesinden sonra kullanılan kodlara erişilemez.
}

function kupAl(sayi){
    let sonuc = sayi*sayi*sayi;
    console.log(sonuc);
}

/*
Kodun çalışma biçimi şu şekildedir:

İlk olarak, kareAl fonksiyonu çağrılarak 2 sayısının karesi hesaplanır ve bu değer deger değişkenine atanır.
Daha sonra, kupAl fonksiyonu çağrılarak deger değişkeni argüman olarak verilir. Bu fonksiyon, aldığı değerin küpünü hesaplar ve konsola yazdırır.
Sonuç olarak, kodun çıktısı 2'nin karesi ve küpü olan 4 ve 8'i ekranda görüntüleyecektir.
*/ 


let x = myFunction(5,4);
console.log(x);

function myFunction(a,b){
    return a*b;
}