function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDateDay(pai, date, classes){
  const dateDay = document.querySelector(pai);

  for (let i = 0; i < date.length; i += 1){
    const data = date[i];
    const dataItem = document.createElement('li');
    dataItem.innerText = data;
    dataItem.className = classes;
    if (data == 24 || data == 25 || data == 31){
      dataItem.classList.add('holiday');
    }
    if (data == 4 || data == 11 || data == 18 || data == 25){
      dataItem.classList.add('friday');
    }

    dateDay.appendChild(dataItem);
  };

};

createDateDay('#days', dezDaysList, 'day');

function buttonHolidays (string){
  const pai = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.innerText = string;
  btn.id = 'btn-holiday';
  pai.appendChild(btn);
}

buttonHolidays('Feriados');

let btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener('click', holidayChangeColor);


let click = false
function holidayChangeColor(){
  let ferias = document.getElementsByClassName('holiday');
  if (click === false){
    click = true;
    for (i = 0; i < ferias.length; i += 1){
        ferias[i].style.backgroundColor = 'blue';
    }
  } else {
    click = false;
    for (i = 0; i < ferias.length; i += 1){
      ferias[i].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}



function buttonFridays (string){
  const pai = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.innerText = string;
  btn.id = 'btn-friday';
  pai.appendChild(btn);
}

buttonFridays('Sexta-feira');

let btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', sextou);

let click2 = false;

function sextou(){
  let sexta = document.getElementsByClassName('friday');
  let dateNum = [];
  if (click2 === false){
    click2 = true;
    for (i = 0; i < sexta.length; i += 1){
      dateNum.push(sexta[i]);
      sexta[i].innerHTML = 'sextou!';
    }
  } else {
    click2 = false;
  }
}

