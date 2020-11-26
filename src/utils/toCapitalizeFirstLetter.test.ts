import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Принимает на вход строку и переводит первую букву в верхний регистр', () => {
    const str = toCapitalizeFirstLetter('pikachu');
    expect(str).toEqual('Pikachu');
  });

  test('Принимает на вход строку в верхнем регистре и переводит первую букву в верхний регистр, а остальные в нижний', () => {
    const str = toCapitalizeFirstLetter('PIKACHU');
    expect(str).toEqual('Pikachu');
  });

  test('Принимает на вход строку с рандомным регистром и переводит первую букву в верхний регистр, а остальные в нижний', () => {
    const str = toCapitalizeFirstLetter('pIKaChU');
    expect(str).toEqual('Pikachu');
  });
});
