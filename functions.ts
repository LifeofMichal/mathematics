export class Functions {

    /**
     * Reverses a string.
     *
     * @param value String to reverse.
     * @returns Reversed string.
     */
    public ReverseString(value: string): string {
        const regexWhiteSpaces: RegExp = /^\s*$/g
        let revValue: string = ""

        if (regexWhiteSpaces.test(value)) throw new Error(`Value "${value}" contains only white spaces`)
        if (value.length <= 1) throw new Error(`Value "${value}" must be larger than 0`)
        if (value) { // 0.98 - 1.01s - gets slower faster depending on string length
            for (let i = value.length; i > 0; i--) {
                revValue += value[i - 1]
            }
        }
        // if (value) revValue = value.split("").reverse().join("") // 0.99 - 1.03s

        return revValue
    }

    /**
     * Calculates the Nth fibonacci number.
     *
     * @param n Fibonacci number to calculate.
     * @returns The nth fibonacci number.
     *
     * The functions works based on:
        F0 = 1st
        F1 = 2nd
        F2 = 3rd
        etc...
     */
    public CalculateNthFibonacciNumber(n: number): number {
        let a: number = 0, b: number = 1, nthFN: number = 0, i: number = 3

        if (n < 1) throw new Error(`Input must 1 or higher`)
        if (n == 2) nthFN = 1

        while (i <= n) {
            nthFN = a + b
            a = b
            b = nthFN
            i++
        }

        return nthFN
    }


    /**
     * Pads a number with up to four zeroes.
     * Can only pad unsigned numbers up to 99999.
     *
     * @param n Number to pad.
     * @returns Zero-padded number.
     * 
     * The function works based on assumption that
       every return has to have 5 digits
     */
    public PadNumberWithZeroes(n: number): string {
        if (n < 0 || 99999 < n) throw new Error("Number must be between 0 to 99999")
        const regexNonNumbers: RegExp = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]+$/g
        const lengthLimit: number = 5
        const padder: string = "0"
        let i: number
        let val: string[] = n.toString().split("")

        i = 0
        while (i < lengthLimit) {
            if (!val[i] || regexNonNumbers.test(val[i])) val[i] = padder
            i++
        }
        return val.join("")

        // i = val.length
        // while (i < lengthLimit) {
        //     val = val + padder
        //     i++
        // }
        // return val 
    }

    /**
     * Determines if a year is a leap year.
     *
     * @param year Year to determine.
     * @returns True if leap year, false if not.
     */
    public IsLeapYear(year: number): boolean {
        return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
    }

    /**
     * Find the N:th largest number in a range of numbers.
     *
     * @param numbers List of integers.
     * @param n Largest number to return
     * @returns The N:th largest number in list.
     */
    public FindNthLargestNumber(numbers: number[], n: number): number {
        if (n < 1 || numbers.length < n) throw new Error(`Input must be between 1 or ${numbers.length}`)
        const arrCopy: number[] = [...numbers]
        return arrCopy.sort((a, b) => (a - b))[arrCopy.length - n]
    }

    /**
     * Selects the prime numbers from a enumerable with numbers.
     *
     * @param numbers Array of numbers.
     * @returns Array with only prime numbers.
     */
    public SelectPrimeNumbers(numbers: number[]): number[] {
        let arrPrimes: number[] = []

        for (let i = 0; i < numbers.length; i++) {
            if (IsPrime(numbers[i])) arrPrimes = [...arrPrimes, numbers[i]]
        }

        // arrPrimes = numbers.filter((number) => (
        //     this.isPrime(number)
        // ))

        return arrPrimes
    }

    /**
     * Determines if the bit pattern of value the same if you reverse it.
     *
     * @param value Value to inspect.
     * @returns True if the bit value is a palindrome otherwise false.
     */
    public IsPalindrome(value: number): boolean {
        const bitPattern = PrintBitPattern(value)
        let indexLeft: number = 0, indexRight: number = bitPattern.length - 1
        let range: number = Math.ceil(bitPattern.length / 2) - 1 //in while loop, indexLeft starts from 0, but range is calculated from length, which starts at 1
        let charLeft: string, charRight: string

        while (indexLeft <= range) {
            charLeft = bitPattern[indexLeft], charRight = bitPattern[indexRight]
            if (charLeft !== charRight) return false
            indexLeft++, indexRight--
        }
        return true

        // return (bitPattern === this.ReverseString(bitPattern)) ? true : false
    }

    /**
     * Counts all bits in an int value.
     *
     * @param value Integer value to count bits in.
     * @returns Number of bits in integer value.
     */
    public CountSetBits(value: number): number {
        let bitCount = PrintBitPattern(value).length
        return bitCount
    }

    /*
     * UTILITIES by Michal
     */
    public AddOrdinalToNumber(num: number): string {
        let lastDigit = num % 10

        switch (lastDigit) {
            case 0:
                return ""
            case 1:
                return "st"
            case 2:
                return "nd"
            case 3:
                return "rd"
            default:
                return "th"
        }
    }

    public PrintBitPattern(num: number) {
        return (num >>> 0).toString(2)
    }

    public IsPrime(num: number): boolean {
        if (num == 0 || num == 1) return false

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true
    }
}

const {
    ReverseString,
    CalculateNthFibonacciNumber,
    PadNumberWithZeroes,
    IsLeapYear,
    FindNthLargestNumber,
    SelectPrimeNumbers,
    IsPalindrome,
    CountSetBits,

    AddOrdinalToNumber,
    PrintBitPattern,
    IsPrime,
} = new Functions()

{ // #1 REVERSE STRING
    const value = "Michal"
    console.log(`#1 - Reverse String "${value}" is: ${ReverseString(value)}`)
}

{ // #2 CALCULATE FIBONACCI NUMBER
    const number: number = 4
    const ordinal = AddOrdinalToNumber(number)
    const nthFN = CalculateNthFibonacciNumber(number)
    console.log(`#2 - ${number}${ordinal}(F${number - 1}) Fibonacci Number is: ${nthFN}`)
}

{ // #3 PAD NUMBER WITH ZEROES
    const paddedNumber = PadNumberWithZeroes(0.3)
    console.log(`#3 - ${paddedNumber}`)
}

{ // #4 IS LEAP YEAR
    const year = 2001
    console.log(`#4 - ${year} is${IsLeapYear(year) ? "" : " not"} a leap year`)
}

{ // #5 FIND NTH LARGEST NUMBER
    const number: number = 4
    const ordinal = AddOrdinalToNumber(number)
    let arrNumbers: number[] = [17, 1337, 3, 12, 5, 67, 0, 23, 999, 4321, 6991, 16, 91]
    const nthLargestNumber = FindNthLargestNumber(arrNumbers, number)
    console.log(`#5 - ${nthLargestNumber} is the ${number}${ordinal} largest number from the list - ${arrNumbers}`)
}

{ // #6 SELECT PRIME NUMBERS
    const arrNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 997, 999, 1337, 4321, 6991, 6992, 7919]
    const arrPrimes: number[] = SelectPrimeNumbers(arrNumbers)
    console.log(`#6 - ${arrPrimes} are prime numbers of the list - ${arrNumbers}`)
}

{ // #7 IS PALINDROME
    const number = 1337
    console.log(`#7 - ${number}'s bit pattern is${IsPalindrome(number) ? "" : " not"} a palindrome`)
}

{ // #8 COUNT SET BITS
    const number = 42
    console.log(`#8 - Bit count for integer ${number} is ${CountSetBits(number)} `)
}
