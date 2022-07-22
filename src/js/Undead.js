import Character from "./Character";

export default class Undead extends Character {
  constructor(name, type = "Undead") {
    super(name, type);
    this.type = "Undead";
    this.attack = 25;
    this.defense = 25;
  }
}
