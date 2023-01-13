let MagicianName = ["Apollo","Blaine","Copperfield","Devant"];

function make_great(magicians) {
    magicians.forEach((mag, i) => {
        MagicianName[i] = `The great ${mag}`
    })

    return MagicianName
}

console.log(make_great(MagicianName));