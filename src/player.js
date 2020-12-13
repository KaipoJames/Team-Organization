export class Player {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.full_name = this.first_name + " " + this.last_name;

        this.assignInitialStats();
        this.rating = this.getRating();

        this.money = 1000;
        this.pay_rate = 100;

        this.isInjured = false;
        this.isDrafted = false;
    }
    assignInitialStats(){
        this.speed = this.getRandomSkillRating();
        this.strength = this.getRandomSkillRating();
        this.endurance = this.getRandomSkillRating();
        this.agility = this.getRandomSkillRating();
    }
    getRating() {
        let rating = Math.floor((this.speed + this.strength + this.endurance + this.agility) / 4);
        return rating
    }
    getRandomSkillRating() {
        return Math.floor(Math.random() * (61 - 50 + 1) + 50)
    }

    train(trait) {
        if (trait == "speed") {
            this.speed++;
        }
        if (trait == "strength") {
            this.strength++;
        }
        if (trait == "endurance") {
            this.endurance++;
        }
        if (trait == "agility") {
            this.agility++;
        }
    }
}