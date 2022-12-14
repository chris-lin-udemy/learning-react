/**
 * Takes in a JSON string of user profiles in the format:
 *   { 
 *     id: string,
 *     firstName: string,
 *     lastName: string,
 *     email: string,
 *     gender: string,
 *     state: string,
 *     yearOfBirth: number
 *   }[]
 * Check out profiles.json to see what they look like.
 * 
 * `buildIndex()` returns a nested object with `state`
 * as the primary key, `age` as the secondary key, and an array of user
 * profiles as the value. Each has exact 3 properties: `firstName`,
 * `lastName`, and `email`:
 * 
 *   {
 *     "NJ": {
 *       "21": [
 *         {
 *           "firstName": "Alexandra",
 *           "lastName": "Eicke",
 *           "email": "aeicke0@privacy.gov.au"
 *         },
 *         { ... }
 *       ]
 *     },
 *     ...
 *   }
 */

export const buildIndex = profilesJsonStr => {
  /////////////////////////
  // put your logic here //
  /////////////////////////
  return {};
};
