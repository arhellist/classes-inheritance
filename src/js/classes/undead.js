import { Character } from './characters';

export default class Undead extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, type, health, level, attack, defence);
  }
}
