// پیاده‌سازی تکراری 

// اعداد فیبوناچی در ریاضیات به اعدادی گفته می‌شوند که از یک دنباله صحیح به نام دنباله فیبوناچی پیروی می‌کنند.
//  در این دنباله هر عدد، به جز دو عدد اول، حاصل جمع دو عدد قبل از خود در دنباله است:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ....
function fib(n) {

    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        let a = result[i - 1];
        let b = result[i - 2];

        result.push(a + b);
    }
    return result[n];
}

console.log(fib(7));

// (2)پیاده‌سازی بازگشتی
function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));