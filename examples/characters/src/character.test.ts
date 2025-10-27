import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'John';
const lastName = 'Adam';
const role = 'Game Master';

describe('Character', () => {
  it(
    'should create a character with a first name, last name, and role',
    () => {
      const character = new Character(firstName, lastName, role);

      expect(character).toEqual(
        expect.objectContaining({
          firstName,
          lastName,
          role
        })
      )
    })
},
);

it('should allow you to increase the level', () => {
  const character = new Character(firstName, lastName, role);

  character.levelUp();
  expect(character.level).toBe(2);
});

it('should update the last modified date when leveling up', () => {
  const character = new Character(firstName, lastName, role);

  const originalDate = character.lastModified;
  character.levelUp();
  expect(character.lastModified).not.toBe(originalDate);
});
