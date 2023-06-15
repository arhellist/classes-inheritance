class Character {
  nameValue;
  typeValue;
  constructor(name, type, health = 100, level = 1, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
  get name() {
    return this.nameValue;
  }
  get type() {
    return this.typeValue;
  }

  set name(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error(
        "Длинна имени не может быть более и 10 и менне 2 символов"
      );
    }
    this.nameValue = name;
  }

  set type(type) {
    const typeUnit = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!typeUnit.includes(type)) {
      throw new Error("Недопустимый тип юнита");
    }
    this.typeValue = type;
  }

  levelUp(){
    if (this.health > 0) {
        this.level = this.level+1;
        this.attack = ((this.attack/100) * 20) + this.attack;
        this.defence = ((this.defence/100) * 20) + this.defence;
        this.health = 100;
    } else if (this.health === 0) {
        throw new Error ('Мертвому персонажу не может быть повышен уровень')
    }
  }

  damage(points){
    points = 5;
    if (this.health >= 0){
        this.health = this.health - (points * (1 - this.defence / 100))
    }
  }

}

class Bowerman extends Character {
    attack = 25;
    defence = 25;
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

class Swordsman extends Character {
    attack = 40;
    defence = 10;
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

class Magician extends Character {
    attack = 10;
    defence = 40;
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

class Daemon extends Character {
    attack = 10;
    defence = 40;
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

class Undead extends Character {
    attack = 25;
    defence = 25;
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}

class Zombie  extends Character {
    attack = 40;
    defence = 10;
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
}





const bowerman = new Bowerman('Legalas', 'Bowerman')
const swordsman = new Swordsman('King', 'Swordsman')
const magician = new Magician('Gengalf', 'Magician')
const daemon = new Daemon('Morlok', 'Daemon')
const undead = new Undead('Nrjit', 'Undead')
const zombie = new Zombie('Zombak', 'Zombie')

console.log(bowerman);
bowerman.levelUp();
console.log(bowerman);
bowerman.damage()
bowerman.damage()
bowerman.damage()
bowerman.damage()
bowerman.damage()
bowerman.damage()
console.log(bowerman);