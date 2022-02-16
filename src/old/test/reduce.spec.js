const array1 = ['nomi', 'cose', 'citta', 'animali']

const isEven = number => number % 2 === 0

const modifyCurrentValue = (currentValue, index) => isEven(index) ? `[${currentValue} :` : ` ${currentValue}]`

const formatArray = (prevValue, currValue, index) => prevValue + modifyCurrentValue(currValue, index)

const addEvenOrOdd = array1.reduce(formatArray, '')

console.log(addEvenOrOdd)