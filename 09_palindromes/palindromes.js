const palindromes = function (string) {
    string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); 
    string = string.replace(/\s+/g, '');
    string = string.toLowerCase();
    reversed_string = string.split("").reverse().join("");
    return string == reversed_string;
};

// Do not edit below this line
module.exports = palindromes;
