// 3-masala. elementQidir(arr, x)
// Massiv ichidan x qiymatini qidiradi.
// Topilsa indeksini, topilmasa -1 qaytaradi.
function elementQidir(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}
console.log(elementQidir([10, 20, 30], 20));
console.log(elementQidir([10, 20, 30], 5));
console.log(elementQidir([7, 7, 9], 7));
console.log(elementQidir([], 4));
console.log(elementQidir(["olma", "nok"], "nok"));