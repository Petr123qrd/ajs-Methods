import Magician from "../Magician";

test("creation Magician", () => {
  const recieved = new Magician("Magician", "Magician");
  expect(recieved).toEqual({
    name: "Magician",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
