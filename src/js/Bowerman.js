import Character from "./Basic";

export default function Bowerman(name, type) {
  Character.call(this, name, type);
  this.attack = 25;
  this.deffence = 25;
}
