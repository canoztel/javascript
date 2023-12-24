// HTML içindeki "inputBox" id'sine sahip giriş kutusunu seçiyoruz.
let input = document.getElementById('inputBox');

let buttons = document.querySelectorAll('button');

// İşlem yapılacak metni (hesaplama ifadesini) saklamak için bir değişken tanımlıyoruz.
let string ="";

// buttons NodeList'ini bir diziye çeviriyoruz.
let arr =Array.from(buttons);

// Her bir düğme üzerinde döngü oluşturuyoruz.
arr.forEach(button =>{
     // Her düğme için bir tıklama olayı dinleyicisi (event listener) ekliyoruz.
    button.addEventListener('click', (e)=>{
        // Eğer tıklanan düğme "=" ise:
        if(e.target.innerHTML == '='){
            // İçerisindeki hesaplama ifadesini eval fonksiyonu ile hesaplıyoruz.
            string = eval(string);
            // Hesaplanan sonucu giriş kutusuna yazıyoruz.
            input.value=string;
        }

         // "AC" düğmesine tıklanırsa hesaplama ifadesini sıfırla (temizle) ve giriş kutusunu temizle.
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
         // "DEL" düğmesine tıklanırsa hesaplama ifadesinin son karakterini sil ve giriş kutusunu güncelle.
        else if(e.target.innerHTML =="DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
        // Tıklanan düğmenin içeriğini hesaplama ifadesine ekliyoruz.
        string += e.target.innerHTML;
        // Hesaplama ifadesini giriş kutusuna yazıyoruz.
        input.value = string;
        }


    })
})



/*
Sayfa yüklendiğinde, "inputBox" adlı bir giriş kutusu ve düğmeler (butonlar) seçilir.

Bir boş dize olan string değişkeni tanımlanır. Bu değişken, hesaplama ifadesini tutar.

Düğmeler NodeList'i bir JavaScript dizisine (arr) dönüştürülür.

Her düğme üzerinde bir döngü (forEach) oluşturulur. Her düğme için bir tıklama olayı dinleyicisi eklenir.

Tıklanan düğmenin içeriği kontrol edilir. Eğer "=" ise, eval fonksiyonu kullanılarak hesaplama ifadesi değerlendirilir ve sonuç input kutusuna yazılır. Eğer "=" değilse, düğmenin içeriği hesaplama ifadesine eklenir ve hesaplama ifadesi input kutusuna yazılır.

Bu şekilde, kullanıcılar düğmelere tıkladıkça hesaplama ifadesini oluşturabilirler ve "=" düğmesine tıkladıklarında sonucu görüntüleyebilirler.
*/ 