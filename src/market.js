import { Player } from "./player.js";

const free_agents = [];

const names = [
    "Joseph Loi-On",
    "Jacob Titus",
    "Kaipo DeRego",
    "Kaipo Wilmeth",
    "Kyron Nakamitsu",
    "Dylan Chang",
    "Christian Reid",
    "Erik Winegar",
    "Kealii Guzman",
    "Sean Abbott",
    "David Auna",
    "Keahi Nutall"
];

export class Market {
    constructor() {
        this.money = 0;
        this.free_agents = this.getFreeAgents();
    }

    getFreeAgents() {
        for (let i = 0; i < names.length; i++) {
            const name = names[i].split(" ");
            const player = new Player(name[0], name[1]);
            free_agents.push(player);
        }
        return free_agents;
    }
    addFreeAgent(player) {
        this.free_agents.push(player);
    }
    deleteFreeAgent(name) {
        for (let i = 0; i < this.free_agents.length; i++) {
            if (this.free_agents[i].full_name == name) {
                this.free_agents.splice(i, 1);
            }
        }
    }

    findPlayerByFullName(name) {
        const target = this.free_agents.filter(player => player.full_name == name);
        if (target.length != 0) {
            console.log(target);
        } else {
            console.log("Player " + name + " not found with the credentials you gave.");
        }
    }
    findRandomPlayer() {
        const rand = Math.floor(Math.random() * this.free_agents.length);
        const free_agent = free_agents[rand];
        return free_agent;
    }
    findHealthyPlayers() {
        const targets = this.free_agents.filter(player => player.isInjured == false);
        if (targets.length != 0) {
            console.log(targets);
        } else {
            console.log("Unfortunately, all of the players are injured");
        }
    }

}