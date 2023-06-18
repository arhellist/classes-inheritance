export class Character {
  nameValue;
  typeValue;
  constructor(name, type, health = 100, level = 1, attack = 0, defence = 0) {
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
