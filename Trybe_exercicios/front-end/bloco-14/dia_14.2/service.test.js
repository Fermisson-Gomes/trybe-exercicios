let { randomNumberGeneator } = require("./service");

describe('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  
  randomNumberGeneator = jest.fn();

  test('Teste se a função foi chamada', () => {

    randomNumberGeneator();
    expect(randomNumberGeneator).toHaveBeenCalled();
  })

  test('testa qual o retorno da função', () => {
    randomNumberGeneator.mockReturnValue(10);

    expect(randomNumberGeneator()).toBe(10);
  })

  test('testa quantas vezes a função foi chamada', () => {


    expect(randomNumberGeneator).toHaveBeenCalledTimes(2);
  })

})

describe('Teste se a função foi chamada e a nova implementação de divisão foi aplicada apenas uma vez', () => {
  
  test('verifica se a implementação é aplicada', () => {
    randomNumberGeneator.mockImplementationOnce((a, b) => a / b);

    expect(randomNumberGeneator(1, 2)).toBe(0.5);
  })
  
  test('Teste se a nova implementação de divisão foi aplicada apenas uma vez', () => {
    randomNumberGeneator.mockReset();

    expect(randomNumberGeneator(1, 2)).toBe(undefined);
  })
})

describe('verifica se as novas implementações são feitas', () => {
  test('verifica se a implementação de multiplicação e aplicada', () => {
    randomNumberGeneator.mockImplementation((a, b, c) => a * b * c);
    
    expect(randomNumberGeneator(1, 2, 3)).toBe(6);
  })

  test('verifica se a implementação de dobro é aplicada', () => {
    randomNumberGeneator.mockReset();
    randomNumberGeneator.mockImplementation((a) => a * 2);
  
    expect(randomNumberGeneator(6)).toBe(12);
  })
})