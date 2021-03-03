import {Entity,Player} from './Entities.mjs';


export default class Game {
      constructor() {
            /////////////// PLAYER ///////////////
            let player = this.player = new Player();



            /////////////// ENEMY ///////////////
            let enemyLevel = this.minmax(player.level+5,player.level);
            let enemyNames = ['KUKULULU', 'Piszkos Fasz', 'Gazember'];
            let enemy = this.enemy = new Entity(this.random(enemyNames),enemyLevel);

            console.log(player)


      }
      /////////////// FUNCTIONS ///////////////
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
