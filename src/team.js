export class Team {
    constructor(name, city) {
        this.name = name;
        this.city = city;
        this.team_members = [];

        this.money = 100000;
    }

    draftPlayer(player) {
        if (this.team_members.length < 10) {
            if (player.isDrafted == false) {
                this.team_members.push(player);
                this.calculateRating();
                player.isDrafted = true;
                player.current_team = this.name;
            } else {
                console.log("Player is already assigned to another team");
            }
        } else {
            console.log("Team Full. Unable to draft player");
        }
    }

    payPlayer(player) {
        const to_pay_player = player.pay_rate;
        console.log("Players Pay: " + to_pay_player);
        this.money -= to_pay_player;
        player.money += to_pay_player;
    }

    calculateRating() {
        let total = 0;
        const ratings = this.team_members.map(player => player.rating);
        for (let i = 0; i < ratings.length; i++) {
            total += ratings[i];
        }
        this.rating = Math.round(total / ratings.length);
        return this.rating;
    }

}