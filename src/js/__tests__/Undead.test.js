import Undead from "../Undead";

test("creation Undead", () => {
  const recieved = new Undead("Undead", "Undead");
  expect(recieved).toEqual({
    name: "Undead",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});
