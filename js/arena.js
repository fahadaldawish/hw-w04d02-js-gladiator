'use strict';
import Gladiator from './gladiator.js';
export default class Arena{
    constructor(name , gladiators = []){
        const cName = name.charAt(0).toUpperCase() + name.slice(1);
        this.name = cName;
        this.gladiators = gladiators;
    }
    addGlaidiator(gladiator){
        if(this.gladiators.length < 2){
        this.gladiators.push(gladiator);
        }
    }
//     Trident beats Spear
// Spear beats Club
// Club beats Trident
    fight(){
        if (this.gladiators[1].weapon === this.gladiators[0].weapon){
            this.gladiators = [];
        }
        else if ((this.gladiators[1].weapon == 'Trident' && this.gladiators[0].weapon == 'Spear') 
        || (this.gladiators[1].weapon == 'Club' && this.gladiators[0].weapon == "Trident")){
            this.gladiators.shift();
        }
       else if ((this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon == 'Spear') 
        || (this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon == "Trident")){
            this.gladiators.pop();
        }
    }

}

