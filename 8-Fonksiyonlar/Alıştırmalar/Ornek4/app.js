let sayi = Number(prompt("Lütfen Bir sayi Giriniz:"));
perfectNumber(sayi);

function perfectNumber(sayi){
    let toplam=0;
    debugger
    for(let i=1;i<=sayi/2;i++){
        if(sayi%i==0){
            toplam+=i;
        }
    }
debugger
    if(toplam==sayi){
        alert("Girilen Sayi Mükemmel Sayidir.");
    }
    else{
        alert("Girilen Sayi Mükemmel Sayi Değildir.");
    }
}

