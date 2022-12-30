import _ from 'lodash';

export const getPrimeNumbers = n => {
  const primes = [];
  const testAndAddPrime = n => {
    const maxDivisor = Math.floor(Math.sqrt(n));
    for (let p of primes.filter(p => p <= maxDivisor))
      if (n % p === 0) return false;
    primes.push(n);
    return true;
  };
  return [2, ... _.range(3, n + 1, 2)].filter(testAndAddPrime);
};
