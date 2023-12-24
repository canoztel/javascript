/*
Konu Başlığı: Alışveriş Sepeti Toplama Uygulaması

Uygulama amacı: Kullanıcıdan alışveriş yapmak istediği ürünleri seçmesini
ve bu ürünlerin toplam fiyatını hesaplamasını isteyen bir alışveriş sepeti uygulaması yapalım.

Ürünleri Tanımlama:
Belirli kategorilerde ve fiyatlarla birkaç ürün tanımla (örneğin, kıyafet, elektronik, kitap gibi).

Ürünleri Sepete Ekleme:
Kullanıcıdan alışveriş yapmak istediği ürünleri seçmesini iste.
Seçilen ürünleri bir alışveriş sepeti dizisine ekleyerek tut.

Toplam Fiyat Hesaplama:
Sepetteki her ürünün fiyatını topla ve kullanıcıya toplam tutarı göster.

İndirim Uygulama (Opsiyonel):
İstersen, sepete eklenen ürün sayısına göre indirim uygulayarak toplam fiyatı güncelle.

Çıkış İşlemi:
Kullanıcıya alışverişi tamamlamak isteyip istemediğini sor.
Tamamlamak istiyorsa, teşekkür mesajıyla birlikte toplam tutarı göster.
Bu konu üzerinde çalışarak JavaScript becerilerini daha da geliştirebilir ve 
kullanıcıyla etkileşimli bir uygulama geliştirebilirsin. İyi kodlamalar!
*/ 

//Ürünleri Tanımlama:Belirli kategorilerde ve fiyatlarla birkaç ürün tanımla (örneğin, kıyafet, elektronik, kitap gibi).


/*
// Normal string birleştirme
console.log("Toplam Fiyat: " + toplamFiyat + " TL");

// Template literals kullanarak string birleştirme
console.log(`Toplam Fiyat: ${toplamFiyat} TL`);

*/


let urun1 = {
    isim:"T-shirt",
    kategori:"Giyim",
    fiyat: 150
}


let urun2 = {
    isim:"Pantolon",
    kategori:"Giyim",
    fiyat: 300
}

let urun3 = {
    isim:"Sweatshirt",
    kategori:"Giyim",
    fiyat:600
}
let urun4 = {
    isim:"Kulaklık",
    kategori:"Elektronik",
    fiyat: 1200
}

let urun5 = {
    isim:"Şarj Aleti",
    kategori:"Elektronik",
    fiyat: 300
}

let urun6 = {
    isim:"Suç ve Ceza",
    kategori:"Yayıncılık",
    fiyat:50
}
let urun7 = {
    isim:"Satranç",
    kategori:"Yayıncılık",
    fiyat:50
}

let urun8 = {
    isim:"Romeo ve Juliet",
    kategori:"Yayıncılık",
    fiyat:60
}

let urun9 = {
    isim:"Yüzük",
    kategori:"Takı",
    fiyat:200
}

let urun10 = {
    isim:"Kolye",
    kategori:"Takı",
    fiyat:300
}

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6,urun7,urun8,urun9,urun10];
let yeniUrunSepeti=[];

// Kullanıcıya Ürünleri Gösterme
console.log("Ürünler");
urunler.forEach(function(urun,index){
    console.log(`${index + 1}.${urun.isim} | ${urun.kategori} | ${urun.fiyat} TL`);
});

 // Kullanıcıdan Alışveriş Yapmak İstediği Ürünleri Seçme
while (true){
    let secilenIndex = prompt ("Alışveriş Sepetine Eklemek İstediğiniz Ürünlerin Numaralarını Giriniz (Çıkmak için q tuşunu kullanınız):");
    if(secilenIndex.toLowerCase()=='q'){
        break;
    }


 // Kullanıcının girdiği indeksi kontrol etme
 if(isNaN(secilenIndex) || secilenIndex < 1 || secilenIndex>urunler.length){
    alert("Geçersiz giriş! Lütfen doğru bir ürün numarası girin.");
 }

 // Seçilen ürünü sepete ekleme
let secilenUrun = urunler[secilenIndex -1];
yeniUrunSepeti.push(secilenUrun);
alert(`${secilenUrun.isim} sepete eklendi!`);
}



  // Alışveriş Sepetini ve Toplam Fiyatı Gösterme
console.log("\nAlışveriş Sepetiniz:");
let toplamFiyat =0;

yeniUrunSepeti.forEach(function(urun,index){
    console.log(`${urun.isim} | ${urun.kategori} | ${urun.fiyat} TL`);
    toplamFiyat+=urun.fiyat;
});

console.log(`\nToplam Fiyat: ${toplamFiyat} TL`);

if(yeniUrunSepeti.length>3){
    let Indirim= (toplamFiyat - toplamFiyat/15).toFixed(2);
    console.log(`Tebrikler İndirim Kazanmaya Hak Kazandınız ${Indirim} TL`);
}



