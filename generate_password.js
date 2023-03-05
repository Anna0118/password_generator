// generate_password.js

// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// define generatePassword function
function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  // define dummy data
  //   const options = {
  //     length: 5,
  //     lowercase: "on",
  //     uppercase: "on",
  //     numbers: "on",
  //     excludeCharacters: "40",
  //   };

  // create a collection to store things user picked up
  collection = [];
  if (options.lowercase === "on") {
    collection = collection.concat(lowerCaseLetters.split(""));
  }

  if (options.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }

  if (options.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }

  if (options.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  // remove things user do not need

  if (options.excludeCharacters) {
    // console.log(`exclude characters: ${options.excludeCharacters}`);
    collection = collection.filter(
      // (character) => {
      // if the character includes in 'excludeCharacters',
      // return false to remove the character in the collection

      //   if (options.excludeCharacters.includes(character)) {
      //     return false;
      //     // otherwise, return true  to keep the character in the collection
      //   } else {
      //     return true;
      //   }
      //   return !options.excludeCharacters.includes(character);
      // }
      (character) => !options.excludeCharacters.includes(character)
    );
  }

  //   return error notice if collection is empty
  if (collection.length === 0) {
    return "There is no valid character in your selection.";
  }

  // start generating password
  let password = "";
  for (i = 0; i < Number(options.length); i++) {
    password += sample(collection);
  }
  //   console.log(password);

  // return the generated password
  return password;
  //   console.log("This function will generate password");
}
// invoke generatePassword function
// generatePassword();

// export generatePassword function for other files to use
module.exports = generatePassword;
