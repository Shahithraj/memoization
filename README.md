calc(n) computes the sum of n itself n times.
memoize(fn) is a higher-order function that takes any function fn and returns a memoized version of it. It caches results in an object called cache.
The code then memoizes the calc function and measures its execution time for two calls with the same input, 5.
The first call computes the result and stores it in the cache, while the second call retrieves the cached result, significantly reducing execution time.
This showcases the efficiency of memoization in avoiding redundant calculations for the same input.
