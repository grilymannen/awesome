/**
 * Capitalizes a word
 * @param {string} s 
 * @returns {string}
 */
export function capitalize(s) {
  if (!s) return '';
  const [first, ...rest] = [...s]; // Rest for unicode safe
  return first.toUpperCase() + rest.join('');
}

/**
 * Capitalizes every word
 * @param {string} s 
 * @returns {string}
 */
export function deepCapitalize(s) {
  return s
    .split(' ')
    .map(word => capitalize(word)
    .join(' '));
}
/**
 * Formats server names, abbreviating letters and numbers
 * @param {string} name - The name to format
 * @returns {string}
 */
export function formatServerName(name) {
  if (!name) return "";
  
  return name
    .trim()
    .split(/\s+/)
    .map(word => {
      // If the word starts with a letter or number, shorten it to first char
      if (/^[a-zA-Z0-9]/.test(word)) {
        return word[0];
      }
      // Otherwise keep it as-is (special characters)
      return word;
    })
    .join("");
}
/**
 * Gets a random index from an array
 * @param {Array} array - The array of which to get the random index from
 * @returns {*} The returned index
 */
export function pickRandomIndex(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}