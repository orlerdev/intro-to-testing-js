// helloWorld function 
const helloWorld = () => {
  return "Hello, World!";
};

const sayHello = (input) => {
  return typeof input !== "string" ? "Hello, World!" : `Hello, ${input}!`
};

const isFive = (input) => {
  return input === "5" || input === 5;
}

const isEven = (input) => {
  return parseFloat(input) % 2 === 0;
}

const isVowel = (input) => {
  return /^[aeiou]$/i.test(input);
}
