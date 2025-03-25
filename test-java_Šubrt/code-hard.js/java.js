function processArrayItems(arrayInput, minLength, maxLength, symbolToFill = 'X') {
    // Pokud je arrayInput prázdné nebo není definováno, vracíme prázdné pole
    if (!arrayInput || !Array.isArray(arrayInput) || arrayInput.length === 0) {
      return [];
    }
  
    // Filtrujeme pole a pro každou položku upravujeme její délku
    return arrayInput.filter(item => item.length >= minLength && item.length <= maxLength)
                     .map(item => {
                       // Pokud je délka itemu menší než maxLength, doplníme ho
                       if (item.length < maxLength) {
                         return item + symbolToFill.repeat(maxLength - item.length);
                       }
                       return item; // Pokud je délka rovna maxLength, neprovádíme žádnou změnu
                     });
  }
  
  // oblast volání funkcí
  const fruits = ["apple", "banana", "kiwi", "orange", "strawberry"];
  
  // 1)
  const result1 = processArrayItems(fruits, 5, 6);
  console.log(result1); // ["appleX", "banana", "orange"]
  