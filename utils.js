export const replace = (strings) => {
  if (!Array.isArray(strings)) return "Not Array";
  
  const newStrings = [];

  for (const string of strings) {
    let newString = "";
    let prevWord = ""; 
    for (const word of string) {
      if (prevWord !== word) {
        newString += word;
        prevWord = word;
      }
    }
    newStrings.push(newString);
  }

  return newStrings;
};

export const sortArray = (numbers) => {
  if (!Array.isArray(numbers)) return "Not Array";

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);
  }

  const newNumbers = numbers.filter(function(elem) {
    if (elem % 2 !== 0) return true;
    else return false;
  });

  newNumbers.sort();

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) newNumbers.splice(i, 0, numbers[i]);
  }

  return newNumbers;
}
