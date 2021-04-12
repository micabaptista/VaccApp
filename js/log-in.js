let username;
let password;
let notificacao;


function login() {
    if ((document.querySelector('[type="text"]').value !== "") && (document.querySelector('[type="password"]').value !== "")) {
         username = document.querySelector('[type="text"]').value;
         password = document.querySelector('[type="password"]').value;

        window.location.replace("pages/agenda/index.html");
    }else{
        document.querySelector(".dados-invalidos\n").style.display = "block";
    }
}

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);


function clear() {
    document.querySelector('[type="text"]').value = "";
    document.querySelector('[type="password"]').value = "";
}


function lostPassword() {
    alert("Porfavor contacte o" +
        " apoio ao cliente através do email vaccapp@apoio.pt")
}


setInterval(function () {
    if (document.querySelector('[type="text"]').value !== "" || document.querySelector('[type="password"]').value !== "") {
        document.querySelector(".cancelbtn").style.display = "block";
    } else {
        document.querySelector(".cancelbtn").style.display = "none";

    }
}, 1000)



