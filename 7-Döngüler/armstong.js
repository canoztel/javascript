//153= 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 =153
let sayi = prompt("sayi giriniz");
let toplam=0;
for(let i=0 ; i<sayi.length; i++){
    let rakam= sayi.charAt(i) // bu metod verilen index numarasının karakterini return eder.
    toplam+= rakam*rakam*rakam;
}

if(Number(sayi)==toplam){
    alert("Armstrondur.");
} else{
    alert("Armstrong değildir.");
}