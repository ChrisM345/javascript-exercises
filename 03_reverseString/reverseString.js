const reverseString = function(text) {
    let len = text.length - 1;
    answer = ""
    for(len; len >= 0; len--){
        answer += text[len];
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
