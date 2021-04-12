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


//fake dataBase com os pacientes
let Paulo = {
    age: 21,
    nome: 'Paulo',
    vacina: '- Ainda nao atribuido',
    historico: "n/a",
    dataDose1: "n/a",
    dataDose2: "n/a"
}

let Anna = {
    idade: "22",
    nome: "Anna",
    vacina: "Pfizer",
    historico: "- Tomou a primeira dose",
    dataDose1: "22/2/2021",
    dataDose2: "n/a"

};


let Michael = {
    age: "20",
    nome: "Michael",
    vacina: "- Ainda nao atribuido",
    historico: "n/a",
    dataDose1: "n/a",
    dataDose2: "n/a"
}


let Alexandre = {
    age: "20",
    nome: "Alexandre",
    vacina: "AstraZeneca",
    historico: "- Já tomou as doses necessárias.",
    dataDose1: "13/3/2021",
    dataDose2: "19/3/2021"
}

localStorage.setItem("123456789", JSON.stringify(Paulo));
localStorage.setItem("987654321", JSON.stringify(Anna));
localStorage.setItem("098765432", JSON.stringify(Michael));
localStorage.setItem("234567890", JSON.stringify(Alexandre));

var getPersonByNumber = document.getElementById("search");


getPersonByNumber.addEventListener("click", func);


var getPersonByNumber1 = document.getElementById("inputClientNumber");


getPersonByNumber1.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        func();
    }
});


function func() {
    document.querySelector("#vacinaTomada").style.visibility = "hidden";


    for (let i = 0; i < document.querySelectorAll("#paulo p").length; i++) {
        document.querySelectorAll("#paulo p")[i].innerHTML = "";
    }

    var contentSearch = document.getElementById("inputClientNumber").value;

    if (contentSearch !== "123456789" && contentSearch !== "234567890" && contentSearch !== "987654321"
        && contentSearch !== "098765432") {

        document.querySelector("#information").style.visibility = "hidden"
        document.querySelector("#marcarVacina").style.visibility = "hidden";

        document.querySelector("#InvalidSNS").style.display = "inline";
        return;
    }

    document.querySelector("#InvalidSNS").style.display = "none";


    var getInfos = localStorage.getItem(contentSearch).valueOf();


    var lol = Object.values(JSON.parse(getInfos));

    ///////////////

    var createPargrafo = document.createElement("p");

    var createBreak = document.createElement("br");

    var createBreak2 = document.createElement("br");

    var createBreak3 = document.createElement("br");

    var createBreak4 = document.createElement("br");

    var createBreak5 = document.createElement("br");

    var createBreak6 = document.createElement("br");

    ///////////////
    createPargrafo.append("Nome: " + lol[1] + " ");

    createPargrafo.append(createBreak);

    createPargrafo.append("Idade: " + lol[0] + " ");

    createPargrafo.append(createBreak2);

    createPargrafo.append("Tipo Vacina: " + lol[2] + " ");

    createPargrafo.append(createBreak3);


    var getTipoVacina = String(lol[2]);

    var getdataDose1 = String(lol[4]);

    var getdataDose2 = String(lol[5]);

    if (getTipoVacina !== "- Ainda nao atribuido") {
        createPargrafo.append("Historico: " + lol[3] + " ");
        createPargrafo.append(createBreak4);

        if (getdataDose1 !== "n/a") {
            createPargrafo.append("Data da 1ª dose: " + lol[4] + " ");
            createPargrafo.append(createBreak5);

            if (getdataDose2 !== "n/a") {
                createPargrafo.append("Data da 2ª dose: " + lol[5] + " ");
                createPargrafo.append(createBreak6);
            }
        }
    }

    if (getdataDose2 === "n/a") {

        var sdsa = document.createElement("ul");

        createPargrafo.append(sdsa);

        document.getElementById("information").style.visibility = "visible";

        document.querySelector("#paulo").append(createPargrafo);

        document.querySelector("#marcarVacina").style.cursor = "pointer"
        document.querySelector("#marcarVacina").style.visibility = "visible";

        //////////////
        //Ir para a marcação da vacina
        document.getElementById("marcarVacina").onclick = function () {

            if (getTipoVacina === "- Ainda nao atribuido") {
                location.href = "../registar/marcacao.html";
                var chooseTypeVaccine = document.createElement("select");
                chooseTypeVaccine.options("Pfizer");

                var getUl = document.getElementById("marcação");

                getUl.append(chooseTypeVaccine);
            }

            if (getdataDose1 !== "n/a") {
                location.href = "../registar/marcacao2.html";
                var chooseTypeVaccine = document.createElement("select");
                chooseTypeVaccine.options("Pfizer");

                var getUl = document.getElementById("marcação");

                getUl.append(chooseTypeVaccine);
            }
        };
    } else {
        var sdsa = document.createElement("ul");

        createPargrafo.append(sdsa);

        document.getElementById("information").style.visibility = "visible";

        document.querySelector("#paulo").append(createPargrafo);

        document.querySelector("#marcarVacina").style.visibility = "hidden";
        document.querySelector("#vacinaTomada").style.visibility = "visible";

    }
}


var closeElement = document.querySelector(".close");

closeElement.addEventListener("click", function () {
    document.querySelectorAll("#information")[0].style.visibility = "hidden";
    document.querySelector("#vacinaTomada").style.visibility = "hidden";
    document.querySelector("#marcarVacina").style.visibility = "hidden";
    document.querySelector("#inputClientNumber").value = "";


});


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