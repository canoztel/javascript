let sayi = Number(prompt("Lütfen 1 ile 7 arasında bir sayı giriniz:"));

switch (sayi) { //1 2 3 4  5 6 7
    case 1:
        //kod blokları
        console.log("Bugün Günlerden Pazartesidir.");
        break;
    case 2:
        console.log("Bugün Günlerden Salidir.");
        break;
     case 3:
        console.log("Bugün Gnleden Çarşambadir.");
        break;
    case 4:
        console.log("Bugün Günlerden Perşembedir.");
        break;
    case 5:
        console.log("Bugün Günlerden Cumadir.");
        break;
    case 6:
        console.log("Bugün Günlerden Cumartesidir.");
        break;
    case 7:
        console.log("Bugün Günlerden Pazardir.");
        break;    

    default:
        alert("Tanimlama Disina Cikildi!!!");
        break;

}