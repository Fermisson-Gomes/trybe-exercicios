const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (marsTemp) => {
  const mensagem = `Mars temperature is: ${marsTemp} degree Celsius`;
  console.log(mensagem);
}

setTimeout(() => sendMarsTemperature(getMarsTemperature()), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo