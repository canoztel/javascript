
var numberBox = document.querySelectorAll(".number-box");


numberBox.forEach(box => {
    const number = parseInt(box.textContent); //It takes the text content in each box and converts that text to an integer.

    if (isPrime(number)) {
        box.style.backgroundColor = "tomato"//Makes the background of prime numbers white
    }
    else if (number % 2 === 0) {
        box.style.backgroundColor = "LimeGreen"; //Makes the background of even numbers green
    }
    else {
        box.style.backgroundColor = "Gold"; //Makes the background of odd numbers red
    }
});

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If num is divisible by i, it is not prime
        }
    }
    return true;
}



document.addEventListener('DOMContentLoaded', function () {
    const titleElement = document.getElementById('title2');

    titleElement.innerHTML = titleElement.innerHTML
        .replace(/green/g, '<span class="green">green</span>')
        .replace(/yellow/g, '<span class="yellow">yellow</span>')
        .replace(/red/g, '<span class="red">red</span>');
});


/*A DIFFERENT METHOD*/

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }


// var numberContainer = document.querySelectorAll(".number-box");


// for(let i=0;i<=100;i++){
//     const numberDiv= document.createElement("div");
//     numberDiv.classList.add("number");

//     numberDiv.textContent=i;

//     if(i%2===0){
//         numberDiv.classList.add("even");
//     }
//     else{
//         numberDiv.classList.add("prime");
//     }

//     if(isPrime(i)){
//         numberDiv.classList.add("tomato");
//     }
//     numberContainer.appendChild(numberDiv);
// }