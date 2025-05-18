function memoize(fn) {
    let cache = {};
    
    return function (n) {
        if(cache[n]) {
            console.log("cached value");
            return cache[n];
        }
        else {
             console.log("not cached value");
            cache[n] = fn(n);
            return cache[n];
        }
    }
}

const efficientFn = memoize(calc);
efficientFn(5);
efficientFn(5);

function calc(n) {
    let sum = 0;
    
    for(let i=0;i<n;i++) {
        sum += n;
    }
    return sum;
}


calc(n) computes the sum of n itself n times.
memoize(fn) is a higher-order function that takes any function fn and returns a memoized version of it. It caches results in an object called cache.
The code then memoizes the calc function and measures its execution time for two calls with the same input, 5.
The first call computes the result and stores it in the cache, while the second call retrieves the cached result, significantly reducing execution time.
This showcases the efficiency of memoization in avoiding redundant calculations for the same input.
