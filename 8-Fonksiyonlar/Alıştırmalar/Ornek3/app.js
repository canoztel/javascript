

let metin = prompt("Metninizi giriniz:");

let harf = prompt("Harfi giriniz:");

let sonuc=bul(harf);
alert("Harf sayısı:" + sonuc);
function bul(harf){
    let toplam=0;
    for(let i=0;i<=metin.length;i++){
        if(metin.charAt(i).toLowerCase()==harf.toLowerCase()){ //büyük ve küçük harf hassasiyetinin önüne geçmek için.
            toplam+=1;
        }
    }
    return toplam;
}