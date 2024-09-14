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