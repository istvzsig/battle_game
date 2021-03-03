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
