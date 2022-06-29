//fibonacci sequence
function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
    }
    console.log(fib(10));
    console.log(fib(20));
    console.log(fib(30));
    console.log(fib(40));
    console.log(fib(50));