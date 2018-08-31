// ========================= STEP 1 ============================

var weapon = function(name, reach, attack, risk, rel, uses){
    this.name = name;
    this.reach = reach;
    this.attack = attack;
    this.risk = risk;
    this.reliability = rel;
    this.uses = uses;
    this.didDam = false;
    this.receivedDam = false;
    this.roundDamage = 0;
    this.used = function(){
        this.uses--;
    }
    this.damageBool = function(perc){
        var comp = Math.floor(Math.random() * 100) + 1;

        if (perc - comp > 0) {
          return false
        } else {
          return true
        }
    }
    this.calcDamage = function(){
        var min = this.attack[0];
        var max = this.attack[1];
        return Math.floor(Math.random() * (max - min) + min);
    }
}

module.exports = weapon;
//===========================================================