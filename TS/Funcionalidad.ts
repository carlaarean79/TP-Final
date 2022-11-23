let button = document.getElementById("btn")as HTMLButtonElement;
let paragraf =document.getElementById("paragraf")as HTMLParagraphElement;
button.addEventListener("click",esconderTexto);
function esconderTexto(){
    if (paragraf.classList.contains("isHidden")){
        paragraf.classList.remove("isHidden");
button.textContent ="Ver menos";
    } else {
        paragraf.classList.add("isHidden");
        button.textContent = "Ver más";
    }
} 