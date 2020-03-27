/*Stores my name with the variable name, isName */ 
let isName = "Seotan Jonathan Obadamilare";
/*Stores my courses in an array, isCourses */
let isCourses = ["Html", "Css", "JavaScript"];
/* Displays my name on the console */
 console.log("My name is: " + isName);
/* Finds and displays the array isCourses on the console */
for(i = 0; i < isCourses.length; i++) {
console.log(isCourses[i]);
}
const myOddNumber = [];
 for (let i=0; i<=200; i++) {
   if (i%2!==0) {
     myOddNumber.push(i);
   }
 }
 console.log(myOddNumber);