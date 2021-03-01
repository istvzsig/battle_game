const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;
let FRAMES = 0;
let turns = Math.round(Math.random()*2)

context.lineWidth = 10;
context.strokeRect(0,0,width,height)
// context.scale(.7,.7)

class Entity {

      constructor(name,level,gold,xp) {
            this.name = name;
            this.level = level;
            this.gold = gold;
            this.xp = 0
            this.hp = this.level * 100;
            this.magic = this.hp * 0.66
      }

      draw(url,x,y,sx,sy,tx,ty) {
            let d = 84
            let margin = 15
            const image = new Image();
            image.src = url
            context.textAlign = 'center'
            context.font = '10px PressStart2P'
            context.fillText(this.name,d*tx,d*ty+margin*3)
            context.fillText(`Lv.${this.level}`,d*tx,d*ty+margin*4)

            context.drawImage(image,x*d,y*d,d,d,d*sx,d*sy,d,d)
            context.fillText(`Hp: ${this.hp}`,d*tx,d*ty+margin*2+d*1.7)
            context.fillText(`Magic: ${this.magic}`,d*tx,d*ty+margin*2+d*1.7+margin)
      }
      attack(op) {
            let damage = Math.round(Math.random() * (this.level*20 - this.level*5)+this.level*5)
            let chance = Math.round(Math.random()*10) // between 0 - 10

            turns++
            return chance < 7 ?
                        this.hp <= 0 || op.hp <= 0 ?
                        false
                  : op.hp -= damage
            : false
      }
}

let player = new Entity('dev', 1)
let enemy = new Entity('kulka janos', 1)






function draw(){
      context.clearRect(0,0,width,height)
      player.draw('./img/enemies.png',0,2,1,2,1.5,1.2)
      enemy.draw('./img/enemies.png',x,y,5.619047619,2,6.1,1.2)
}

function fight() {
      FRAMES % 50 == 0 ?
            turns % 2 == 0 ?
                  player.attack(enemy) : enemy.attack(player)
      : false
}
function annuncer(p,e) {
      p.hp > e.hp ?
            console.log(p.name,'wins') : console.log(e.name,'wins')
}



let x = Math.floor(Math.random()*3)
let y = Math.floor(Math.random()*3)

function gameloop() {
      FRAMES++
      requestAnimationFrame(gameloop)
      draw()
      fight()
}

gameloop()
