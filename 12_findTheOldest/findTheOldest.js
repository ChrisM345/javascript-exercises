const findTheOldest = function(array) {
    const oldestPerson = array.reduce((oldest, currPerson) =>{
        oldestDeath = oldest.yearOfDeath;
        if (!oldestDeath) oldestDeath = new Date().getFullYear();
        oldestAge = oldestDeath - oldest.yearOfBirth;

        currPersonBirth = currPerson.yearOfBirth;
        currPersonDeath = currPerson.yearOfDeath;
        if(!currPersonDeath) currPersonDeath = new Date().getFullYear();
        currPersonAge = currPersonDeath - currPersonBirth;

        return currPersonAge > oldestAge ? currPerson : oldest
    })

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
