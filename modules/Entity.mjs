export class Entity {
      constructor(name,level) {
            this.name = name;
            this.level = level;
            this.hp = this.level * 100;
            this.magic = this.level * 66
      }
}
export class Player extends Entity {
      constructor() {
            super('dev',1);
            this.spells = new Array();
            this.gold = 10;
            this.xp = 0;
            this.inventory = new Array();

      }
}



// export default class Entity {
//       constructor(name,level,x,y) {
//             this.name = name;
//             this.level = level;
//             this.hp = this.level * 100;
//             this.magicpoint = this.level * 50;
//             this.x = x;
//             this.y = y;
//
//
//       }
//       get left() {
//             return this.x + battle_game.width / 4
//       }
//       get right() {
//             return this.y + battle_game.height / 2
//       }
//       draw(context) {
//             let font = 21
//             context.font = `${font}px PressStart2P`;
//             context.fillStyle = '#000';
//             context.fillText(this.name,this.left,this.y);
//             context.fillStyle = '#000';
//             context.font = `${font/1.5}px PressStart2P`;
//             context.textAlign = 'center';
//             context.fillText(`Lv.${this.level}`,this.left,this.y+font);
//             context.fillText(`Hp.${this.hp}`,this.left,this.y+font*2);
//             context.fillText(`Mp.${this.magicpoint}`,this.left,this.y+font*3);
//
//       }
//       attack(opponent,context) {
//
//             let CHANCE = Math.round(Math.random() * 10);
//             let DMG = Math.round(Math.random() *
//                   (this.level * 20 - this.level * 10) + this.level * 10)
//
//             return CHANCE < 7 ?
//                         (opponent.hp -= DMG) : console.log('MISS')
//
//       }
//       levelup() {
//             if(this.xp >= this.xpReq) {
//                   this.level++
//
//             }
//       }
// }
//
// export class Player extends Entity {
//       constructor(name,level) {
//             super(name,level,0,100);
//             this.stats = {};
//             this.gold = 10;
//             this.xp = 0;
//             this.xpReq = this.level * 33;
//             this.inventory = new Array();
//       }
//       // savegame() {
//       //       // for(let stat in this) {
//       //       //       if(stat == 'name' ||
//       //       //             stat == 'level' ||
//       //       //             stat == 'gold' ||
//       //       //             stat == 'xp') {
//       //       //                   this.stats[stat] = this[stat]
//       //       //
//       //       //                   localStorage.setItem('player', JSON.stringify(this.stats))
//       //       //             }
//       //       //
//       //       // }
//       //       localStorage.setItem('player', JSON.stringify(this))
//       // }
//       // loadgame() {
//       //       return JSON.parse(localStorage.getItem('player'))
//       // }
//
// }
// export class Enemy extends Entity {
//       constructor(name,level) {
//             super(name,level,battle_game.width/2,100);
//       }
// }
//
// export class Button {
//       constructor(x,y,w,h) {
//             this.x = x;
//             this.y = y;
//       }
// }
