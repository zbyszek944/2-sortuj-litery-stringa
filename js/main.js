function sortLetters(inputString) {

    return inputString.split('').sort().join('');

}

const stringToSort = "Akademia108";
const sortedString = sortLetters(stringToSort);

console.log(sortedString);