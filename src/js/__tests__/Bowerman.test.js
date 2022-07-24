import Bowerman from "../Bowerman";

test("creation Bowerman", () => {
  const recieved = new Bowerman("Bowerman", "Bowerman");
  expect(recieved).toEqual({
    name: "Bowerman",
    type: "Bowerman",
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});
