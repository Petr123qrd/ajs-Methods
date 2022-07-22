import Bowerman from "../Bowerman";

test("Получим объект Bowman", () => {
  const description = new Bowerman("bowerman");
  const result = {
    name: "bowerman",
    type: "Bowerman",
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };
  expect(description).toEqual(result);
});
