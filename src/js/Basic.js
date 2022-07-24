export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = undefined;
  this.deffence = undefined;

  const typeCharacter = [
    "Bowerman",
    "Daemon",
    "Magician",
    "Swordsman",
    "Undead",
    "Zombie",
  ];

  if (name.length < 2 || name.length > 10) {
    throw new Error("Ошибка! Количество символов в имени от 2 до 10!");
  }

  if (typeof name !== "string") {
    throw new Error("Ошибка! Имя должно быть строкой!");
  }

  if (!typeCharacter.includes(type)) {
    throw new Error("Ошибка! Такой персонаж не существует!");
  }
}

Character.prototype.description = function levelUp() {
  if (this.health > 0) {
    this.health = 100;
    this.level += 1;
    this.attack *= 1.2;
    this.deffence *= 1.2;
  } else {
    throw new Error("Нельзя повысить уровень умершего!");
  }
  return 1;
};
