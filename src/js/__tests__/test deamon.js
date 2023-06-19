import Daemon from '../classes/daemon';

test('caracter Daemon health', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  expect(daemon.health).toBe(100);
});

test('caracter Daemon name', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  expect(daemon.name).toBe('Legalas');
});

test('caracter Daemon type', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  expect(daemon.type).toBe('Daemon');
});

test('caracter Daemon level', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  expect(daemon.level).toBe(1);
});

test('caracter Daemon attack', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  expect(daemon.attack).toBe(10);
});

test('caracter Daemon defence', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  expect(daemon.defence).toBe(40);
});

test('caracter Daemon levelUp attack', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  daemon.levelUp();
  expect(daemon.attack).toBe(12);
});

test('caracter Daemon levelUp health=0', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  daemon.health = 0;
  expect(() => {
    daemon.levelUp();
  }).toThrow();
});

test('caracter Daemon levelUp defence', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  daemon.levelUp();
  expect(daemon.defence).toBe(48);
});

test('caracter Daemon levelUp defence', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  daemon.levelUp();
  expect(daemon.level).toBe(2);
});

test('caracter Daemon damage', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  daemon.damage();
  expect(daemon.health).toBe(97);
});
