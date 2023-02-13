// 1. STUDENT NAMES

var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for(let i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i]);
   }



//////////////////////////////////////////////////////////////////////////
//2. INTERESTS


let firstInterest = {interest: 'japan', favorite: false};
let secondInterest = {interest: 'geometric art', favorite: true};
let thirdInterest = {interest: 'black and white tattoos', favorite: false};
let fourthInterest = {interest: 'hip hop', favorite: false};
let fifthInterest = {interest: 'coding', favorite: false};

let interests = [firstInterest, secondInterest, thirdInterest, fourthInterest, fifthInterest];

 

//////////////////////////////////////////////////////////////////////////
//3. FAVORITE INTEREST

for(var i = 0; i < interests.length; i++){
    if(interests[i].favorite === true){
      console.log("My absolute favorite interest is: " + interests[i].interest);
   }
     
    else{
      console.log("One of my interests is: " + interests[i].interest);
   }}