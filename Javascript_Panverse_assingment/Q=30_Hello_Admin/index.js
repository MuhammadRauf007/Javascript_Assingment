let username = ["admin","user1","user2","user3","user4"];
let userinput = prompt(username);






if (userinput === "admin") {
    console.log("Hello admin, would you like to see a status report?");
}
else if (userinput != "admin" && userinput){

    console.log(` Hello ${userinput}, thank you for logging in again.`);
}
else {
    console.log("Username is invaild");
}



    if (username.length == 0 ){
        console.log("We need to find some user");
    }
      