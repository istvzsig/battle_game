import {Entity,Player} from './Entities.mjs';

export default class Game {
      constructor() {
            /////////////// PLAYER ///////////////
            let player = this.player = new Player();

            /////////////// ENEMY ///////////////
            let enemyLevel = this.minmax(player.level+5,player.level);
            let enemyNames = ['KUKULULU', 'Piszkos Fasz', 'Gazember'];
            let enemy = this.enemy = new Entity(this.random(enemyNames),enemyLevel);


            [player,enemy].forEach(s => this.draw(s))
      }

      /////////////// GAME FUNCTIONS ///////////////

      minmax(min,max) { // get random value with min/max
            return Math.floor(Math.random() * (max - min) + min);
      }

      random(array) { // get random value from array
            return array[Math.round(Math.random() * array.length)]
      }
      // player leveling
      levelup(player){
            if(player.xp >= player.level * 33) {
                  return [player.level++, player.xp = 0]
            }
      }
      draw(player) {
            console.log(player)
      }

}
 
