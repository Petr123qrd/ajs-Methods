export default class Character {
  constructor(name, type) {
    const types = [
      "Bowerman",
      "Daemon",
      "Magician",
      "Swordsman",
      "Undead",
      "Zombie",
    ];

    if (name.length < 2 || name.length > 10 || typeof name !== "string") {
      throw new Error("Ошибка в name");
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error("Ошибка в type");
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.deffence *= 1.2;
    } else {
      throw new Error("Нельзя повысить уровень умершего!");
    }
  }
}
