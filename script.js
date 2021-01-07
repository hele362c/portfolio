const knap = document.querySelector('#knap');
const box = document.querySelector('nav');

knap.addEventListener('click', toggle);

function toggle() {
    box.classList.toggle('toggle');
}
