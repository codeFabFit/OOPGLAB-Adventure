// arrays within objects 

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums", "axe", "gun"]
// }
// // adventurer.belongings[2]
// // console.log(adventurer.belongings[2])


// // let someNumber = 20;

// // while(someNumber < 40){
// //     someNumber++;
// //     console.log("hello world " + someNumber)
// // }

// for (let i = 0; i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i])
// }

// Objects within an object 

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat"
// 	}
// }

// console.log(adventurer.companion.name)

// Object within an Object within an Object...

// const adventurer = {
// 	name: Timothy,
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite"
// 		}  
// 	}
// }
// console.log(adventurer.companion.companion.type)


//Array within an Object within an Object within an Object.....

// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite",
// 			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
// 		}  
// 	}
// }

// console.log(adventurer.companion.companion.belongings[2])


// An array of objects 

// const movies = [ 
//     { title: "Tokyo Story" },  
//     { title: "Paul Blart: Mall Cop" }, 
//     { title: "L'Avventura" }, 
// ];

// console.log(movies[1])

// combining objects, arrays amd functions 

// const foo = {
//     someArray:[1,2,3]
// };
// foo.someArray[0]; // 1

// // as function

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// foo.someObject.someProperty; // oh hai!

// // as object n object

// const foo = {
//     someMethod:()=>{
//         console.log('oh hai');
//     }
// };

// foo.someMethod();// logs 'oh hai!'

const itemShop = [
    { name:"clothing", cost: 2},
    { name:"Lizard", cost: 10},
    { name:"Hat", cost: 8},
    { name:"Shield", cost: 10},
    
];

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
//     gold: 20,
// 	belongings: ["sword", "potion", "Tums"],
    
    


class Adventurer{
    constructor(name, hitPoints, gold) {
        this.name= name;
        this.hitPoints = hitPoints;
        this.gold = gold;
       this.belongings = [];
    }

    buyItem(item) {
        this.belongings.push(item.name); // pushes item name into inv
        this.gold -= item.cost; // reduces own money
    };
    drinkPotion(strength){
        this.hitPoints+= strength;
    }
    takeDamage(amount){
        this.hitPoints -= amount;
    }
    die(){
        console.log(`${this.name} has died!`)
    }
}

class Dwarf extends Adventurer{
constructor(name, hitPoints, gold){
    super(name, hitPoints, gold);
}
}
class Elf extends Adventurer{
    constructor(name, hitPoints, gold){
        super(name, hitPoints, gold);
        this.magic = magic; 
    }
    }


// class Elf {
//     constructor(){
//         this.name = name;
//         this.hitPoints = this.hitPoints;
//         this.gold = gold;
//         this.belongings = [];
//         this.magic= magic;
//     }

//     buyItem(item) {
//         this.belongings.push(item.name); // pushes item name into inv
//         this.gold -= item.cost; // reduces own money
//     };
//     drinkPotion(strength){
//         this.hitPoints+= strength;
//     }
//     takeDamage(amount){
//         this.hitPoints -= amount;
//     }
//     die(){
//         console.log(`${this.name} has died!`)
//     }
// }

// class Dwarf {
//     constructor(){
//         this.name = name;
//         this.hitPoints = this.hitPoints;
//         this.gold = gold;
//         this.belongings = [];

//     }

//     buyItem(item) {
//         this.belongings.push(item.name); // pushes item name into inv
//         this.gold -= item.cost; // reduces own money
//     };
//     drinkPotion(strength){
//         this.hitPoints+= strength;
//     }
//     takeDamage(amount){
//         this.hitPoints -= amount;
//     }
//     die(){
//         console.log(`${this.name} has died!`)
//     }
//     blackSmith(itemName){
//         this.belongings.push(itemName)
//     }
// }

// console.log(Dwarf)
    // const adventurer1 = new Adventurer("tim", 10, 20);
    // const adventurer2 = new Adventurer("jake", 10, 20);
    // const adventurer3 = new Adventurer("zeek", 5, 1000);
    // const adventurer4 = new Adventurer("aaron", 50, -20);
// ------------- dont mess with the class above, but below you can adjust change 

// adventurer1.name = "boo";
// adventurer1.buyItem(itemShop[2]);
// adventurer1.drinkPotion(30)
// adventurer1.takeDamage(4)
// console.log(adventurer1)



// this is one way  to get more adventurers 

// const tim = new Adventurer();
// console.log(tim);

// const ad1 = new Adventurer();
// const ad2 = new Adventurer();
// const ad3 = new Adventurer();

// console.log(ad1)
// console.log(ad2)
// console.log(ad3)

// another way to do it to get more adventurers

// const adventurers = [];

// adventurers.push(new Adventurer());
// adventurers.push(new Adventurer());
// adventurers.push(new Adventurer());

// console.log(adventurers[2])

// make into loop to get a certain amount of adventures 

// const adventurers = [];

// for (let i = 0; i < 20; i++){
//     adventurers.push(new Adventurer());
// }
// console.log(adventurers)