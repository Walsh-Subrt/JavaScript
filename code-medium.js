// 1) Funkce pro vrácení slova na dané pozici v malých písmenech
function lowercaseWord(stringInput, wordIndex = 1) {
  // Rozdělíme string na pole slov
  const words = stringInput.split(' ');

  // Ověříme, jestli je index v platném rozsahu
  if (wordIndex < 1 || wordIndex > words.length) {
    return ''; // Pokud není validní index, vrátíme prázdný string
  }

  // Vrátíme slovo na požadované pozici v malých písmenech
  return words[wordIndex - 1].toLowerCase();
}

// 2) Funkce pro převod skóre na známku
function transformScoreToGrade(testScore) {
  if (typeof testScore !== 'number' || testScore < 0 || testScore > 100) {
    return "INVALID SCORE"; // Pokud je skóre mimo rozsah nebo nevalidní, vracíme "INVALID SCORE"
  }
  
  if (testScore >= 0 && testScore <= 64) return 'F';
  if (testScore >= 65 && testScore <= 78) return 'E';
  if (testScore >= 79 && testScore <= 86) return 'D';
  if (testScore >= 87 && testScore <= 92) return 'C';
  if (testScore >= 93 && testScore <= 98) return 'B';
  if (testScore >= 99 && testScore <= 100) return 'A';
}

// 3) Funkce pro výpočet faktoriálu pomocí cyklu
function factorial(factorialNumber) {
  if (typeof factorialNumber !== 'number' || factorialNumber < 0) {
    return undefined; // Pokud je vstup nevalidní, vracíme undefined
  }

  let result = 1;
  for (let i = 1; i <= factorialNumber; i++) {
    result *= i; // Vynásobíme číslo s aktuálním součtem
  }

  return result;
}

// oblast volání funkcí

// 1)
const result1 = lowercaseWord("My Cat Is Yellow?", 3);
console.log(result1); // "is"

// 2)
const result2 = transformScoreToGrade(75);
console.log(result2); // "E"

// 3)
const result3 = factorial(5);
console.log(result3); // 120


// do kódu níže nezasahujte

module.exports = {
  variant: "2A",
  lowercaseWord,
  transformScoreToGrade,
  factorial,
};
