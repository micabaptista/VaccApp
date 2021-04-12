/** MODAL LOGOUT*/
document.querySelector(".logout").addEventListener("click", function () {
    document.querySelector("#ModalLogout").style.display = "flex";
});

function logout(){
    window.open("../../index.html","_self");
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



const date = new Date();

const renderCalendar = () => {
        date.setDate(1);

        const monthDays = document.querySelector(".days");

        const lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();

        const prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();

        const firstDayIndex = date.getDay();

        const lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();

        const nextDays = 7 - lastDayIndex - 1;

        const months = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro ",
        ];

        document.querySelector(".date h1").innerHTML = months[date.getMonth()];

        document.querySelector(".date p").innerHTML = data();

        //new Date().toDateString();

        function data() {
            return "Segunda-feira,  12 Abril 2021"

        }


        let days = "";

        for (let x = firstDayIndex; x > 0; x--) {
            days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            if (
                i === new Date().getDate() &&
                date.getMonth() === new Date().getMonth()
            ) {
                days += `<div class="today">${i}</div>`;
            } else {
                days += `<div>${i}</div>`;
            }
        }

        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="next-date">${j}</div>`;
            monthDays.innerHTML = days;
        }
    }
;

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

document.querySelector(".days").addEventListener("click", () => {
    window.open("dia.html", "_self");
});


function backAgenda(){
    window.open("index.html",'_self');
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