function isValidDataConsulta(data) {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;


    let maxDate = new Date();
    maxDate = (yyyy + 1) + '-' + mm + '-' + dd;

    if (today > data) {
        return false;
    } else if (maxDate < data) {
        return false;
    }

    return true;
}

function confirmarConsulta() {
    if (document.querySelector("#date").value !== "") {


        if (isValidDataConsulta(document.querySelector("#date").value)) {
            document.querySelector(".InvalidDate").style.visibility = "hidden";
            document.querySelector(".message").style.display = "flex";
        } else {
            document.querySelector(".InvalidDate").style.visibility = "visible";
        }

        console.log(document.querySelector("#date").value);

    } else {
        document.querySelector(".InvalidDate").style.visibility = "visible";
    }
}