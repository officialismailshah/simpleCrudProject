let array = [];
let increment = 0;
let editButton;

let add = document.querySelector('.input');
add = document.getElementById('add');


var totalNumberOfCountry = document.querySelector('.center1');

function addCountryName() {
    var input = document.querySelector('#input1');
    // var input = document.querySelector('input');
    array.push(input.value);
    input.value = '';
    console.log(array);
    increment = increment + 1;
    document.getElementById('countryNames').innerHTML = "";
    totalNumberOfCountry.innerHTML = 'Countries ' + increment;
    for (const i in array) {
        CRUD.ADD(i);
    }
    // array.forEach(function(i) {
    //     CRUD.ADD(i);
    // })
}

var CRUD = {};


CRUD.ADD = function(i) {

    var countryNames = document.getElementById('countryNames');
    var table = document.createElement('table');
    table.classList.add('center');
    countryNames.appendChild(table);

    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    // var tr = document.createElement('tr');
    // tbody.appendChild(tr);

    // var td = document.createElement('td');
    // tr.appendChild(td);

    // var h_3 = document.createElement('h3');
    // h_3.classList.add('headerForName');
    // h_3.innerHTML = 'Namess';
    // td.appendChild(h_3);

    var tr1 = document.createElement('tr');
    var td1 = document.createElement('td');
    tr1.appendChild(td1);

    var span = document.createElement('span');
    span.classList.add('names');
    span.innerHTML = array[i];
    td1.appendChild(span);

    var editBtn = document.createElement('button');
    editBtn.classList.add('btn', 'btn-info');
    editBtn.setAttribute('id', 'editTHeName');
    editBtn.setAttribute('onClick', `editValue(${i})`);
    editBtn.innerHTML = 'Edit';
    editButton = editBtn;
    td1.appendChild(editBtn);

    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-info');
    deleteBtn.setAttribute('id', 'deleteTheName');
    deleteBtn.setAttribute('onClick', `deleteValue(${i})`);
    deleteBtn.innerHTML = 'Delete';
    td1.appendChild(deleteBtn);
    tbody.appendChild(tr1);

}

add.addEventListener('click', addCountryName);

function editValue(i) {
    document.querySelector(".Edit").classList.remove('show');
    document.getElementById('edit').value = array[i];
    document.getElementById('toAddName').setAttribute('onClick', `saveValue(${i})`);
}


function saveValue(i) {

    array[i] = document.getElementById('edit').value;
    document.getElementById('countryNames').innerHTML = "";
    for (const i in array) {
        CRUD.ADD(i);
    }
    document.querySelector(".Edit").classList.add('show');

}

function deleteValue(i) {
    delete array[i];
    increment = increment - 1;
    document.getElementById('countryNames').innerHTML = "";
    totalNumberOfCountry.innerHTML = 'Countries ' + increment;
    for (const i in array) {
        CRUD.ADD(i);
    }
}