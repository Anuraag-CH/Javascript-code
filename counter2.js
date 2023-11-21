var createCounter = function (init) {
    n = init

    function increment() {
        return ++n
    }
    function decrement() {
        return --n
    }
    function reset() {
        n = init
        return n
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }

};



const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset())
console.log(counter.decrement())

