import Character from "./Basic";

export default class Zombie extends Character {
  constructor(name, type = "Zombie") {
    super(name, type);
    this.attack = 40;
    this.deffence = 10;
  }
}
