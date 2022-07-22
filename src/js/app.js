import Bowerman from "./Bowerman";
import Swordsman from "./Swordsman";
import Magician from "./Magician";
import Undead from "./Undead";
import Zombie from "./Zombie";
import Daemon from "./Daemon";

const bowerman = new Bowerman("Bowerman1");
const swordsman = new Swordsman("Swordsman1");
const magician = new Magician("Magician1");
const udead = new Undead("Undead1");
const zombie = new Zombie("Zombie1");
const daemon = new Daemon("Daemon1");

bowerman.levelUp();
swordsman.levelUp();
magician.levelUp();
udead.levelUp();
zombie.levelUp();
daemon.levelUp();
