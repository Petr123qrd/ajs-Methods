import Character from "./Basic";

export default class Magician extends Character {
  constructor(name, type = "Magician") {
    super(name, type);
    this.attack = 10;
    this.deffence = 40;
  }
}
