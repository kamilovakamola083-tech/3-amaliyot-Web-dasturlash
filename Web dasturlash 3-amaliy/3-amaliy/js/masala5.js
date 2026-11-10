// 5-masala. engUzunOsish(arr)
// Ketma-ket o'suvchi sonlarni sanaydi.
// Eng uzun bo'lak uzunligini qaytaradi.
function engUzunOsish(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let joriyUzunlik = 1;
    let engKattaUzunlik = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            joriyUzunlik++;
        } else {
            joriyUzunlik = 1;
        }

        if (joriyUzunlik > engKattaUzunlik) {
            engKattaUzunlik = joriyUzunlik;
        }
    }
    return engKattaUzunlik;
}
console.log(engUzunOsish([1, 2, 3, 1, 2, 3, 4, 5, 2]));
console.log(engUzunOsish([5, 4, 3]));
console.log(engUzunOsish([1, 2, 3, 4]));
console.log(engUzunOsish([2, 2, 2]));
console.log(engUzunOsish([]));
console.log(engUzunOsish([9]));