const getRandomNumberInInterval = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min

const uppercaseFirstLetter = (str) => str.replace(str[0], str[0].toUpperCase())

export { getRandomNumberInInterval, uppercaseFirstLetter }
