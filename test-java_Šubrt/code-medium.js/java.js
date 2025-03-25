// 1) Funkce pro vrácení slova na dané pozici v malých písmenech
function lowercaseWord(stringInput, wordIndex = 1) {
    // Rozdělíme string na pole slov a odstraníme interpunkci
    const words = stringInput.replace(/[^\w\s]/g, '').split(' ');

    // Ověříme, jestli je index v platném rozsahu
    if (wordIndex < 1 || wordIndex > words.length) {
        return ''; // Pokud není validní index, vrátíme prázdný string
    }

    // Vrátíme slovo na požadované pozici v malých písmenech
    return words[wordIndex - 1].toLowerCase();
}

// 2) Funkce pro převod skóre na známku
function transformScoreToGrade(testScore) {
    // Ověříme, jestli je skóre platné číslo v rozsahu 0 až 100
    if (typeof testScore !== 'number' || testScore < 0 || testScore > 100) {
        return "INVALID SCORE"; // Pokud není validní skóre, vrátíme INVALID SCORE
    }
    
    // Určení známky podle rozsahu skóre
    if (testScore <= 64) return 'F';
    if (testScore <= 78) return 'E';
    if (testScore <= 86) return 'D';
    if (testScore <= 92) return 'C';
    if (testScore <= 98) return 'B';
    return 'A'; // Pro skóre nad 98 vracíme A
}

// 3) Funkce pro výpočet faktoriálu pomocí cyklu
function factorial(factorialNumber) {
    // Ověříme, jestli je vstup platné číslo a není záporné
    if (typeof factorialNumber !== 'number' || factorialNumber < 0) {
        return undefined; // Pokud není platné číslo, vrátíme undefined
    }

    // Zvláštní případ pro 0!, který je definován jako 1
    if (factorialNumber === 0) return 1;

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


  
  module.exports = {
    variant: "2A",
    lowercaseWord,
    transformScoreToGrade,
    factorial,
  };