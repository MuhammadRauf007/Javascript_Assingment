let ani_arr = ["Cat","Dog","Parrot"];

for (let i = 0; i < ani_arr.length; i++) {
    const Names = ani_arr[i];
    console.log(`${Names}`);
}
for (let j = 0; j < ani_arr.length; j++) {
    const Sentence = ani_arr[j];
    if (Sentence ===  "Cat") {
        console.log(`${Sentence} is my favoirte pet`);
    } else {
        console.log(`I Like ${Sentence} as a pet`);
    }
}
console.log(`${ani_arr} : Any of these would make a great pet`);