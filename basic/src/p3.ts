// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(sentence: string, word: string): number {
  const wordsOfString: string[] = sentence.split(" ");
  let count: number = 0;
  wordsOfString.forEach((item: string) => {
    if (item.toLowerCase() === word.toLowerCase()) {
      count += 1;
    }
  });

  return count;
}

const dialog: string = "happy holly Happy bangladesh happy party";
const result: number = countWordOccurrences(dialog, "happy");
console.log(result);
