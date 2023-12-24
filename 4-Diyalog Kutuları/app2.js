// Ad-Soyad ve 11 haneli TCKN alan ve kesin doldurulması istenilen uygulama

let ad=prompt("Adınızı ve Soyadınızı Giriniz: ");
let tckn=prompt("11 Haneli TCKN Giriniz: ");

checked(ad, tckn);

function checked(ad, tckn){

    if(ad!=""){
        if(tckn.length==11){
            console.log("tckn tam haneli girilmiştir.")
        }
        else if(tckn.length<11){
            console.log("Eksik hane tespiti!!!" + " " + "Tekrar Deneyiniz");
            prompt("11 Haneli TCKN Giriniz: ");
        }
            
        else if(tckn.length>11){
            console.log("Fazla hane tespiti!!!" + " " + "Tekrar Deneyiniz");
            prompt("11 Haneli TCKN Giriniz: ");
        }
        else{
            alert("Lütfen Boş Bırakmayınız!");
            prompt("11 Haneli TCKN Giriniz: ");
        }
        
    }
    else {
        alert("Lütfen Boş Bırakmayınız!");
        prompt("Adınızı ve Soyadınızı Giriniz: ");
        prompt("11 Haneli TCKN Giriniz: ");
    }
}
