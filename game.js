import {Entity,Player} from './modules/Entity.mjs';

class Game {
      constructor() {

            let player = this.player = new Player();


            let enemyLevel = this.minmax(player.level+5,player.level);
            let enemyNames = ['KUKULULU', 'Piszkos Fasz', 'Gazember'];
            let enemy = new Entity(this.random(enemyNames),enemyLevel);



      }
      // get random value with min/max
      minmax(min,max) {
            return Math.floor(Math.random() * (max - min) + min);
      }
      // get random value from array
      random(array) {
            return array[Math.round(Math.random() * array.length)]
      }
      // player leveling
      levelup(){

      }

}


const game = new Game;

console.log(game)
