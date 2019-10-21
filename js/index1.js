'use strict';

import Arena from './arena.js';
import Gladiator from './gladiator.js';

//
// const max = new Gladiator('Maximus' , 'Trident');
const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const andronicus = new Gladiator("Andronicus","Sword");
const colosseum = new Arena("Colosseum");

colosseum.addGlaidiator(max);
colosseum.addGlaidiator(titus);
// colosseum.addGlaidiator(andronicus);
colosseum.fight();
console.log(colosseum.gladiators);

// console.log(max.name);
// console.log(max.weapon);
// const colosseum = new Arena("Colosseum");
// console.log(colosseum.name);
// colosseum.addGlaidiator(max);
// console.log(colosseum.gladiators);
