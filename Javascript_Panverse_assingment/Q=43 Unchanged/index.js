let MagicianName = ["Apollo","Blaine","Copperfield","Devant"];

function show_magicians(magicians) {
    magicians.forEach((mag) => {
        console.log(mag)
    })
}
// show ooriginal arr
show_magicians(MagicianName)


function make_great(magicians) {
    magicians.forEach((mag, i) => {
        MagicianName[i] = `The great ${mag}`
    })

    return MagicianName
}
const TransformedMagiciansNames = make_great(MagicianName);
console.log(TransformedMagiciansNames);
