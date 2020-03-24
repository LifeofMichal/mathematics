import { Functions } from "./functions"

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

{ // #1 REVERSE STRING TESTS
    const value: string = "Aniversary"
    const revValue: string = "yrasrevinA"
    test(`Reverse of "${value}" should be "${revValue}"`, () => {
        expect(ReverseString(value)).toBe(revValue)
    })

    const input: string = "n"
    test(`Throw error if length of "${input}" is lower than 2`, () => {
        expect(() => ReverseString(input)).toThrow(`Value "${input}" must be larger than 0`)
    })

    const space: string = " "
    test(`Throw error when only empty space are passed`, () => {
        expect(() => ReverseString(space)).toThrow(`Value "${space}" contains only white spaces`)
    })

    const spaces: string = "     "
    test(`Throw error when only empty spaces are passed`, () => {
        expect(() => ReverseString(spaces)).toThrow(`Value "${spaces}" contains only white spaces`)
    })
}

{ // #2 CALCULATE FIBONACCI NUMBER TESTS
    const n: number = 5
    const nthFN: number = 3
    test(`The ${n}${AddOrdinalToNumber(n)} fibonacci number should be ${nthFN}`, () => {
        expect(CalculateNthFibonacciNumber(n)).toBe(nthFN)
    })

    const i: number = -5
    test(`Throw error when passed input (${i}) is lower than 1`, () => {
        expect(() => CalculateNthFibonacciNumber(i)).toThrow(`Input must 1 or higher`)
    })
}

{ // #3 PAD NUMBER WITH ZEROES TESTS
    const num: number = 3
    const paddedNum: string = "30000"
    test(`The padded number ${num} should become a string "${paddedNum}"`, () => {
        expect(PadNumberWithZeroes(num)).toBe(paddedNum)
    })

    const num2: number = 0.3
    const paddedNum2: string = "00300"
    test(`Komma from ${num2} should be changed to 0 when padding and become a string "${paddedNum2}"`, () => {
        expect(PadNumberWithZeroes(num2)).toBe(paddedNum2)
    })
}

{ // #4 IS LEAP YEAR TESTS
    const leapYear: number = 2016
    const isLeapYear: boolean = true
    test(`Function should return ${isLeapYear} if year is ${leapYear}`, () => {
        expect(IsLeapYear(leapYear)).toBe(isLeapYear)
    })

    const notLeapYear: number = 1999
    const isNotLeapYear: boolean = false
    test(`Function should return ${isNotLeapYear} if year is ${notLeapYear}`, () => {
        expect(IsLeapYear(notLeapYear)).toBe(isNotLeapYear)
    })
}

{ // #5 FIND NTH LARGEST NUMBER TESTS
    const listOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7]
    const n: number = 3
    const nthLargestNumber: number = 5
    test(`The ${n}${AddOrdinalToNumber(n)} largest number should be ${nthLargestNumber}`, () => {
        expect(FindNthLargestNumber(listOfNumbers, n)).toBe(nthLargestNumber)
    })

    const notNthLatgestNumber: number = 7
    test(`The ${n}${AddOrdinalToNumber(n)} largest number should NOT be ${notNthLatgestNumber}`, () => {
        expect(FindNthLargestNumber(listOfNumbers, n)).not.toBe(notNthLatgestNumber)
    })
}

{ // #6 SELECT PRIME NUMBERS TESTS
    const listOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const listofPrimeNumbers: number[] = [2, 3, 5, 7, 11]
    test(`The function should return ONLY prime numbers`, () => {
        expect(SelectPrimeNumbers(listOfNumbers)).toEqual(listofPrimeNumbers)
    })
}

{ // #7 IS PALINDROME TESTS
    const value1: number = 17
    const isPalindrome: boolean = true
    test(`Return ${isPalindrome}, where bit value of ${value1} is a palindrome`, () => {
        expect(IsPalindrome(value1)).toBe(isPalindrome)
    })

    const value2: number = 42
    const isNotPalindrome: boolean = false
    test(`Return ${isNotPalindrome}, where bit value of ${value2} is NOT a palindrome`, () => {
        expect(IsPalindrome(value2)).toBe(isNotPalindrome)
    })
}

{ // #8 COUNT SET BITS TESTS
    const value: number = 1337
    const valueBitCount: number = 11
    test(`Bit count for ${value} should be ${valueBitCount}`, () => {
        expect(CountSetBits(value)).toBe(valueBitCount)
    })
}

{ // UTILITIES by Michal TESTS
    const testingOrdinals: any = [
        {
            num: 1,
            ordinal: "st"
        },
        {
            num: 1337,
            ordinal: "th"
        },
        {
            num: 92,
            ordinal: "nd"
        },
        {
            num: 22223,
            ordinal: "rd"
        },
        {
            num: 0,
            ordinal: ""
        },
        {
            num: 49,
            ordinal: "th"
        }
    ]
    testingOrdinals.forEach((element: { num: number; ordinal: string }) => {
        test(`Ordinal for ${element.num} should be ${element.ordinal}`, () => {
            expect(AddOrdinalToNumber(element.num)).toBe(element.ordinal)
        })
    })

    const testingBitPatterns: any = [
        {
            num: 1,
            bitPattern: "1"
        },
        {
            num: 1337,
            bitPattern: "10100111001"
        },
        {
            num: 92,
            bitPattern: "1011100"
        },
        {
            num: 22223,
            bitPattern: "101011011001111"
        },
        {
            num: 0,
            bitPattern: "0"
        },
        {
            num: 49,
            bitPattern: "110001"
        }
    ]
    testingBitPatterns.forEach((element: { num: number; bitPattern: string }) => {
        test(`Bit pattern for ${element.num} should be ${element.bitPattern}`, () => {
            expect(PrintBitPattern(element.num)).toEqual(element.bitPattern)
        })
    })

    const testingIsPrime: any = [
        {
            num: 1,
            isPrime: false
        },
        {
            num: 29,
            isPrime: true
        },
        {
            num: 1337,
            isPrime: false
        },
        {
            num: 7,
            isPrime: true
        },
        {
            num: 1337,
            isPrime: false
        },
        {
            num: 92,
            isPrime: false
        },
        {
            num: 22223,
            isPrime: false
        },
        {
            num: 17,
            isPrime: true
        },
        {
            num: 0,
            isPrime: false
        },
        {
            num: 49,
            isPrime: false
        },
        {
            num: 4323,
            isPrime: false
        },
    ]
    testingIsPrime.forEach((element: { num: number; isPrime: boolean }) => {
        test(`Prime number ${element.isPrime ? "===" : "!=="} ${element.num}`, () => {
            expect(IsPrime(element.num)).toBe(element.isPrime)
        })
    })
}