window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#knap").addEventListener("click", toggle);
}

function toggle() {
    console.log("toggle");
    document.querySelector("#toggle").classList.toggle("hidden");

    let erSkjult = document.querySelector("#toggle").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#knap").textContent = "☰";
    } else {
        document.querySelector("#knap").textContent = "X";
    }
}





/*const knap = document.querySelector('#knap');
const box = document.querySelector('nav');

knap.addEventListener('click', toggle);

function toggle() {
    box.classList.toggle('toggle');
}*/
