function encomendar() {
    document.querySelector(".message").style.display = "flex";
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function updateDataInModal(produto1, produto2, produto3) {
    if (produto1 > 0) {
        document.querySelectorAll(".modal-content > p")[0].innerHTML = "x" + produto1 +
            " Pfizer";
    } else {
        document.querySelectorAll(".modal-content > p")[0].innerHTML = "";
    }
    if (produto2 > 0) {
        document.querySelectorAll(".modal-content > p")[1].innerHTML = "x" + produto2 +
            " AstraZeneca";
    } else {
        document.querySelectorAll(".modal-content > p")[1].innerHTML = "";

    }
    if (produto3 > 0) {
        document.querySelectorAll(".modal-content > p")[2].innerHTML = "x" + produto3 +
            " Moderna";

    } else {
        document.querySelectorAll(".modal-content > p")[2].innerHTML = "";

    }
}

function isValidData() {
    const sizeProduto1 = document.querySelector("#input-Produto-1").value;
    const sizeProduto2 = document.querySelector("#input-Produto-2").value;
    const sizeProduto3 = document.querySelector("#input-Produto-3").value;
console.log(sizeProduto1);
console.log(sizeProduto2);
console.log(sizeProduto3);
    if(sizeProduto1 === "" && sizeProduto2 === "" && sizeProduto3 === "" ){
        document.querySelector(".dados-invalidos").style.visibility = "visible";
        return;
    }
    // caso algums destes valores sejam != "" então muda a mensagem otherwise show error message
    if (sizeProduto1 >= 0 && sizeProduto2 >= 0 && sizeProduto3 >= 0) {
        updateDataInModal(sizeProduto1, sizeProduto2, sizeProduto3);
        document.querySelector(".dados-invalidos").style.visibility = "hidden";
        modal.style.display = "block";

    } else {
        document.querySelector(".dados-invalidos").style.visibility = "visible";
    }


}

// When the user clicks on the button, open the modal
btn.onclick = function () {
    isValidData();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

/** MODAL LOGOUT*/
document.querySelector(".logout").addEventListener("click", function () {
    document.querySelector("#ModalLogout").style.display = "flex";
});

function logout() {
    window.open("../../index.html", "_self");
}

function closeModalLogout() {
    document.querySelector("#ModalLogout").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === document.querySelector("#ModalLogout")) {
        document.querySelector("#ModalLogout").style.display = "none";
    }
}
/** MODAL LOGOUT END*/

function backAgenda(){
    window.open("../agenda/index.html",'_self');
}

/** MODAL settings*/
document.querySelector(".settings").addEventListener("click", function () {

    document.querySelector("#ModalSettings").style.display = "flex";
});

document.querySelector(".guardarModal").addEventListener("click", function () {
    document.querySelector("#ModalSettings").style.display = "none";
});

document.querySelector(".closeSettings").addEventListener("click", function () {

    document.querySelector("#ModalSettings").style.display = "none";
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === document.querySelector("#ModalSettings")) {
        document.querySelector("#ModalSettings").style.display = "none";
    }
}
/** MODAL settings END*/