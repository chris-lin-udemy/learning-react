import fs from 'fs';
import { expect, test } from '@jest/globals';
import { transform } from './transform.js';

describe('JSON data transformation', () => {
  const raw = fs.readFileSync('./profiles.json');
  const profiles = JSON.parse(raw);
  const transformed = transform(raw);

  test('location as the primary key', () => {
    const states = profiles.map(p => p.location).reduce((acc, s) => { acc.add(s); return acc;}, new Set());
    expect(Object.keys(transformed)).toIncludeSameMembers(Array.from(states));
  });

  test('age as the secondary key', () => {
    const thisYear = new Date().getFullYear();
    profiles.forEach(p => {
      const target = transformed[p.location][thisYear - p.yearOfBirth].filter(e => e.email === p.email)[0];
      expect(target.firstName).toBe(p.firstName);
      expect(target.lastName).toBe(p.lastName);
      expect(target.email).toBe(p.email);
    });
  });

});
