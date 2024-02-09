const removeFromArray = function(anArray, ...valuesToRemove) {
    return anArray.filter((val) => !valuesToRemove.includes(val));
};

removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
