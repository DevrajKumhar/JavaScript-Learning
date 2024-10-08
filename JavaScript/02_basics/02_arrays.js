const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "superman", "flash"]
// marvel_heros.push(dc_heros)

console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// sprad operator [... arrayName]

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]]
console.log(anotherArray);

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);



console.log(Array.isArray("DEVRAJ"));
console.log(Array.from("DEVRAJ"));
console.log(Array.from({name: "devraj"}));  //interesting


let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3));
