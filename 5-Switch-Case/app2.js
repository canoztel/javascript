let yeniSatir= "\r\n";
let bakiye=1000;

let metin ="1- Bakiye Görüntüleme" + yeniSatir
+ "2- Para Çekme" + yeniSatir
+ "3- Para Yatırma" + yeniSatir
+ "4-Çıkış" + yeniSatir 
+ "Lütfen Yapmak İstediğiniz İşlemi Seçiniz:";

let secim=prompt(metin);

switch(secim){

    case "1": //Bakiye görüntüleme
        alert("Bakiyeniz:" + bakiye);
        break;

    case "2": // Para Çekme2
    let cekilecekTutar =Number(prompt("Çekilecek Tutarı Giriniz:"));
    if(cekilecekTutar<bakiye){
        alert("Bakiyeniz:" + bakiye + yeniSatir 
        + "Çekilecek Tutar:" + cekilecekTutar + yeniSatir
        + "Yeni Bakiyeniz:" + (bakiye-cekilecekTutar));
    }
    else{
        alert("Yetersiz Bakiye!" + yeniSatir 
        + "Bakiyeniz:" + bakiye + yeniSatir 
        + "Çekilecek Tutar:" + cekilecekTutar + yeniSatir 
        + "İşlem Yapabilmeniz için " + (cekilecekTutar-bakiye) + " tl gereklidir.");
    }
        break;

    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak Tutarı Giriniz:"));
        alert("Bakiyeniz:" + bakiye + yeniSatir 
        + "Yatırılacak Tutar:" + yatirilacakTutar + yeniSatir
        + "Yeni Bakiyeniz:" + (bakiye + yatirilacakTutar) );
        break;
    case "4":
        console.log("Sistemden çıkış yapılmıştır.");
        break;
    default:
}