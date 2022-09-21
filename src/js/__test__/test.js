import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';
import Character from '../character';

test('Проверка класса Bowerman', () => {
  const result = {
    name: 'Bowerman', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(new Bowerman('Bowerman')).toEqual(result);
});

test('Проверка класса Daemon', () => {
  const result = {
    name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(new Daemon('Daemon')).toEqual(result);
});

test('Проверка класса Magician', () => {
  const result = {
    name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(new Magician('Magician')).toEqual(result);
});

test('Проверка класса Swordsman', () => {
  const result = {
    name: 'Swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(new Swordsman('Swordsman')).toEqual(result);
});

test('Проверка класса Undead', () => {
  const result = {
    name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(new Undead('Undead')).toEqual(result);
});

test('Проверка класса Zombie', () => {
  const result = {
    name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(new Zombie('Zombie')).toEqual(result);
});

test('Проверка на ошибки', () => {
  expect(() => new Character('AlexandroOnegin')).toThrow('Имя должно быть от 2 до 10 символов');
});

test('Проверка на ошибки', () => {
  expect(() => new Character(89)).toThrow('Имя должно быть от 2 до 10 символов');
});
