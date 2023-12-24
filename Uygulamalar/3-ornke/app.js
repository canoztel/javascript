//URUNLERİ TANIMLAMA
let urun1 = {
    isim:"Monster Notebook Vulpar",
    kategori:"Teknoloji",
    altKategori:"Bilgisayar",
    fiyat:17.999
}

let urun2 = {
    isim:"Acer Nitro 5",
    kategori:"Teknoloji",
    altKategori:"Bilgisayar",
    fiyat:19.599
}

let urun3 = {
    isim:"Lenova Notebook",
    kategori:"Teknoloji",
    altKategori:"Bilgisayar",
    fiyat:12.999
}

let urun4 = {
    isim:"HP Viv0book",
    kategori:"Teknoloji",
    altKategori:"Bilgisayar",
    fiyat:15.699
}

let urun5 = {
    isim:"Asus Aspire",
    kategori:"Teknoloji",
    altKategori:"Bilgisayar",
    fiyat:23.499
}
let urun6 = {
    isim:"Acer Gaming",
    kategori:"Teknoloji",
    altKategori:"Bilgisayar",
    fiyat:16.799
}
let urun7 = {
    isim:"Monster Notebook Abra A5",
    kategori:"Teknoloji",
    altKategori:"Bilgisayar",
    fiyat:23.799
}

//URUNLERİ 1 DİZİDE TOPLAMA
let urunler =[urun1,urun2,urun3,urun4,urun5,urun6,urun7];
//ARANACAK OLAN OBJE İÇİN YENİ DİZİ OLUŞTURMA
let filtreliUrunler = [];

//KULLANICIDAN ÜRÜN İSMİ ALMA
let kullaniciUrunİsmi = prompt("Bir ürün ismi giriniz:");



alfiltreliUrunler(urunler);
yazfiltreliUrunler(filtreliUrunler);

//
function alfiltreliUrunler(urunler){
    urunler.forEach(function(urun){

        if(urun.isim.toUpperCase().includes(kullaniciUrunİsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun);
        };
        //ismi al ,ismin büyük küçük hassasiyeti olmaması için hepsini büyük harfe çevir 
        //kullanıcadan alınan değeri de büyük harfe çevirdik ve includes da içeriip içermemesi kontrolünü sağlıyor.
        //aranan ürünü bulduğunda push metodu ile filtreli ürünler dizisine ekliyor.
    });
}

function yazfiltreliUrunler(urunler){
    urunler.forEach(function (urun){
        console.log("----------------------------------------");
        console.log(" | " + urun.kategori + " | " + urun.altKategori + " | " + urun.isim + " | " + urun.fiyat);
        console.log("----------------------------------------");
        });
}
