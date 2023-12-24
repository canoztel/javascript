// x değeri klavyeden girildiğinde 1 + 2 + .... + (x - 1) + x seri toplama değerini hesaplayan fonksiyon yazınız.



let a = Number(prompt("Bir sayi giriniz:"));
let toplam =0;
alert(seriToplama(a));

function seriToplama(girilenSayi){
    for(let i=1; i<=girilenSayi; i++){
        toplam+=i;
    }
    return toplam;
}