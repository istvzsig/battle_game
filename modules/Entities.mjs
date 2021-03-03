import {minmax} from './functions.mjs';

export class Entity {
      constructor(name,level,hp) {
            this.name = name;
            this.level = level;
            this.hp = this.fullhp

      }

      get fullhp() {
            return this.hp = this.level * 100

      }

      set fullhp(value) {
            this.hp = value
      }

      attack(enemy){
            let DMG = minmax(this.level*30, this.level*10)
            if(enemy.hp >= 0) {
                  return enemy.hp -= DMG;
            }
            console.log(enemy.hp)
            return
      }

      // get magic() {
      //       return this.hp / 2
      // }
}
export class Player extends Entity {
      constructor() {
            super(null,1);
            this.spells = new Array();
            this.gold = 10;
            this.xp = 0;
            this.inventory = new Array();

      }
}
