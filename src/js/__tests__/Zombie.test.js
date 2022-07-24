import Zombie from "../Zombie";

test("creation Zombie", () => {
  const recieved = new Zombie("Zombie", "Zombie");
  expect(recieved).toEqual({
    name: "Zombie",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
