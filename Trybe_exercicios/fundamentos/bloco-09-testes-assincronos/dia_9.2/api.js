const api = `https://api.coincap.io/v2/assets`;



const fetchCoin = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(api, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchCoin();
