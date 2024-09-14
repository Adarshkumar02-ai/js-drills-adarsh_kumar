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

    //    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function nameCity(index){
    if(index >=0 && index< arrayOfObjects.length){
      let person = arrayOfObjects[index];
      console.log(`Name: ${person.name}, City: ${person.city}`)
    }
      else{
        console.log("Index out of range");
      }
    }
    nameCity(3);


    //    Implement a loop to access and print the ages of all individuals in the dataset.


    function ages(){
        for(let i=0; i<arrayOfObjects.length;i++){
          console.log(`Name: ${arrayOfObjects[i].name} Age: ${arrayOfObjects[i].age}`);
        }
      }
      ages();


      // Create a function to retrieve and display the first hobby of each individual in the dataset.


  function firstHobby(){
    let hobbies=[];
    for(let i=0; i<arrayOfObjects.length;i++){
      hobbies.push(arrayOfObjects[i].hobbies[0]);

    }
    return hobbies;
  }
  console.log(firstHobby());