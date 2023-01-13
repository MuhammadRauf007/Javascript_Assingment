// Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let Placename = ["Hunza","Kashmir","Gilgit-Baltistan","Murree","Islamabad"];
console.log(Placename);
let a = Placename.sort();
console.log("In Alphabetical order,",a);
Placename = ["Hunza","Kashmir","Gilgit-Baltistan","Murree","Islamabad"];
 console.log(Placename);
 let b = a.reverse();
 console.log("Reverse Alphabetical order.",b);
Placename = ["Hunza","Kashmir","Gilgit-Baltistan","Murree","Islamabad"];
 console.log(Placename);
 let c = Placename.reverse();
 console.log("In reverse order",c);
 Placename = c.reverse();
 console.log("Rereverse",Placename);
 let d = Placename.sort(); console.log(d);
 Placename.reverse();
 console.log(Placename);