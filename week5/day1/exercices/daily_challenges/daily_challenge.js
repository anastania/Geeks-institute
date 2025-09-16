// 1st daily challenge
function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every(word => typeof word === "string")) {
      resolve(arr.map(word => word.toUpperCase()))
    } else {
      reject("Not all elements are strings")
    }
  })
}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length > 4) {
      resolve(arr.sort())
    } else {
      reject("Array length is not bigger than 4")
    }
  })
}

makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error))

// 2nd daily challenge
const morse = `{
  "0": "-----","1": ".----","2": "..---","3": "...--","4": "....-","5": ".....",
  "6": "-....","7": "--...","8": "---..","9": "----.","a": ".-","b": "-...","c": "-.-.",
  "d": "-..","e": ".","f": "..-.","g": "--.","h": "....","i": "..","j": ".---","k": "-.-",
  "l": ".-..","m": "--","n": "-.","o": "---","p": ".--.","q": "--.-","r": ".-.","s": "...",
  "t": "-","u": "..-","v": "...-","w": ".--","x": "-..-","y": "-.--","z": "--..",
  ".": ".-.-.-",",": "--..--","?": "..--..","!": "-.-.--","-": "-....-","/": "-..-.",
  "@": ".--.-.","(": "-.--.",")": "-.--.-"
}`

function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse)
    if (Object.keys(morseJS).length === 0) {
      reject("Morse object is empty")
    } else {
      resolve(morseJS)
    }
  })
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = prompt("Enter a word or sentence").toLowerCase()
    const translation = []
    for (let char of input) {
      if (morseJS[char]) {
        translation.push(morseJS[char])
      } else {
        reject(`Character "${char}" not in Morse object`)
        return
      }
    }
    resolve(translation)
  })
}

function joinWords(morseTranslation) {
  document.body.innerHTML = morseTranslation.join("<br>")
}

toJs()
  .then(result => toMorse(result))
  .then(res => joinWords(res))
  .catch(err => console.log(err))
