const btnSubmit = document.getElementById('btn-submit');

function stopDefault(event) {
  event.preventDefault();
}

btnSubmit.addEventListener('click', stopDefault);
