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

test('caracter Magician levelUp attack', () => {
  const magician = new Magician('Legalas', 'Magician');
  magician.levelUp();
  expect(magician.attack).toBe(12);
});

test('caracter Magician levelUp health=0', () => {
  const magician = new Magician('Legalas', 'Magician');
  magician.health = 0;
  expect(() => {
    magician.levelUp();
  }).toThrow();
});

test('caracter Magician levelUp defence', () => {
  const magician = new Magician('Legalas', 'Magician');
  magician.levelUp();
  expect(magician.defence).toBe(48);
});

test('caracter Magician damage', () => {
  const magician = new Magician('Legalas', 'Magician');
  magician.damage();
  expect(magician.health).toBe(97);
});
