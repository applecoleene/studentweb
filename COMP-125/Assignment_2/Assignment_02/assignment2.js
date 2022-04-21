function createTable() {
    var rows = document.getElementById('row').value;
    var columns = document.getElementById('column').value;
    var table = '';
    table += '<table id="outputTable" border=1>';
    for (var i = 0; i < rows; i++) {
        table += '<tr>';
        for (var j = 0; j < columns; j++) {
            table += '<td>' + (i+1) + ', ' + (j+1) + '</td>';
        }
        table += '</tr>';
    }
    table += '</table>'
    document.getElementById('output').innerHTML = table;
}
//document.getElementById('create').addEventListener("click", createTable, false);