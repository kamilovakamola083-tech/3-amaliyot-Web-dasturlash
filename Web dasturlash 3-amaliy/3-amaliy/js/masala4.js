// 4-masala. sezarShifri(s, k)
// Harflarni alifboda k ta o'ngga suradi.
function sezarShifri(s, k) {
    let natija = "";
    let siljish = ((k % 26) + 26) % 26;
    for (let i = 0; i < s.length; i++) {
        let belgi = s[i];
        if (belgi >= "a" && belgi <= "z") {
            let yangiKod = ((belgi.charCodeAt(0) - 97 + siljish) % 26) + 97;
            natija += String.fromCharCode(yangiKod);
        } else {
            natija += belgi;
        }
    }
    return natija;
}
console.log(sezarShifri("salom", 3));
console.log(sezarShifri("xyz", 2));
console.log(sezarShifri("abc", 0));
console.log(sezarShifri("", 5));
console.log(sezarShifri("salom dunyo", 1));