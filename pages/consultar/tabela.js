var dataSet = [
    ["111111111", "Michael Baptista", "19", "Não", "Não"],
    ["222222222", "Anna Laura", "20", "Sim", "Não"],
    ["333333333", "Paulo Santos", "21", "Sim", "Não"],
    ["444444444", "Alexandre Santos", "19", "Sim", "Não"],
    ["555555555", "Cardoso Baptista", "19", "Sim", "Não"],
    ["666666666", "Maria Baptista", "19", "Sim", "Não"],
    ["777777777", "Paulo Santos", "21", "Sim", "Não"],
    ["888888888", "Paulo Santos", "21", "Sim", "Não"],
    ["999999999", "Lopes Santos", "21", "Sim", "Não"],
    ["121211212", "Carolina Santos", "21", "Sim", "Não"],
    ["131313131", "Ana Santos", "21", "Sim", "Não"],
    ["141414144", "Rui Santos", "21", "Sim", "Não"],
    ["151515151", "Madalena Baptista", "19", "Sim", "Não"],
    ["161661166", "Sofia Baptista", "19", "Sim", "Não"],
    ["181818818", "Carolina Baptista", "19", "Sim", "Não"]

];

$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        columns: [
            {title: "Numero Cliente"},
            {title: "Nome"},
            {title: "Idade"},
            {title: "Vacina - dose 1"},
            {title: "Vacina - dose 2"}
        ],
        "language": {
            "lengthMenu": "Display _MENU_ records per page",
            "zeroRecords": "Não foi encontrado nada - desculpe",
            "info": "A mostrar pagina",
            "infoEmpty": "Não há registos disponíveis",
            "paginate": {
                "previous": "Anterior",
                "next": "Próximo"
            },
        },
    });

});

function myFunction() {
    alert(document.querySelector("#example.DtaTable").tHead.innerHTML);
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


document.querySelector("#stats").addEventListener("mouseover", function(){
    document.querySelector(".tooltiptext").style.visibility ="visible";
})
document.querySelector("#stats").addEventListener("mouseout", function(){
    document.querySelector(".tooltiptext").style.visibility ="hidden";
})