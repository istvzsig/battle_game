import {Player, Enemy, Button} from './modules/Entity.mjs';
class Game {
      constructor() {
            const canvas = document.getElementById('battle_game');
            const context = canvas.getContext('2d');
            canvas.width = 600;
            canvas.height = 400;
            canvas.style.border = '3px solid red';



            let FRAMES = 0;

            let TURNS = Math.round(Math.random()*10)

            let player = new Player('Dev',1);
            let enemy = new Enemy('Enemy',enemyLevel());



            function clear() {
                  return context.clearRect(0,0,canvas.width,canvas.height)
            }

            function enemyLevel() {
                  return player.level * Math.floor(
                        Math.random() *
                              (player.level * 5 - player.level)
                              + player.level
                  )
            }

            function fight(e) {

                  TURNS++
                  return player.hp > 0 && enemy.hp > 0 ?
                        TURNS % 2 == 0 ?
                              player.attack(enemy) : enemy.attack(player)
                  :  false


                  player.levelup()






            }

            function draw() {
                  player.draw(context)
                  enemy.draw(context)
            }


            console.log(player)

            function gameloop() {
                  clear()
                  FRAMES++

                  onclick = e => {
                        fight()
                  }
                  draw()
                  requestAnimationFrame(gameloop);
            }

            gameloop();
      }

}






new Game
