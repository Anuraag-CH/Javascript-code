https://leetcode.com/problems/memoize/

function memoize(fn) {
    const cache = {}

    return function (...args) {
        key = (JSON.stringify(args))
        if (key in cache) {
            return cache[key]
        }

        cache[key] = fn(...args)
        return cache[key]
    }
}