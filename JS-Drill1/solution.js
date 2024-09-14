import arrayOfObjects from "./persons.js";



// Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function getEmails(){
    let emails=[];
    for(let i=0;i<arrayOfObjects.length;i++){
      emails.push(arrayOfObjects[i].email);
    }
     return emails;
  }
  console.log(getEmails());

  // Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function getHobbies(age){
    let hobbies=[];
    for(let i=0; i<arrayOfObjects.length;i++){
      if(arrayOfObjects[i].age === age){
        hobbies.push(arrayOfObjects[i].hobbies);
      }
      }
    return hobbies;
  }
  console.log(getHobbies(30));



//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function getStudents(){
    let names =[];
    for(let i=0; i<arrayOfObjects.length; i++){
      if(arrayOfObjects[i].isStudent && arrayOfObjects[i].country === 'Australia'){
        names.push(arrayOfObjects[i].name);
      }
      }
      return names;
    }
    console.log(getStudents());