import Character from "./Basic";

export default function Daemon(name, type) {
  Character.call(this, name, type);
  this.attack = 10;
  this.deffence = 40;
}
