function addToStorage(){

}

let falseTrueBack = false;

function changeToDarkMode(){
  if (falseTrueBack === false) {
    document.body.style.backgroundColor = 'rgb(94, 94, 94)';
    document.getElementsByClassName('main-header')[0].style.backgroundColor = 'rgb(34, 34, 34)';
    document.getElementsByClassName('confi-menu')[0].style.backgroundColor = 'rgb(34, 34, 34)';
    document.getElementsByClassName('text-content')[0].style.backgroundColor = 'rgb(54, 54, 54)';
    falseTrueBack = true;
  } else {
    document.body.style.backgroundColor = 'white';
    document.getElementsByClassName('main-header')[0].style.backgroundColor = 'rgb(208, 252, 237)';
    document.getElementsByClassName('confi-menu')[0].style.backgroundColor = 'rgb(208, 252, 237)';
    document.getElementsByClassName('text-content')[0].style.backgroundColor = 'rgb(247, 234, 210)';
    falseTrueBack = false;
  }
}

const tableColorList = ['red', 'white', 'yellow', 'blue', 'black'];

let falseTrueFont = false;

function changeFontColor(){
  let colorTable = document.getElementById('color-table');
  let table = document.createElement('table');
  if (falseTrueFont === false) {
    colorTable.appendChild(table);
    let tableTr = document.createElement('tr');
    table.appendChild(tableTr);
    for (let i = 0; i < tableColorList.length; i += 1){
      let td = document.createElement('td');
      td.style.backgroundColor =  tableColorList[i];
      td.innerText = ' ';
      td.className = 'td-square';
      td.addEventListener('click', function (){ 
        let colort = document.getElementsByClassName('t');
        for (let z = 0; z < colort.length; z += 1){
          colort[z].style.color = tableColorList[i];
        }
     })
      tableTr.appendChild(td);
    }
    falseTrueFont = true;
  } else {
    colorTable.innerHTML = '';
    falseTrueFont = false;
  }
}
