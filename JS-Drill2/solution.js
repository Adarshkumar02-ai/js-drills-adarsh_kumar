import users from "./users.js";

// Q1 Find all users who are interested in playing video games.

function intrestedInVideogames(){
    const result = [];
    for(const i in users){
        if(users[i].interests.includes( "Video Games")){
            result.push(i);
            break;
        }
    }
    return result;
}
console.log(intrestedInVideogames());



// Q2 Find all users staying in Germany.

function findUsersInGermany() {
    const result = [];
    for (const i in users) {
        if (users[i].nationality === "Germany") {
                  result.push(i);
        }
    }
    return result;
}
console.log(findUsersInGermany());



// Q3 Find all users with masters Degree.

function userWithMasters(){
    const result = [];
    for (const i in users){
        if(users[i].qualification === "Masters"){
            result.push(i);
        }
    }
    return result;
}
console.log(userWithMasters());




// Q4 Group users based on their Programming language mentioned in their designation.

function groupUsers(){
    const result = {};
    for (const i in users){
        if(users[i].desgination.includes("Javascript")){
           if(result.hasOwnProperty("Javascript")){
                   result["Javascript"].push(i);
           }else{
            result["Javascript"] = [i];
           }
        }
        if(users[i].desgination.includes("Golang")){
            if(result.hasOwnProperty("Golang")){
                result["Golang"].push(i);
            }
            else{
                result["Golang"] = [i];
            }
        }
        if(users[i].desgination.includes("Python")){
            if(result.hasOwnProperty("Python")){
                result["Python"].push(i);
            }
            else{
                result["Python"] = [i];
    }
}
    
}
return result;
}
console.log(groupUsers());