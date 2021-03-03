import {Entity,Player} from './Entities.mjs';
import {minmax} from './functions.mjs';
export default class Game {
      constructor() {
            // PLAYER
            let player = this.player = new Player();
            player.name = 'Dev'
            // player.level += 12121

            // PLAYER UPDATE SHOULD BE HERE BECAUSE SOME ENEMY STAT UPDATE REGARDING PLAYER SATATS



            // ENEMY
            let enemyLevel = minmax(player.level+5,player.level);
            let enemyNames = ['KUKULULU', 'Piszkos Fasz', 'Gazember'];
            let enemy = this.enemy = new Entity(this.random(enemyNames),enemyLevel);

            // GLOBAL FUNCTIONS


            onclick = e => {

                  // this.player.attack(this.enemy.hp)
                  return enemy.hp -= 10


            }
            this.draw([player,enemy])


      }

      // GAME FUNCTIONS
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
                  div.className = 'side'
                  div.id = side.name;

                  let sideStats = [side['name'],side['level'],side['hp'],side['magic']];
                  sideStats.pop();


                  sideStats.forEach(stat => {
                        let p = document.createElement('p');
                        div.appendChild(p);

                        switch(stat) {
                              case sideStats[1]:
                                    p.innerText = `Lv.${stat}`;
                                    break;
                              case sideStats[2]:
                                    p.innerText = `${stat}`;

                                    break;
                              // case sideStats[3]:
                              //       p.innerText = `Mana:${stat}`;
                              //       break;
                              default:
                                    p.innerText = stat;
                                    break;

                        }
                  });

            })



      }


}
