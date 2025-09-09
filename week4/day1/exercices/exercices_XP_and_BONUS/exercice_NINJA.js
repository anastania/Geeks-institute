const mergeWords = str => next => next === undefined ? str : mergeWords(str + " " + next);

console.log(mergeWords("There")("is")("no")("spoon.")());
