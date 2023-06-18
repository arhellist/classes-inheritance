import Daemon from '../classes/daemon';

test('caracter Daemon health', () => {
  const daemon = new Daemon('Legalas', 'Daemon');
  expect(daemon.health).toBe(100);
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
