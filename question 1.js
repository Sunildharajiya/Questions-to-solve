/* 
The Magical Sorting Hat:
   Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
 */

let arr = [
    "sunil",
    "chirag",
    "yash",
    "mahendra",
    "chandrakant",
    "sourav",
    "prince"
]

let house = []
let Gryffindor = [ "----Gryffindor----",]
let Hufflepuff = ["----Hufflepuff----",]
let Ravenclaw = ["----Ravenclaw----",]
let Slytherin = ["----Slytherin----",]

for(let a of arr){
    if(a.length < 6){
        house.push(a + " : Gryffindor")
        Gryffindor.push(a)
    }else if(a.length < 8){
        house.push(a + " : Hufflepuff")
        Hufflepuff.push(a)
    }else if(a.length < 12){
        house.push(a + " : Ravenclaw")
        Ravenclaw.push(a)
    }else{
        house.push(a + " : Slytherin")
        Slytherin.push(a)
    }
}

console.log(house);
console.log(Gryffindor)
console.log(Hufflepuff)
console.log(Ravenclaw)
console.log(Slytherin)