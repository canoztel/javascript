const containers = document.querySelectorAll(".container");

containers.forEach( container =>{

    container.addEventListener("click",() =>{
        removeActive();
        container.classList.add("active");
    })

})

function removeActive(){
    containers.forEach(container =>{
        container.classList.remove("active");
    })
}