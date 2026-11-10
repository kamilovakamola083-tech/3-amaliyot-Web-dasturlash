// 1-masala. haroratOgir(c)
// Selsiy haroratini Farengeytga aylantiradi.
function haroratOgir(c) {
    let farengeyt = c * 9 / 5 + 32;
    return Math.round(farengeyt * 10) / 10;
}
console.log(haroratOgir(36.6)); 
console.log(haroratOgir(-40));
console.log(haroratOgir(0));
console.log(haroratOgir(100));
console.log(haroratOgir(-273.15));