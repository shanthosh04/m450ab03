function getLastElement(arr) {
    if (arr && arr.length > 0) {
        return arr[arr.length - 1];
    } else {
        return undefined; 
    }
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
