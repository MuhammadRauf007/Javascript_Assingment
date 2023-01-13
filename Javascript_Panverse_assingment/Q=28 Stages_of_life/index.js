let age = prompt();

if (age < 2) {
    console.log("The person is  a baby");
}
 else if(age == 2 || age < 4){
    console.log("The person is a toddler"); 
}else if (age == 4 || age < 13){
    console.log("The person is a kid");
}else if (age == 13 || age < 20){
    console.log("The person is a teenager");
}else if (age == 20 || age < 65 ){
    console.log("The person is an adult");
}else if (age >= 65){
    console.log("The person is an elder");
}else {
    console.log("Please input vaild number");
}


// You can also done with switch statment

// switch (true) {
//     case age < 2:
//     console.log("The person is  a baby");
//         break;
//     case  age < 4:
//     console.log("The person is a toddler"); 
//         break;
//     case  age < 13:
//         console.log("The person is a kid");
//         break;
//     case  age < 20:
//         console.log("The person is a teenager");
//         break;
//     case  age < 65:
//         console.log("The person is an adult");
//         break;
//         case age >= 65:
//             console.log("The person is an elder");
//             break;

//     default:
//         console.log("Please input an age");
//         break;
// }

