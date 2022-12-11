/**
 * Takes in a JSON string of user profiles in the format:
 *   { 
 *     id: string,
 *     firstName: string,
 *     lastName: string,
 *     email: string,
 *     gender: string,
 *     location: string,
 *     yearOfBirth: number
 *   }[]
 * Check out profiles.json to see what they look like.
 * 
 * `transform()` returns a JSON string of a nested object with `location`
 * as the primary key, `age` as the secondary key, and an array of user
 * profiles as the value. Each has exact 3 properties: `firstName`,
 * `lastName`, and `email`:
 * 
 *   {
 *     "NJ": {
 *       21: [
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

export const transform = profilesJsonStr => {
  const thisYear = new Date().getFullYear();
  const yobToAge = yob => thisYear - parseInt(yob);

  return JSON.parse(profilesJsonStr)
    .reduce((acc, p) => {
      const age = yobToAge(p.yearOfBirth);
      if (!acc[p.location]) acc[p.location] = {};
      if (!acc[p.location][age]) acc[p.location][age] = [];
    
      acc[p.location][age].push((({firstName, lastName, email}) =>
        ({ firstName, lastName, email }))(p));

      return acc;
    }, {});
};
