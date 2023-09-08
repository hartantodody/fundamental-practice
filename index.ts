// AT HOME PRACTICE
// 1. SUM ALL NUMBERS IN AN ARRAY OF INPUT =============================

const inputNumberOfArray: number[] = [1,2,3,4,5]

const sumOfNumbers = (inputNumberOfArray: number[]) => {
    let sum: number = 0
    for (let i = 0; i < inputNumberOfArray.length; i++ ){
        sum += inputNumberOfArray[i]
    }
    return sum
}

console.log('1 : ' + sumOfNumbers(inputNumberOfArray))


// 2. COMPARE TWO STRINGS ==============================================
const input1: string = 'kuda'
const input2: string = 'KuDa'

const compareString = (input1: string, input2: string) => {
    return input1.toLowerCase() === input2.toLowerCase()
}

console.log('2 : ' + compareString(input1, input2))


// 3. REVERSE A STRING =================================================
const input: string = 'hello world';

const reverseString = (input: string) => {
    return input.split('').reverse().join('') 

    // CODE BREAKDOWN (Sempet practice ini di codewars selasa lalu wkwk)
    // const stringToArray = input.split('') // Split the string into an array (ex: ['a', 'b', 'c'])
    // const reverseArray = stringToArray.reverse() // Reverse the string in the array (ex: ['c', 'b', 'a'])
    // const joinArray = reverseArray.join('') // Join em back as a string (ex: 'cba')
    // return joinArray
}

console.log('3 : ' + reverseString(input))


// 4. COMBINATION OF NUMBERS
const a: number = 1;
const b: number = 2;
const c: number = 3;



// 5. PRINT NUMBERS BETWEEN 2 NUMBERS ====================================
const initial: number = -10;
const ends: number = 8;

const numberBetween = (initial: number, ends: number) => {
    let number: number[] = []
    for (let i = initial + 1; i < ends; i++) {
        number.push(i)
    }
    return number
}

console.log(`5 : ${numberBetween(initial, ends)}`)

// 6. ==================================== 
const inputNum: number = -5;

const addNumberIteration = (input: number) => {
    let number: number = 0 
    if (input < 0){
        for (let i = 0; i >= input; i--) {
            number += i
        }
    } else {
        for (let i = 0; i <= input; i++) {
            number += i
        }
    }
    return number
}

const multiplyNumberIteration = (input: number) => {
    let number: number = 1
    if (input < 0){
        for (let i = -1; i >= input; i--) {
            number *= i
        }
    } else {
        for (let i = 1; i <= input; i++) {
            number *= i
        }
    }
    return number
}

console.log(`6 : Addition result is ${addNumberIteration(inputNum)} and Multiply result is ${multiplyNumberIteration(inputNum)}`)

// 7. ========================================================
const inputForUnique: number[] = [1,2,2,4,5]


// 8. =========================================================
const inputForDuplicate: number[] = [1,2,2,3,3,4,5]


// ADVANCED PRACTICE 
// 9. ===========================================================
const x: string = 'revou'
const y: string = 'cAt'
const z: string = 'bzzr'

const checkVowel = (input: string) => {
    const newInput = input.toLowerCase()
    const regex = /[aiueo]/gi
    if (newInput.match(regex)) {
        return true;
    } else {
        return false;
    }
}
console.log(`9 : The results are`) /*${checkVowel(x)}, ${checkVowel(y)}, ${checkVowel(z)}`)*/
console.log('   - x: ' + checkVowel(x))
console.log('   - y: ' + checkVowel(y))
console.log('   - z: ' + checkVowel(z))

// 10 ==============================================================
const array1: number[] = [1,2,4,2,5,1]
const array2: number[] = [2,5,7,3,5,8]

