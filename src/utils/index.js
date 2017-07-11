export function parseQuery(queryString = '') {
  return /^\??(.*)$/.exec(queryString)[1]
    .split('&')
    .reduce((obj, param) => {
      const [key, value] = param.split('=');
      return { ...obj, [key]: value }
    }, {});
};

export function generateContacts(count) {
  const firstNames = ["Xiomara", "Andres", "Daniell", "Wilbert", "Margarito", "Gil", "Shelton", "Youlanda", "Adolfo", "Mayme", "Trina", "Hui", "Mitsue", "Marcene", "Melony", "Bethanie", "Rob", "Genie", "Darius", "Gilberte"]
  const lastNames = ["Kennemer", "Hom", "Loring", "Teed", "Beier", "Duffy", "Gensler", "Rast", "Swider", "Derringer", "Shaeffer", "Burger", "Elsen", "Sheldon", "Knaub", "Mayoral", "Mash", "Rayburn", "Webre", "Seim"];
  const emailDomains = ["@yahoo.com", "@hotmail.com", "@gmail.com", "@msn.com", "@aol.com", "@comcast.net", "@verizon.net"];
  const separators = ["_", ".", ""];
  return (new Array(count)).fill('').reduce((obj, v, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const email = [firstName, lastName, Math.round(Math.random() * 10000)]
      .join(separators[Math.floor(Math.random() * separators.length)])
      + emailDomains[Math.floor(Math.random() * emailDomains.length)];
    return {
      ...obj,
      [i + 1]: {
        firstName,
        lastName,
        email: Math.round(Math.random() * 10000) % 2 ? email : email.toLowerCase(),
      },
    };
  }, {});
};