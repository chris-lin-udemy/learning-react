import fs from 'fs';
import { describe, expect, test } from '@jest/globals';
import { buildIndex } from './buildIndex.js';
import { query } from './query.js';

const raw = fs.readFileSync('./profiles.json');
const profiles = JSON.parse(raw).map(({ firstName, lastName, email, state, yearOfBirth}) => ({
  firstName,
  lastName,
  email,
  state,
  age: new Date().getFullYear() - yearOfBirth,
}));
const states = profiles.reduce((acc, p) => { acc.add(p.state); return acc;}, new Set());
const index = buildIndex(raw);

describe('Test buildIndex()', () => {
  test('state as the primary key', () => {
    expect(Object.keys(index)).toIncludeSameMembers(Array.from(states));
  });

  test('age as the secondary key', () => {
    profiles.forEach(p => {
      const target = index[p.state][p.age].filter(e => e.email === p.email)[0];
      expect(target.firstName).toBe(p.firstName);
      expect(target.lastName).toBe(p.lastName);
    });
  });
});

test('Test query()', () => {
  const expected = (state, from, to) => {
    return profiles
      .filter(p => p.state === state && p.age >= from && p.age <= to)
      .map(({ firstName, lastName, email }) => ({ firstName, lastName, email }));
  }
  states.forEach(state => {
    expect(query(index, { state, ageRange: [0, 17]})).toIncludeSameMembers(expected(state, 0, 17));
    expect(query(index, { state, ageRange: [18, 64]})).toIncludeSameMembers(expected(state, 18, 64));
    expect(query(index, { state, ageRange: [65, 200]})).toIncludeSameMembers(expected(state, 65, 200));
  });
});
