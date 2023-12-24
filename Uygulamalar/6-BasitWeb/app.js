// Yeni bir div öğesi oluştur
var mainDiv = document.createElement("div");
// mainDiv öğesine bir sınıf adı atar
mainDiv.className="main-div";

// Yeni bir h1 öğesi oluştur
var titleElement = document.createElement("h1");

// h1 öğesine bir sınıf adı atar
titleElement.className="main-title";

// h1 öğesinin metin içeriğini ayarlar
titleElement.textContent="Asabeneh Yetayeh challenges in 2020"

// Oluşturulan div öğesini h1 öğesine ekler
titleElement.appendChild(mainDiv);

// H1 ve div öğelerini sayfanın "myContainer" adlı bir div öğesine ekler
document.getElementById("myContainer").appendChild(titleElement);


var myDate = new Date();
myDate.appendChildi()