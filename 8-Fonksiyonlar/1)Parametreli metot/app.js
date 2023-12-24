let yas = Number(prompt("Lütfen Yaşınızı Giriniz:"));

kontrolEt(yas);

function kontrolEt(){
    if(yas<=18){
        console.log("Lütfen 18 yaşını doldurmadan başvuru yapmayınız.")

    }
    else{
        console.log("Ehliyetinizi alabilirsiniz.");
    }
}


