
/*
getElementsByTagName(): bir etiket adını dize olarak alan bir parametre alır ve bu yöntem bir HTMLCollection nesnesi döndürür. 
HTMLCollection bir HTML elementlerinin array benzeri bir nesnesidir.
*/
console.log("----------------------------\nTagName\n----------------------------");
const allTitles= document.getElementsByTagName("h1");
console.log(allTitles); //HtmlCollections > 
console.log(allTitles.length); //3

for(let i=0; i<allTitles.length;i++){
    console.log(allTitles[i])
}


console.log("----------------------------\nClass\n----------------------------");
const allClasses = document.getElementsByClassName("title2");
console.log(allClasses);
console.log(allClasses.length);

for(let j=0;j<allClasses.length;j++){
    console.log(allClasses[j]);
}

console.log("----------------------------\nİD\n----------------------------");
const allId= document.getElementById("first-title");
console.log(allId);


console.log("----------------------------\nQuerySelector\n----------------------------");
//querySelector: etiket adı, kimlik veya sınıf tarafından seçilen HTML elementini seçmek için kullanılabilir. Etiket adı kullanılırsa, yalnızca ilk element seçilir.
const allTitless = document.querySelectorAll('h1') // selects all the available h1 elements in the page

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}


//setattribute() metodu, herhangi bir html öznitelik ekler. İki parametre alır: öznitelik türü ve öznitelik adı.
const titles = document.querySelectorAll('h2')
titles[5].setAttribute('class', 'title2')
titles[4].classList.add('title',"last-title");
console.log(titles);

//Eklemeye benzer şekilde, bir elemandan sınıfı da kaldırabiliriz. Bir elemandan belirli bir sınıfı kaldırabiliriz.
titles[4].classList.remove('title',"last-title");

//textContent HTML elemanına metin eklemek için kullanılır.
const tit= document.querySelectorAll("h2")
tit[6].textContent ="text content ile eklendi";


/*
textContent bir HTML elemanına metin eklemek için tasarlanmıştır ancak 
innerHTML bir metin veya HTML elemanı veya elemanları bir çocuk olarak ekleyebilir.

ir ebeveyn elemana tamamen yeni bir child içeriği eklemek veya değiştirmek istediğimizde 
innerHTML özelliğini kullanırız. Atadığımız değer HTML elemanlarından oluşan bir dizi olacaktır.
*/ 

titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})

titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
      title.style.backgroundColor = 'red'
    } else {
      title.style.backgroundColor = 'green'
    }
  })