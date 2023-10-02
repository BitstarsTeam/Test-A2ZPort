function findLongestWordWithMostVowels(sentence) {
  // Helper function to count vowels in a word
  function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of word) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  let longestWord = '';
  let maxWordLength = 0;
  let maxVowelCount = 0;

  // Remove non-English letters and split the sentence into words
  const words = sentence.replace(/[^a-zA-Z\s]/g, '').split(' ');

  for (let word of words) {
    const wordLength = word.length;
    const vowelCount = countVowels(word);

    if (wordLength > maxWordLength || (wordLength === maxWordLength && vowelCount > maxVowelCount)) {
      longestWord = word;
      maxWordLength = wordLength;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

const sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const longestWord = findLongestWordWithMostVowels(sentence);
console.log(longestWord); // Output: "experience"
