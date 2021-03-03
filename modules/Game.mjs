import {Entity,Player} from './Entities.mjs';

export default class Game {
      constructor() {
            // PLAYER
            let player = this.player = new Player();

            player.level+= 100

            // ENEMY
            let enemyLevel = this.minmax(player.level+5,player.level);
            let enemyNames = ['KUKULULU', 'Piszkos Fasz', 'Gazember'];
            let enemy = this.enemy = new Entity(this.random(enemyNames),enemyLevel);

            // GLOBAL FUNCTIONS
            this.draw([player,enemy]);

      }

      // GAME FUNCTIONS
      minmax(min,max) { // get random value with min/max
            return Math.floor(Math.random() * (max - min) + min);
      }
      random(array) { // get random value from array
            return array[Math.floor(Math.random() * array.length)]
      }

      levelup(player){ // player leveling
            if(player.xp >= player.level * 33) {
                  return [player.level++, player.xp = 0]
            }
      }
      draw(sides) { // create html elements with stats
            return sides.forEach(side => {
                  let div = document.createElement('div');

                  document.body.appendChild(div);
                  div.id = side.name;

                  let sideStats = [side['name'],side['level'],side['hp'],side['magic']];


                  sideStats.forEach(stat => {
                        let p = document.createElement('p');
                        div.appendChild(p);

                        switch(stat) {
                              case sideStats[1]:
                                    p.innerText = `Lv.${stat}`;
                                    break;
                              case sideStats[2]:
                                    p.innerText = `Hp:${stat}`;
                                    break;
                              case sideStats[3]:
                                    p.innerText = `Mana:${stat}`;
                                    break;
                              default:
                                    p.innerText = stat;
                                    break;

                        }
                  });

            })



      }

}
