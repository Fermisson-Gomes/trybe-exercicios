const sum = require('./sum');

describe('Testes de soma', () => {
  test('verifica se o resultado da soma 4 + 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('verifica se o resultado da soma 0 + 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('verifica se os valores passados são apenas numeros', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
  test('verifica se se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => {
      sum('parameters must be numbers');
    });
  });
});
