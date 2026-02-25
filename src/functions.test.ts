import { expect, it, describe } from "vitest";

import {
  reverseString,
  calculateNthFibonacciNumber,
  padNumberWithZeroes,
  isLeapYear,
  findNthLargestNumber,
  selectPrimeNumbers,
  isPalindrome,
  countSetBits,
  addOrdinalToNumber,
  printBitPattern,
  isPrime,
} from "./functions.js";

describe("Functions tests", () => {
  // #1 REVERSE STRING TESTS
  const value: string = "Aniversary";
  const revValue: string = "yrasrevinA";
  it(`Reverse of "${value}" should be "${revValue}"`, () => {
    expect(reverseString(value)).toBe(revValue);
  });

  const input: string = "n";
  it(`Throw error if length of "${input}" is lower than 2`, () => {
    expect(() => reverseString(input)).toThrowError(
      `Value "${input}" must be larger than 0`,
    );
  });

  const space: string = " ";
  it(`Throw error when only empty space are passed`, () => {
    expect(() => reverseString(space)).toThrowError(
      `Value "${space}" contains only white spaces`,
    );
  });

  const spaces: string = "     ";
  it(`Throw error when only empty spaces are passed`, () => {
    expect(() => reverseString(spaces)).toThrowError(
      `Value "${spaces}" contains only white spaces`,
    );
  });
});

{
  // #2 CALCULATE FIBONACCI NUMBER TESTS
  const n: number = 5;
  const nthFN: number = 3;
  it(`The ${n}${addOrdinalToNumber(n)} fibonacci number should be ${nthFN}`, () => {
    expect(calculateNthFibonacciNumber(n)).toBe(nthFN);
  });

  const i: number = -5;
  it(`Throw error when passed input (${i}) is lower than 1`, () => {
    expect(() => calculateNthFibonacciNumber(i)).toThrow(
      `Input must 1 or higher`,
    );
  });
}

{
  // #3 PAD NUMBER WITH ZEROES TESTS
  const num: number = 3;
  const paddedNum: string = "30000";
  it(`The padded number ${num} should become a string "${paddedNum}"`, () => {
    expect(padNumberWithZeroes(num)).toBe(paddedNum);
  });

  const num2: number = 0.3;
  const paddedNum2: string = "00300";
  it(`Komma from ${num2} should be changed to 0 when padding and become a string "${paddedNum2}"`, () => {
    expect(padNumberWithZeroes(num2)).toBe(paddedNum2);
  });
}

{
  // #4 IS LEAP YEAR TESTS
  const leapYear: number = 2016;
  it(`Function should return true if year is ${leapYear}`, () => {
    expect(isLeapYear(leapYear)).toBe(true);
  });

  const notLeapYear: number = 1999;
  it(`Function should return false if year is ${notLeapYear}`, () => {
    expect(isLeapYear(notLeapYear)).toBe(false);
  });
}

{
  // #5 FIND NTH LARGEST NUMBER TESTS
  const listOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  const n: number = 3;
  const nthLargestNumber: number = 5;
  it(`The ${n}${addOrdinalToNumber(n)} largest number should be ${nthLargestNumber}`, () => {
    expect(findNthLargestNumber(listOfNumbers, n)).toBe(nthLargestNumber);
  });

  const notNthLatgestNumber: number = 7;
  it(`The ${n}${addOrdinalToNumber(n)} largest number should NOT be ${notNthLatgestNumber}`, () => {
    expect(findNthLargestNumber(listOfNumbers, n)).not.toBe(
      notNthLatgestNumber,
    );
  });

  const nTooHigh: number = listOfNumbers.length + 1;
  it(`The value of n should not be lower than 1 or higher than ${listOfNumbers.length}`, () => {
    expect(() => findNthLargestNumber(listOfNumbers, nTooHigh)).toThrow(
      `Input must be between 1 or ${listOfNumbers.length}`,
    );
  });
}

{
  // #6 SELECT PRIME NUMBERS TESTS
  const listOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const listofPrimeNumbers: number[] = [2, 3, 5, 7, 11];
  it(`The function should return ONLY prime numbers`, () => {
    expect(selectPrimeNumbers(listOfNumbers)).toEqual(listofPrimeNumbers);
  });
}

{
  // #7 IS PALINDROME TESTS
  const value1: number = 17;
  it(`Return true, where bit value of ${value1} is a palindrome`, () => {
    expect(isPalindrome(value1)).toBe(true);
  });

  const value2: number = 42;
  it(`Return false, where bit value of ${value2} is NOT a palindrome`, () => {
    expect(isPalindrome(value2)).toBe(false);
  });
}

{
  // #8 COUNT SET BITS TESTS
  const value: number = 1337;
  const valueBitCount: number = 11;
  it(`Bit count for ${value} should be ${valueBitCount}`, () => {
    expect(countSetBits(value)).toBe(valueBitCount);
  });
}

{
  // UTILITIES by Michal TESTS
  const testingOrdinals: any = [
    {
      num: 1,
      ordinal: "st",
    },
    {
      num: 1337,
      ordinal: "th",
    },
    {
      num: 92,
      ordinal: "nd",
    },
    {
      num: 22223,
      ordinal: "rd",
    },
    {
      num: 0,
      ordinal: "",
    },
    {
      num: 49,
      ordinal: "th",
    },
  ];
  testingOrdinals.forEach((element: { num: number; ordinal: string }) => {
    it(`Ordinal for ${element.num} should be ${element.ordinal}`, () => {
      expect(addOrdinalToNumber(element.num)).toBe(element.ordinal);
    });
  });

  const testingBitPatterns: any = [
    {
      num: 1,
      bitPattern: "1",
    },
    {
      num: 1337,
      bitPattern: "10100111001",
    },
    {
      num: 92,
      bitPattern: "1011100",
    },
    {
      num: 22223,
      bitPattern: "101011011001111",
    },
    {
      num: 0,
      bitPattern: "0",
    },
    {
      num: 49,
      bitPattern: "110001",
    },
  ];
  testingBitPatterns.forEach((element: { num: number; bitPattern: string }) => {
    it(`Bit pattern for ${element.num} should be ${element.bitPattern}`, () => {
      expect(printBitPattern(element.num)).toEqual(element.bitPattern);
    });
  });

  const testingIsPrime: any = [
    {
      num: 1,
      isPrime: false,
    },
    {
      num: 29,
      isPrime: true,
    },
    {
      num: 1337,
      isPrime: false,
    },
    {
      num: 7,
      isPrime: true,
    },
    {
      num: 1337,
      isPrime: false,
    },
    {
      num: 92,
      isPrime: false,
    },
    {
      num: 22223,
      isPrime: false,
    },
    {
      num: 17,
      isPrime: true,
    },
    {
      num: 0,
      isPrime: false,
    },
    {
      num: 49,
      isPrime: false,
    },
    {
      num: 4323,
      isPrime: false,
    },
  ];
  testingIsPrime.forEach((element: { num: number; isPrime: boolean }) => {
    it(`Prime number ${element.isPrime ? "===" : "!=="} ${element.num}`, () => {
      expect(isPrime(element.num)).toBe(element.isPrime);
    });
  });
}
