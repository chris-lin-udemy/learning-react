export const buildIndex = profilesJsonStr => {
  const thisYear = new Date().getFullYear();
  const yobToAge = yob => thisYear - parseInt(yob);

  const index = JSON.parse(profilesJsonStr)
    .reduce((acc, p) => {
      const age = yobToAge(p.yearOfBirth);
      if (!acc[p.state]) acc[p.state] = {};
      if (!acc[p.state][age]) acc[p.state][age] = [];
    
      acc[p.state][age].push((({firstName, lastName, email}) =>
        ({ firstName, lastName, email }))(p));

      return acc;
    }, {});

  return index;
};

export const query = (index, req) => {
  return Object.entries(index[req.state])
    .filter(([age, profiles]) => age >= req.ageRange[0] && age <= req.ageRange[1])
    .flatMap(([age, profiles]) => profiles);
}
