import Bowerman from '../classes/bowerman';

test('caracter Bowerman health', () => {
  const bowerman = new Bowerman('Legalas', 'Bowerman');
  expect(bowerman.health).toBe(100);
});

test('caracter Bowerman level', () => {
  const bowerman = new Bowerman('Legalas', 'Bowerman');
  expect(bowerman.level).toBe(1);
});

test('caracter Bowerman attack', () => {
  const bowerman = new Bowerman('Legalas', 'Bowerman');
  expect(bowerman.attack).toBe(25);
});

test('caracter Bowerman defence', () => {
  const bowerman = new Bowerman('Legalas', 'Bowerman');
  expect(bowerman.defence).toBe(25);
});
