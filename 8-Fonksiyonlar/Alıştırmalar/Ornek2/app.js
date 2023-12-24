//2. Klavyeden girilen iki sayı arasında rastgele sayılar üretecek bir fonksiyon yazınız.
//Math.random() [0,1) arasında rastgele float türünde sayi üretir.
//Math.floor(Math.random()) ile integer türüne çevirebiliriz.

function rastgeleSayiUret(min, max) {
    // min ve max arasında bir rastgele sayı üretmek için Math.random() kullanılır.
    // Üretilen sayı [0, 1) aralığında olur, yani 0 dahil, 1 hariç.
    // Bu nedenle, (max - min + 1) ile çarpılıp, min ile max arasında rastgele bir tam sayı elde edilir.
    const rastgeleSayi = Math.floor(Math.random() * (max - min + 1)) + min;
    return rastgeleSayi;
  }
  
  // Kullanıcıdan minimum ve maksimum değerleri alalım
  const minDeger = parseInt(prompt('Minimum değeri girin:'));
  const maxDeger = parseInt(prompt('Maksimum değeri girin:'));
  
  // Rastgele sayı üretelim ve ekrana yazdıralım
  const rastgeleSayi = rastgeleSayiUret(minDeger, maxDeger);
  console.log(`Üretilen rastgele sayı: ${rastgeleSayi}`);
  