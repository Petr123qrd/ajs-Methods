import Swordsman from "../Swordsman";

test("creation Swordsman", () => {
  const recieved = new Swordsman("Swordsman", "Swordsman");
  expect(recieved).toEqual({
    name: "Swordsman",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
