// Soldier
class Soldier {
constructor(health, strength) {
    this.health= health;
    this.strength= strength;
      }

      attack(){
        return  this.strength;
    }
      receiveDamage (damage) {
          this.damage = damage;
          this.health -= damage;
          } 
    }
    

  // Vikings
 

      class Viking extends Soldier {
    constructor(name, health, strength) {
      
      super(health, strength);
      this.name = name;
    }

   attack(){
   return this.strength;
   }

receiveDamage(damage){
this.health=-damage;
return this.health > 0 ?  `${this.name} has received ${damage} points of damage`:
`${this.name} has died in act of combat`
}
battleCry(){
    return 'Odin Owns You All!';
}

 }

// Saxon
class Saxon  extends Soldier{
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;

        } else{
            return `A Saxon has died in combat`
        } 
    }
}

// War
class War {
    constructor() {
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(bro) {
        this.vikingArmy.push(bro)
    }
    addSaxon(dude){
        this.saxonArmy.push(dude);
    }
    vikingAttack(){
        let randomSaxon=this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)]
        let randomViking=this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)]
        let outcome= randomSaxon.receiveDamage(randomSaxon.strength);
        if (outcome === 'A Saxon died in combat') {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
        }

     return outcome;
    }
    saxonAttack() {
        let randomSaxon=this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)]
        let randomViking=this.vikingArmy[Math.floor(Math.random()* this.sikingArmy.length)]
        let outcome= randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1)
        }

     return outcome;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
          return "Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length === 0) {
          return 'Saxons have fought for their lives and survived another day...';
        }
        else {
          return 'Vikings and Saxons are still in the thick of battle.';
        }
      }
    }

   