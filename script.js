const knap = document.querySelector('#knap');
const box = document.querySelector('nav');

knap.addEventListener('click', toggle);

function toggle() {
    box.classList.toggle('toggle');
}

/*slideshow for mockup*/

var myIndex = 0;
carousel();

function carousel() {
    console.log("carousel");
    var i;
    var x = document.getElementsByClassName("mockup");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}
