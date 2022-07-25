import Character from "../Basic";

test("Повышаем уровень персонажа", () => {
  expect(() => {
    const description = new Character("warrior");

    description.health = 50;
    description.attack = 10;
    description.defense = 10;
    description.levelUp();
    const result = {
      name: "warrior",
      health: 100,
      level: 2,
      attack: 12,
      defense: 12,
    };
    return description, result;
  }).toThrow();
});

test("Нельзя повысить левел умершего", () => {
  expect(() => {
    const description = new Character("warrior");
    description.health = 0;
    return description.levelUp();
  }).toThrow();
});

test("Количество символов в имени менее 2", () => {
  expect(() => {
    const result = new Character("x", "Daemon");
    return result;
  }).toThrow();
});

test("Количество символов в имени более 10", () => {
  expect(() => {
    const result = new Character("xxxxxxxxxxx", "Swordsman");
    return result;
  }).toThrow();
});

test("Имя не является строкой", () => {
  expect(() => {
    const result = new Character(11111, "Undead");
    return result;
  }).toThrow();
});

test("Заданный персонаж не существует", () => {
  expect(() => {
    const result = new Character("xxx", "Fairy");
    return result;
  }).toThrow();
});
