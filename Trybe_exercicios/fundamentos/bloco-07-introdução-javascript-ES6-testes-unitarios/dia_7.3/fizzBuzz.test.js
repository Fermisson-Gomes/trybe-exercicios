function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

describe('testa a função myFizzBuzz', () => {
  test('verifica se o retorno da chamada com o valor 15 é "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })
  test('verifica se o retorno da chamada com o valor 3 é "fizz"', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  })
  test('verifica se o retorno da chamada com o valor 5 é "buzz"', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  })
  test('verifica se o retorno da chamada com o valor 4 é 4', () => {
    expect(myFizzBuzz(4)).toEqual(4);
  })
  test('verifica se o retorno da chamada com o valor frefa é false', () => {
    expect(myFizzBuzz('frefa')).toEqual(false);
  })
})