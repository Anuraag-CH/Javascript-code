var filter = function (arr, fn) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let val = fn(arr[i], i);

        if (val) {
            res.push(arr[i]);
        }
    }

    return res;
};
