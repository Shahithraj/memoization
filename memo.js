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
