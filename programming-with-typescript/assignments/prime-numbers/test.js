import { getPrimeNumbers } from "./getPrimeNumbers";
import { expect, test } from '@jest/globals';
import { getPrimeNumbers as sol } from "./solution";

test('prime number from 1 to 1000', () => {
  expect(getPrimeNumbers(1000)).toEqual(sol(1000));
});
