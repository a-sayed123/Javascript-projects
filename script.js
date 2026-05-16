'use strict'

const table = document.createElement('table');
table.className = 'data-table';
table.style.borderCollapse = 'collapse';
table.style.width = '100%';

function addRow(rowData) {
const row = document.createElement('tr');
rowData.forEach(text => {
const cell = document.createElement('td');
cell.style.padding = '12px';
cell.style.border = '1px solid #334155';
cell.textContent = text;
row.appendChild(cell);
});
table.appendChild(row);
}

const data = [
['1', 'John Doe', 'Developer', 'Active'],
['2', 'Jane Smith', 'Designer', 'Pending'],
['3', 'Jan right', 'engnieer', 'writiing'],
];
const tab = document.getElementById("table")  
data.forEach(rowData => addRow(rowData));
tab.appendChild(table)