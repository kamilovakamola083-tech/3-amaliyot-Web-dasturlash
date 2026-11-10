// 2-masala. satrQisqartir(s, n)
// Satr uzun bo'lsa, kerakli belgilarni qoldirib, ... qo'shadi.
function satrQisqartir(s, n) {
    if (s.length > n) {
        return s.slice(0, n) + "...";
    }
    return s;
}
console.log(satrQisqartir("JavaScript dasturlash tili", 10));
console.log(satrQisqartir("CSS", 10));
console.log(satrQisqartir("Salom", 5));
console.log(satrQisqartir("", 3));
console.log(satrQisqartir("Dasturlash", 0));