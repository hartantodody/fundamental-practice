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


// RANDOM PRACTICE
console.log(`                                                                        `)
console.log(`<================= This is random practice of mine! ===================>`)
// SORTING ALGORITHM ==============================================================================
// 1. MERGE SORT

const sortThisArray: number[] = [15,7,-6,2,-4,3,9,8,1,10,-5,-3]

const bubbleSort = (input: number[]) => {
    let swap: boolean
    do {
        swap = false

        for (let i = 0; i < input.length -1 ; i++){

            if (input[i] > input[i + 1]){
                [ input[i], input[i + 1] ] = [ input[i + 1], input[i] ]
                swap = true
            }
        }
    } while (swap)

    return input
}

console.log(`BUBBLE SORT`)
console.log(`- Bubble sort input : ${sortThisArray}`)
console.log(`- Bubble sort result : ${bubbleSort([...sortThisArray])}`)

// COUNTING =================================================================
// FIBONACCI SEQUENCE

const initialNum: number[] = [1,2];
const maxNum: number = 30;

const fibonacciSeq = (input: number[], max: number) => {
    let container: number[] = input
    let sum: number = 0
    let sumEven: number = 0

    for (let i = 2; i <= max; i++){
        const add = input[i - 2] + input[i - 1]
        container.push(add)
    }
    
    for (let i = 0; i < container.length; i++){
        sum += container[i]
    }

    for (let i = 0; i < container.length; i++){
        if ( container[i] % 2 === 0){
            sumEven += container[i]

            if (sumEven >= 4000000){
                break
            }
        }
    }

    return {container, sum, sumEven}
}

console.log(`FIBONACCI SEQUENCE`)
console.log(`- Fibonacci Sequence inputs : ${initialNum} and max sequence ${maxNum}`)
console.log(`- Fibonacci Sequence result : ${fibonacciSeq(initialNum,maxNum).container}`)
console.log(`- Fibonacci Sequence total sum : ${fibonacciSeq(initialNum,maxNum).sum}`)
console.log(`- Fibonacci Sequence total sum even numbers: ${fibonacciSeq(initialNum,maxNum).sumEven}`)

const sumEvenFibonacci = (max: number) => {
    let a: number = 1;
    let b: number = 2;
    let sum: number = 0;

    while (a <= max) {
        if (a % 2 === 0) {
            sum += a;
        }
        
        const temp = a + b;
        a = b;
        b = temp;
    }

    return sum;
}

const max = 4000000;
console.log(`Sum of even-valued terms in the Fibonacci sequence below ${max} is: ${sumEvenFibonacci(max)}`);

// SUM MULTIPLES OF 3 OR 5 BELOW 1000
let container: number[] = []

const sumOfMultiples = () => {
    const val: number = 3
    const val2: number = 5
    const max: number = 1000
    let sum: number = 0

    for (let i = 1; i < max; i++) {
        if (i % val === 0 || i % val2 === 0) {
            sum += i;
            container.push(i)
            
        }
    }
    return {sum, container}
}

// console.log(`SUM MULTIPLES OF 3 OR 5 BELOW 1000`)
// console.log(`- All numbers : ${sumOfMultiples().container}`)
// console.log(`- The total of those number : ${sumOfMultiples().sum}`)