https://leetcode.com/problems/allow-one-function-call/

let once = function (fn) {
    isCalled = false
    return function (...args) {
        if (isCalled) {
            return undefined
        }
        else {
            isCalled = true

            return fn(...args)
        }
    }
};