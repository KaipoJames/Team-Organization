import { Player } from "./player.js";
import { Team } from "./team.js";
import { Market } from "./market.js";

const market = new Market();
const menehune = new Team("Menehune", "Moanalua");

const free_agents = market.free_agents;

console.log("");
free_agents.map(pl => console.log(pl.full_name));

for (let i = 0; i < 5; i++) {
    const draft_choice = market.findRandomPlayer();
    menehune.draftPlayer(draft_choice);
    market.deleteFreeAgent(draft_choice.full_name);
}

console.log("");
free_agents.map(pl => console.log(pl.full_name));
// console.log(JSON.stringify(miko));
console.log(menehune.team_members);
console.log("MeneHune's Rating: " + menehune.calculateRating());