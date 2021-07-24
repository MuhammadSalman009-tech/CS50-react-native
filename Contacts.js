const NUM_CONTACTS = 1;
const firstNames = ["Muhammad", "Chaudhary", "Rana", "Raja"];
const lastNames = [
  "Ramzan",
  "Salman",
  "Usman",
  "Ahmad",
  "Faisal",
  "Haseeb",
  "Waqar",
];
//generate a random number between min and max
const rand = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
//generete a name
const generateName = () =>
  `${firstNames[rand(firstNames.length - 1)]} ${
    lastNames[rand(lastNames.length - 1)]
  }`;
//generate a phone number
const generatePhoneNumber = () =>
  `${rand(999, 100)}-${rand(999, 100)}-${rand(9999, 1000)}`;
//create a contact
const createContact = () => ({
  name: generateName(),
  phone: generatePhoneNumber(),
});
//comnpare names for alphabetlizing
export const compareNames = (contact1, contact2) =>
  contact1.name > contact2.name;
//add keys to contacts
const addKeys = (val, key) => ({ key: key, ...val });
//create an array of length NUM_CONTACTS
export default Array.from({ length: NUM_CONTACTS }, createContact).map(addKeys);
