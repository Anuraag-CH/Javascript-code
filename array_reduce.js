
var reduce = function (nums, fn, init) {
    let val = init

    if (nums.length == 0) {
        return val
    }

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i])
    }

    return val

};