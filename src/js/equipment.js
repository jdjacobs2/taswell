/*!
 *
 * Google Sheets To HTML v0.9a
 *
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 *
 * The Google document's sharing must be set to public
 *
 * 
 */



google.charts.load('current', {
    packages: ['table']
});
// var visualization;

// *************************************************************

// elec 

function drawElec() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1npbW_l2Nbmp79LxiBTgRt82ZVtSriidaunUK5asFJpo&output=html&usp=sharing');

    //    query.setQuery('SELECT A, B, C, D, E, F label A "Equipment", B "Number", C "Category", D "Install Date", E "Id", F "Photo"');
    query.setQuery('SELECT A, B, D where C  = "Elec"');

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

    //    query.setQuery('SELECT A, B, C, D, E, F label A "Equipment", B "Number", C "Approx. Cost", D "Category", E "Installer", F "Install Date", G "Comment"');
    query.setQuery('SELECT A, B, D where C = "Mech"');

    query.send(handleMechQueryResponse);
}

function handleMechQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    var visualization = new google.visualization.Table(document.getElementById('mechTable'));
    visualization.draw(data);
}
google.charts.setOnLoadCallback(drawMechVisualization);


// *************************************************************

// Hull


function drawHullVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1npbW_l2Nbmp79LxiBTgRt82ZVtSriidaunUK5asFJpo&output=html&usp=sharing');

    //    query.setQuery('SELECT A, B, C, D, E, F, G label A "Equipment", B "Number", C "Approx. Cost", D "Category", E "Installer", F "Install Date", G "Comment"');
    query.setQuery('SELECT A, B, D where C = "Hull"');

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

    //    query.setQuery('SELECT A, B, C, D, E, F label A "Equipment", B "Number", C "Category", D "Install Date", E "Id", F "Photo"');
    query.setQuery('SELECT A, B, D, F  where C = "Nav"');

    query.send(handleNavQueryResponse);
}

function handleNavQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    const visualization = new google.visualization.Table(document.getElementById('navTable'));

    // google.visualization.events.addListener(visualization, 'select', selectHandler);

    google.visualization.events.addListener(visualization, 'ready', function () {
        document.querySelector('#navTable tbody').addEventListener('click', function (e) {
            var cell = e.srcElement || e.target, column = null;
            let selection = visualization.getSelection();
            column = 3;
            let msg = ['column-index is ' + column];
            msg.push('row-index is ' + selection[selection.length - 1].row);
            let cellValue = data.getValue(selection[selection.length - 1].row, column);
            msg.push('value of clicked cell is: ' + cellValue);
            if (/img src/.test(cellValue)) {
                // alert(msg.join('\n---------\n'));
                showPhoto(cellValue);
            } else {
                alert('No photo for this selection');
            }

            // if (selection.length && cell !== cell.parentNode.firstChild) {
            //     for (var i = 0; i < cell.parentNode.childNodes.length; ++i) {
            //         if (cell.parentNode.childNodes[i] === cell) {
            //             column = i - 1;
            //             break;
            //         }
            //     }
            //     if (column !== null) {
            //         var msg = ['column-index is ' + column];
            //         // var selection = visualization.getSelection();
            //         //if current row has been selected
            //         if (/\bgoogle-visualization-table-tr-sel\b/.test(cell.parentNode.className)) {
            //             msg.push('row-index is ' + selection[selection.length - 1].row);
            //             msg.push('value of clicked cell is:' + data.getValue(selection[selection.length - 1].row,
            //                 column));
            //         } else {
            //             msg.push('current row is not selected');
            //         }

            //         alert(msg.join('\n---------\n'))
            //     }
            // } else {
            //     alert('no row selected');
            // }
        });

    });
    visualization.draw(data, {
        allowHtml: true
        // showRowNumber: true
    });
};

function showPhoto(cellData) {
    // alert(`In showPhoto's url = ${cellData}`);
    const navTable = document.querySelector('#navTable');
    const container = document.createElement('div');
    container.className = 'imageBox';
    // container.setAttribute('id', 'close')
    navTable.insertBefore(container, navTable.childNodes[0]);
    // const image10 = document.createTextNode("Test of Image PopUp");
    // container.appendChild(image10);
    const imgImage = document.createElement('img');
    const url = cellData.match(/\.\.\/img\/[a-b0-9]*\.jpg/);
    imgImage.setAttribute('src', url[0]);
    imgImage.setAttribute('id', 'popup');
    container.appendChild(imgImage);
    container.addEventListener('click', function () { closeContainer(); });

}

function closeContainer() {
    container = document.querySelector('.imageBox');
    container.style.display = 'none';
    imgImage = document.querySelector('#popup');
    imgImage.style.display = 'none';
}

google.charts.setOnLoadCallback(drawNavVisualization);

// *************************************************************

// Safety


function drawSafetyVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1npbW_l2Nbmp79LxiBTgRt82ZVtSriidaunUK5asFJpo&output=html&usp=sharing');

    //    query.setQuery('SELECT A, B, C, D, E, F, G label A "Equipment", B "Number", C "Approx. Cost", D "Category", E "Installer", F "Install Date", G "Comment"');
    query.setQuery('SELECT A, B, D where C  = "Safety"');

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
    query.setQuery('SELECT A, B, D  where C = "Sails"');

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
