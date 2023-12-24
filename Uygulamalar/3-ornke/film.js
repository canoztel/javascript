/*

Konu Başlığı: Film İnceleme Uygulaması

Açıklama:
Bu uygulama, kullanıcının belirli bir filmi incelemesine 
ve puanlamasına olanak tanıyan bir film inceleme uygulaması olabilir.
İşte bu uygulama için bazı özellik fikirleri:

Film bilgilerini girmek için bir form (film adı, yönetmen, tür, yayın tarihi vb.).
Kullanıcı tarafından verilen puanı ve yorumu kaydetmek.
Verilen puanlara göre ortalama puanı hesaplamak.
Belirli bir puan aralığına göre filmi derecelendirmek (örneğin, 1-3 kötü, 4-6 ortalama, 7-10 iyi).
Kullanıcının verdiği yorumları göstermek.
*/ 

let filmler = [

   { id:1 , isim:"Esaretin Bedeli" , tür:"Drama" , yayinTarihi: 1994 , yonetmen:" Frank Darabont", imbd:9.5},
   { id:2 , isim:"Kara Şövalye" , tüsr:"Aksiyon "+"Drama "+"Suç" , yayinTarihi:2008, yonetmen:"Christopher Nolan", imbd:9.3,},
   { id:3 , isim:"Baba" , tür:"Aksiyon "+"Suç", yayinTarihi:1972,yonetmen:"Francis Ford Coppola", imbd:9.2},
   { id:4 , isim:"Baba 2" , tür:"Aksiyon "+"Suç", yayinTarihi:1974, yonetmen:"Francis Ford Coppola", imbd:9.0},
   { id:5 , isim:"Dövüş Kulubü" , tür:"Drama", yayinTarihi:1999, yonetmen:" David Fincher",imbd:8.9},
   { id:6 , isim:"Yüzüklerin Efendisi" , tür:"Aksiyon"+"Suç"+"Macera", yayinTarihi:2003, yonetmen:"Peter Jackson", imbd:8.9},
   { id:7 , isim:"Ucuz Roman" , tür:"Drama "+"Suç", yayinTarihi:1994, yonetmen:" Quentin Tarantino", imbd:8.9},
   { id:8 , isim:"İyi, Kötü ve Çirkin",tür:"Macera " + "Batılı",yayinTarihi:1966, yonetmen:"Sergio Leone", imbd:8.9},
   { id:9 , isim:"Başlangıç" , tür:"Aksiyon "+"Suç "+"Bilimkurgu", yayinTarihi:2010, yonetmen:"Christopher Nolan", imbd:8.9},
   { id:9 , isim:"Yıldızlararası" , tür:"Aksiyon "+"Suç "+"Bilimkurgu", yayinTarihi:2014, yonetmen:"Christopher Nolan", imbd:8.8},
]


filmler.forEach(function(film) {

    console.log(`${film.id}.${film.isim} | ${film.tür} | ${film.yayinTarihi} | ${film.yonetmen} | ${film.imbd}`);
    
});