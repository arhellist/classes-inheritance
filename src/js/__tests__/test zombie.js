import Zombie from '../classes/zombie';

test('caracter Zombie health', () => {
  const zombie = new Zombie('Legalas', 'Zombie');
  expect(zombie.health).toBe(100);
});

test('caracter Zombie level', () => {
  const zombie = new Zombie('Legalas', 'Zombie');
  expect(zombie.level).toBe(1);
});

test('caracter Zombie attack', () => {
  const zombie = new Zombie('Legalas', 'Zombie');
  expect(zombie.attack).toBe(40);
});

test('caracter Zombie defence', () => {
  const zombie = new Zombie('Legalas', 'Zombie');
  expect(zombie.defence).toBe(10);
});
