import Magician from '../classes/magician';

test('caracter Magician health', () => {
  const magician = new Magician('Legalas', 'Magician');
  expect(magician.health).toBe(100);
});

test('caracter Magician level', () => {
  const magician = new Magician('Legalas', 'Magician');
  expect(magician.level).toBe(1);
});

test('caracter Magician attack', () => {
  const magician = new Magician('Legalas', 'Magician');
  expect(magician.attack).toBe(10);
});

test('caracter Magician defence', () => {
  const magician = new Magician('Legalas', 'Magician');
  expect(magician.defence).toBe(40);
});
