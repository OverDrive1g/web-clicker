export class DamageController{
    random(n){
        Math.round(Math.random()*n)
    }
    rollDice(N,S){
        let value = 0
        for(let i = 0; i < N; i++){
            value += this.random(S+1)
        }
        return value
    }
    getDamagePattern(){
        let roll1 = this.rollDice(1, 50)
        let roll2 = this.rollDice(1, 50)
        let roll3 = this.rollDice(1, 50)
        let damage = roll1 + roll2 + roll3
        damage = damage - Math.min(roll1, roll2, roll3)
        return damage
    }

    getDamageByAttack(attack){
        let deltaAttack = attack/4
        return deltaAttack+(attack*(this.getDamagePattern()/100))
    }
}