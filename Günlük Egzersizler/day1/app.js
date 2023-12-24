

/*prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse, 
geri bildirimde bulunun:'Sürecek kadar yaşlısınız', ancak 18 değilse, 
18 yaşına girmesi gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin. */
let myAge = Number(prompt("Enter my age:"));
console.log(`Benim yaşım ${myAge}.`);

let yourAge = Number(prompt("Enter your age:"));
console.log(`Senin yaşın ${yourAge}.`);

if (myAge >= 18) {
    console.log("tebrikler ehliyet alabilirsiniz.");
}
else if (myAge <= 18) {
    console.log("ehliyet alabilmek için bekleyiniz.");
}
else {
    console.log("herhangi bir sayi girilmedi.");
}

/*
if… else kullanarak myAge ve yourAge değerlerini karşılaştırın. 
Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. 
Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın. */

switch (true) {

    case myAge > yourAge:
        console.log("Benim yaşım senin yaşından daha büyük.");
        break;

    case yourAge > myAge:
        console.log("Senin yaşın beninm yaşımdan daha büyük.");
        break;

    case yourAge === myAge:
        console.log("Yaşlarımız eşit.");
        break;

    default:
        console.log("herhangi bir sayi girilmedi.");

}
/*
Çift sayılar 2'ye tam bölünür kalan sıfırdır. Bir sayının çift olup olmadığını
*/

let evenNum = Number(prompt("bir sayi giriniz:"));

if (evenNum % 2 === 0) {
    console.log(`${evenNum} sayisi çifttir.`);
}
else {
    console.log(`${evenNum} sayisi tektir.`);
}



/*
Öğrencilere puanlarına göre not verebilecek bir kod yazın:

80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
function notHesapla(puan) {

    var not;

    switch (true) {
        case (puan >= 80 && puan <= 100):
            not = "A";
            break;

        case (puan >= 70 && puan < 80):
            not = "B";
            break;
        case (puan >= 60 && puan < 70):
            not = "C";
            break;
        case (puan >= 50 && puan < 60):
            not = "D";
            break;
        case (puan >= 0 && puan < 50):
            not = "B";
            break;
        default:
            not = "gecersiz puan";
            break;

    }
    return not;
}

var puan = parseInt(prompt("Notunuzu giriniz:"));

console.log("notunuz:" + notHesapla(puan));






function hangiMevsim(ay) {

    var mevsim;

    switch (true) {
        case (ay === 'eylül' || ay === 'ekim' || ay === 'kasım'):
            mevsim = 'SonBahardır';
            break;

        case (ay === 'aralık' || ay === 'ocak' || ay === 'şubat'):
            mevsim = 'Kıştır';
            break;
        case (ay === 'mart' || ay === 'nisan' || ay === 'mayıs'):
            mevsim = 'İlkBahardır';
            break;
        case (ay === 'haziran' || ay === 'temmuz' || ay === 'ağustos'):
            mevsim = 'Yazdır';
            break;

        default:
            console.log("herhangi bir ay girmediniz:");
    }
    return mevsim;
}

var ay = prompt("12 aydan birini giriniz:");
console.log(hangiMevsim(ay.toLowerCase()));// Küçük harfe dönüştürerek kontrol edelim


// Kullanıcıdan ayı al
var month = prompt("Bir ay girin:").toLowerCase(); // Küçük harfe çevrildi

// Ayın gün sayısını hesapla
var daysInMonth;

switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        daysInMonth = 31;
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        daysInMonth = 30;
        break;
    case "february":
        daysInMonth = 28;
        break;
    default:
        daysInMonth = "Geçersiz ay";
}

// Sonucu ekrana yazdır
if (typeof daysInMonth === "number") {
    console.log(month + " ayı " + daysInMonth + " gün içerir.");
} else {
    console.log(daysInMonth);
}