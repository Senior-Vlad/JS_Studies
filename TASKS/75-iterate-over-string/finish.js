/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

const str = "Today is the best day of my life";

// for (let i = 0; i < str.length; i++) {
//   if (vowels.some((letter) => letter === str[i])) vowelsCount++;
// }

for (let letter of str) {
  if (vowels.includes(letter)) vowelsCount++;
}
// Напишите код здесь

console.log(vowelsCount);
// 9
// // OPTION 1
// str.split('').forEach((char) => {
//   if (vowels.includes(char)) {
//     vowelsCount += 1
//   }
// })
