export class Entity {
      constructor(name,level) {
            this.name = name;
            this.level = level;

      }
      get hp() {
            return this.level * 1e2
      }
      get magic() {
            return this.hp / 2
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
