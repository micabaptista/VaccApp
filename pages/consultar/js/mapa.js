let selectDistrito = (distrito) => {

    cleanBreadCumb();
    updateBreadCrumb(distrito);

    document.querySelector(".lisboa").style.display = "none";
    document.querySelector(".porto").style.display = "none";
    document.getElementById("myDropdown").classList.remove("show");
    document.querySelector(".dropdown").style.display = "none";
    document.querySelector(".back").style.display = "flex";
    document.querySelector(".select-municipio").style.display = "flex";
    document.querySelector("." + distrito).style.display = "flex";
    document.querySelector(".breadcrumb").style.display = "in-line";
}


let cleanBreadCumb = () => {

    document.querySelector(".breadcrumb li a").innerHTML = '';
    document.querySelectorAll(".breadcrumb li")[1].innerHTML = '';

}

let updateBreadCrumb = (distrito) => {
    if (distrito !== undefined) {
        //update distrito no breadCumb
        let a = document.querySelector(".breadcrumb li a");
        a.appendChild(document.createTextNode(distrito.charAt(0).toUpperCase() +
            distrito.slice(1) + "/"));

        let li = document.querySelectorAll(".breadcrumb li")[1];
        li.appendChild(document.createTextNode(" Municípios"));
    }
}

let backDistritos = () => {
    cleanBreadCumb();

    document.getElementById("myDropdown").classList.remove("show");
    document.querySelector(".dropdown").style.display = "inline-block";
    document.querySelector(".text-select-distrito").style.display = "flex";
    document.querySelector(".back").style.display = "none";
    document.querySelector(".select-municipio").style.display = "none";

}

/* When the user clicks on the button,toggle between hiding and showing the dropdown content */
function showDistritos() {
    document.getElementById("myDropdown").style.display = "flex";
    document.getElementById("myDropdown").style.flexDirection = "column"

}

function hideDistritos() {
    if (document.getElementById('lisboa').clicked === true) {

    } else {

        document.getElementById("myDropdown").style.display = "none";
    }
}


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}


if (document.getElementById("myInput") !== document.activeElement) {
    hideDistritos()
}
