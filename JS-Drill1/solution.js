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