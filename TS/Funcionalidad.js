var button = document.getElementById("btn");
var paragraf = document.getElementById("paragraf");
button.addEventListener("click", esconderTexto);
function esconderTexto() {
    if (paragraf.classList.contains("isHidden")) {
        paragraf.classList.remove("isHidden");
        button.textContent = "Ver menos";
    }
    else {
        paragraf.classList.add("isHidden");
        button.textContent = "Ver más";
    }
}
