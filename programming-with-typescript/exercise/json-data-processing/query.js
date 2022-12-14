/**
 * query() returns an array of user profiles that meet the criteria of the given query
 * request. Each has fields exactly the same as what were indexed by buildIndex(), namely
 * 
 *   {
 *     firstName: string,
 *     lastName: string,
 *     email: string
 *   }
 * 
 * This function takes in 2 parameters: index and queryReq. The first one is the index
 * built with buildIndex() that you just finished. The second one is the query criteria
 * in the following format,
 * 
 *   {
 *     state: string,
 *     ageRange: [from, to]
 *   }
 * 
 *  , where from and to specify the target user's age range, i.e. from <= age <= to.
 */
export const query = (index, queryReq) => {
  /////////////////////////
  // put your logic here //
  /////////////////////////
  return [];
}