//static= is a keyword that defines properties and methods that belong to a class itself
//        rather than the objects created from that class. (class owns anything static, not objects)

class Champions {
    static championCount = 0;

    constructor(champion, origin){
        this.champion = champion;
        this.origin = origin;
        Champions.championCount++;
    }
    getOrigin(){
        console.log(`I am ${this.champion} from ${this.origin}`);
    }
    static getChampionCount(){
        console.log(`there are ${Champions.championCount} champions created.`);
    }
}

const champ1 = new Champions("Garen", "Demacia");
const champ2 = new Champions("Ahri", "Ionia");
const champ3 = new Champions("Darius", "Noxus");
champ1.getOrigin();
champ2.getOrigin();
champ3.getOrigin();
Champions.getChampionCount();