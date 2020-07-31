// Example
// anagrams('rail safety', 'fairy tails') --> True
// anagrams('RAIL! SAFETY!', 'fairy tails') --> True
// anagrams('Hi there', 'Bye there') --> False

function anagrams(strA, strB) {
    const aCharMap = buildCharMap(strA);
    const bCharMap = buildCharMap(strB);

    if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

console.log(anagrams('hello', 'hellooooo'));