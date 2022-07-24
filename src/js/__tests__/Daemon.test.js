import Daemon from "../Daemon";

test("creation Daemon", () => {
  const recieved = new Daemon("Daemon", "Daemon");
  expect(recieved).toEqual({
    name: "Daemon",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
