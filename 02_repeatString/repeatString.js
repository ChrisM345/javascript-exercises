const repeatString = function(text, timesToRepeat) {
    if (timesToRepeat < 0){return 'ERROR';}
    let answer = '';
    for (let i = 0; i < timesToRepeat; i++){
        answer += text;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
