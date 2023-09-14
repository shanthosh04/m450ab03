function getLastElement(arr) {
    if (arr && arr.length > 0) {
        return arr[arr.length - 1];
    } else {
        return undefined; 
    }
}

function isPalindrome(word) {
    word = word.toLowerCase();
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return capitalizedWords.join(' ');
}

function lengthOfLongestWord(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength;
}

module.exports = {
    getLastElement,
    isPalindrome,
    capitalizeWords,
    lengthOfLongestWord
};
