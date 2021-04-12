function showEstatisticas() {
    if (document.querySelector(".estatisticas").style.display === "none") {
        document.querySelector(".estatisticas").style.display = "flex";
        document.querySelector(".searchMunicipio").style.display = "none";
        document.querySelector(".button-up-text").style.display = "none";
        document.querySelector(".button-up").style.display = "none";
        document.querySelectorAll(".breadcrumb li")[1].innerHTML = "Estatísticas";
    } else {
        document.querySelector(".estatisticas").style.display = "none";
        document.querySelector(".searchMunicipio").style.display = "block";
        document.querySelector(".button-up-text").style.display = "flex";
        document.querySelector(".button-up").style.display = "flex";
        document.querySelectorAll(".breadcrumb li")[1].innerHTML = "Utentes";
    }


}

// Load Charts and the corechart package.
google.charts.load('current', {'packages': ['corechart']});

// Draw the pie chart for Sarah's pizza when Charts is loaded.
google.charts.setOnLoadCallback(graph1);

// Draw the pie chart for the Anthony's pizza when Charts is loaded.
google.charts.setOnLoadCallback(graph2);

// Callback that draws the pie chart for Sarah's pizza.
function graph1() {

    // Create the data table for Sarah's pizza.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Vacinados', 79000],
        ['Não Vacinados', 15000]
    ]);

    // Set options for Sarah's pie chart.
    var options = {
        title: 'Nº vacinados no município de Alenquer',
        width: 500,
        height: 500,
        colors: ["#031926", "#468189"],
        backgroundColor: "#9DBEBB",
    };

    // Instantiate and draw the chart for Sarah's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('firstGraph'));
    chart.draw(data, options);
}

// Callback that draws the pie chart for Anthony's pizza.
function graph2() {

    // Create the data table for Anthony's pizza.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['> 75', 5000],
        ['50 - 75', 3000],
        ['18 - 50', 1000],
        ['< 18', 500]
    ]);

    var options = {
        title: 'Idade da população vacinados',
        width: 600,
        height: 500,
        colors: ["#031926", "#468189", "#77ACA2", "#AFAAB4"],
        backgroundColor: "#9DBEBB",
    };

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('secondGraph'));
    chart.draw(data, options);
}

//--------------------------------------------------------------------------------------------------
