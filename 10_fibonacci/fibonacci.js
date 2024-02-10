const fibonacci = function(nth_number) {
    if (nth_number < 0) return "OOPS";
    if (nth_number == 0) return 0;
    nth_number = parseInt(nth_number);
    first_number = 1;
    second_number = 2;
    if (nth_number == 1 || nth_number == 2) return 1;
    nth_number -= 2;
    current_number = 1;
    while(nth_number != 0){
        second_number = first_number;
        first_number = current_number;
        current_number = first_number + second_number;
        nth_number--;
    }

    return current_number;

};

// Do not edit below this line
module.exports = fibonacci;
