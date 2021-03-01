class Entity {
      constructor(name) {
            this.name = name;
            this.level = 1;
      }
      get hp() {
            return this.level * 100;
      }
      get magic() {
            return this.level * 65;
      }

}

class Player extends Entity {
      constructor() {
            super('Dev');
            this.gold = 10;
      }
      get xp() {
            return 0
      }
      get xprequired() {
            return this.level * 33
      }

}
class Enemy extends Entity {
      constructor() {
            super();
            let names = ['b', 'c', '3d'];
            this.name = names[Math.floor(Math.random()*names.length)];
      }
}

const player = new Player();
const enemy = new Enemy();
