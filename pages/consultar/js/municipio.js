// add eventListeners
let li = document.querySelectorAll(".listDistritos > ul >    .distrito-available");
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {

        showMunicipio();

    });
}


function showMunicipio() {
    document.querySelector(".content-main-select-distrito").style.display = "none";
    document.querySelector(".municipio-information").style.display = "flex";
    document.querySelector(".backToMunicipio").style.display = "flex";
}

function backToMunicipio() {
    document.querySelector(".content-main-select-distrito").style.display = "flex";
    document.querySelector(".municipio-information").style.display = "none";
    document.querySelector(".backToMunicipio").style.display = "none";
    document.querySelector(".municipio-information").style.display = "none";

}

function scrool() {
    if (document.documentElement.clientHeight <= 664) {
        window.scrollTo(0, document.body.scrollHeight);
    }
}

function moveUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});

}

