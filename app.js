// 1
document.getElementById("team-name").style.color = "#6C6A78";
document.getElementById("team-name-lg").style.color = "#5a255b";
2//
let teamMembers = ["Code Giyu", "Natacha", "Adedamola", "Ify", "devee", "micheal", "sawiya"];
console.log("2. " + teamMembers[2]);
3//
let info ={
    "First Name":"Adedamola",
    "Last name": "Jimi-Bada",
    "Best movie": "Star Wars: Revenge of the Sith",
    "Best food": "Beans",
    Complexion: "Burnt",
    "Birth month": "October",
    state: "Osun",
    "Group name": "Hermes"
}
console.log("3. " + info["Best movie"]);

4//
const noun= "Goat";
const verb = "kill";
const adjective = "beautiful"
 const sentence1 = "The " + noun + " will always "+ verb + " anything that is " + adjective ;
 const sentence2 = "A " + noun + " was spotted at the market square " + verb + "ing the baby";
 const sentence3 = "It was " + adjective + " day, until the " +noun + " started " + verb + "ing random strangers"
 const sentence4 = "Dont test this " + noun + ", it doesnt care if you are "+ adjective +  ", it will " + verb + "you"
 const sentence5 = "I am the "+ noun + " that "+verb+ "s," + " be very afraid"
 5//
 function printRemainder( a, b){
     return a % b;
 }
 console.log("5. "+ printRemainder(8,3));
 document.write(printRemainder(8,3))
 
 6//
 function quadraticEquation(a, b, c){
    let root =((-1*b) + Math.sqrt(Math.pow(b,2) - (4*a*c))) / (2*a);
    let root2 =((-1*b) - Math.sqrt(Math.pow(b,2) - (4*a*c))) / (2*a);
    return `${root} and ${root2}`
 }
 console.log("6. " + quadraticEquation(8, 9, 1))
 
 7//
 const myNoun = "dog";
 const myAdjective = "big";
 const myVerb = "ran";
 const myAdverb = "quickly";
 const wordArticle = "The";

 console.log(`7. ${wordArticle} ${myAdjective} ${myNoun} ${myVerb} ${myAdverb} over the ledge`);
8//
 const PI = 3.142;
 function areaOfCircle(radius, unit){
     let area= PI * (Math.pow(radius,2)) + unit;
     return area         
 }
 console.log("8. " + areaOfCircle(9,"cm"))

 9//
 const principal = 8200
 const rate = 17.5
 const time = 2.6
 const SI = (principal * rate * time) / 100 ;
 console.log(`9. #${SI}`);

10//
 console.log( "10. " + 10 % 4);

 11//
 const meritMass = 78;
 const meritHeight = 1.69;
 const nutJobMass = 92;
 const nutJobHeight = 1.95;
 const meritBMI = meritMass / (Math.pow(meritHeight,2));
 console.log(`Merit's BMI from Data1- ${meritBMI} kg/m2`);
 const nutJobBMI = nutJobMass / (Math.pow(nutJobHeight,2));
 console.log(`Nutjob's BMI from Data1= ${nutJobBMI} kg/m2`);
 let meritHigherBMI = meritBMI > nutJobBMI ;
 console.log(meritHigherBMI);


 const meritMass2 = 85;
 const meritHeight2 = 1.76;
 const nutJobMass2 = 95;
 const nutJobHeight2 = 1.88;
 const meritBMI2 = meritMass2 / (Math.pow(meritHeight2,2));
 console.log(`Merit's BMI from Data2- ${meritBMI2} kg/m2`);
 const nutJobBMI2 = nutJobMass2 / (Math.pow(nutJobHeight2,2));
 console.log(`Nutjob's BMI from Data2- ${nutJobBMI2} kg/m2`);
 let meritHigherBMI2 = meritBMI2 > nutJobBMI2;
 console.log(meritHigherBMI2);