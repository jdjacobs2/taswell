/*!
 *
 * Google Sheets To HTML v0.9a
 *
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 *
 * The Google document's sharing must be set to public
 *
 * THIS IS THE  OLD combined.js
 */


google.charts.load('current', {packages: ['corechart', 'table']});
// var visualization;

function drawElec() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1npbW_l2Nbmp79LxiBTgRt82ZVtSriidaunUK5asFJpo&output=html&usp=sharing');

//    query.setQuery('SELECT A, B, C, D, E, F, G label A "Equipment", B "Number", C "Approx. Cost", D "Category", E "Installer", F "Install Date", G "Comment"');
    query.setQuery('SELECT A, B, D, F where D = "Elec"');

    query.send(handleElecQueryResponse);
}

function handleElecQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var visualization = new google.visualization.Table(document.getElementById('elecTable'));
    visualization.draw(data, {
        legend: 'bottom'
    });
}

google.charts.setOnLoadCallback(drawElec);

// *************************************************************

// mech


function drawMechVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1npbW_l2Nbmp79LxiBTgRt82ZVtSriidaunUK5asFJpo&output=html&usp=sharing');

//    query.setQuery('SELECT A, B, C, D, E, F, G label A "Equipment", B "Number", C "Approx. Cost", D "Category", E "Installer", F "Install Date", G "Comment"');
    query.setQuery('SELECT A, B, D, F  where D = "Mech"');

    query.send(handleMechQueryResponse);
}

function handleMechQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var visualization = new google.visualization.Table(document.getElementById('mechTable'));
    visualization.draw(data, {
        legend: 'bottom'
    });
}
google.charts.setOnLoadCallback(drawMechVisualization);


// *************************************************************

// Hull


function drawHullVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1npbW_l2Nbmp79LxiBTgRt82ZVtSriidaunUK5asFJpo&output=html&usp=sharing');

//    query.setQuery('SELECT A, B, C, D, E, F, G label A "Equipment", B "Number", C "Approx. Cost", D "Category", E "Installer", F "Install Date", G "Comment"');
    query.setQuery('SELECT A, B, D, F  where D = "Hull"');

    query.send(handleHullQueryResponse);
}

function handleHullQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var visualization = new google.visualization.Table(document.getElementById('hullTable'));
    visualization.draw(data, {
        legend: 'bottom'
    });
}
google.charts.setOnLoadCallback(drawHullVisualization);



// *************************************************************

// nav

function drawNavVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1npbW_l2Nbmp79LxiBTgRt82ZVtSriidaunUK5asFJpo&output=html&usp=sharing');

//    query.setQuery('SELECT A, B, C, D, E, F, G label A "Equipment", B "Number", C "Approx. Cost", D "Category", E "Installer", F "Install Date", G "Comment"');
    query.setQuery('SELECT A, B, D, F  where D = "Nav"');

    query.send(handleNavQueryResponse);
}

function handleNavQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var visualization = new google.visualization.Table(document.getElementById('navTable'));
    visualization.draw(data, {
        legend: 'bottom'
    });
}
google.charts.setOnLoadCallback(drawNavVisualization);


// *************************************************************

// Safety


function drawSafetyVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1npbW_l2Nbmp79LxiBTgRt82ZVtSriidaunUK5asFJpo&output=html&usp=sharing');

//    query.setQuery('SELECT A, B, C, D, E, F, G label A "Equipment", B "Number", C "Approx. Cost", D "Category", E "Installer", F "Install Date", G "Comment"');
    query.setQuery('SELECT A, B, D, F  where D = "Safety"');

    query.send(handleSafetyQueryResponse);
}

function handleSafetyQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var visualization = new google.visualization.Table(document.getElementById('safetyTable'));
    visualization.draw(data, {
        legend: 'bottom'
    });
}
google.charts.setOnLoadCallback(drawSafetyVisualization);



// *************************************************************

// sails


function drawSailsVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1npbW_l2Nbmp79LxiBTgRt82ZVtSriidaunUK5asFJpo&output=html&usp=sharing');

//    query.setQuery('SELECT A, B, C, D, E, F, G label A "Equipment", B "Number", C "Approx. Cost", D "Category", E "Installer", F "Install Date", G "Comment"');
    query.setQuery('SELECT A, B, D, F  where D = "Sails"');

    query.send(handleSailsQueryResponse);
}

function handleSailsQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var visualization = new google.visualization.Table(document.getElementById('sailsTable'));
    visualization.draw(data, {
        legend: 'bottom'
    });
}
google.charts.setOnLoadCallback(drawSailsVisualization);
