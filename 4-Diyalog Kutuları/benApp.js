const dizel = 24.53, lpg = 11.1, benzin = 22.25;
const yeniSatir = "\r\n";

const yakitMetni = "1.DİZEL" + yeniSatir
    + "2.BENZİN" + yeniSatir
    + "3.LPG" + yeniSatir +
    "Lütfen Yakıt Türünüzü Seçiniz!";


    let yakitTipiSec = Number(prompt(yakitMetni));

if (yakitTipiSec == "1" || yakitTipiSec == "2" || yakitTipiSec == "3") {
    let yakitLitresi = Number(prompt("Lütfen Almak İstediğinz Litre Tutarını Giriniz:"));
    let bakiye = Number(prompt("Lütfen Bakiyenizi Giriniz:"));

    if (yakitMetni == "1") {
        //DİZEL 
        let odenecekTutar = dizel*yakitLitresi;

        if (odenecekTutar < bakiye) {
            console.log("Ödeme Geçekleşti.");
            alert("ÖDEMENİZ GERÇEKLEŞTİ" + yeniSatir
                + "Kalan Bakiyeniz:" + (bakiye - odenecekTutar) + yeniSatir 
                + "İYİ YOLCULUKLAR :)");
        }
        else {
            console.log("Yetersiz Bakiye!");
            alert("YETERSİZ BAKİYE!!!" + yeniSatir
                + "Ödenecek Tutar: " + odenecekTutar + yeniSatir
                + "Bakiyeniz: " + bakiye + yeniSatir
                + "Eksik Tutar: " + (odenecekTutar - bakiye) + yeniSatir);
        }
    }
    else if (yakitMetni == "2") {
        //BENZİN
        let odenecekTutar = benzin * yakitLitresi;

        if (odenecekTutar < bakiye) {
            console.log("Ödeme Geçekleşti.");
            alert("ÖDEMENİZ GERÇEKLEŞTİ" + yeniSatir
                + "Kalan Bakiyeniz:" + (bakiye - odenecekTutar) + yeniSatir 
                + "İYİ YOLCULUKLAR :)");
        }
        else {
            console.log("Yetersiz Bakiye!");
            alert("YETERSİZ BAKİYE!!!" + yeniSatir
                + "Ödenecek Tutar: " + odenecekTutar + yeniSatir
                + "Bakiyeniz: " + bakiye + yeniSatir
                + "Eksik Tutar: " + (odenecekTutar - bakiye) + yeniSatir);
        }

    }
    else if (yakitMetni == "3") {
        //LPG
        let odenecekTutar = lpg * yakitLitresi;

        if (odenecekTutar < bakiye) {
            console.log("Ödeme Geçekleşti.");
            alert("ÖDEMENİZ GERÇEKLEŞTİ" + yeniSatir
                + "Kalan Bakiyeniz:" + (bakiye - odenecekTutar) + yeniSatir 
                + "İYİ YOLCULUKLAR :)");
        }
        else {
            console.log("Yetersiz Bakiye!");
            alert("YETERSİZ BAKİYE!!!" + yeniSatir
                + "Ödenecek Tutar: " + odenecekTutar + yeniSatir
                + "Bakiyeniz: " + bakiye + yeniSatir
                + "Eksik Tutar: " + (odenecekTutar - bakiye) + yeniSatir);
        }
    }
}
else{

    alert("Lütfen Geçerli Bir Yakıt Türü Giriniz:");
}
