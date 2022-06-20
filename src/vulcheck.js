/*
Security Check by Alexander Abraham, The Black Unicorn.
Licensed under the MIT license.
*/

// This variable is the security weight
// that the algorithm checks against.
const securityWeight = 3;

// This variable is the increment weight
// that a special character warrants
// in a password.
const specialCharacterWeight = 3;

// This variable is the increment weight
// that an "arabic" character (number or letter)
//  warrants in a password.
const arabicCharacterWeight = 2;

// This method returns the position of a
// given character as an vareger.
function getCharPositon(character) {
    var result = 0;
    var labvar = character.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvw';
    var alphabetList = alphabet.split('');
    for (var i = 0; i < alphabetList.length; i++) {
      if (alphabetList[i] == labvar) {
        result = i + 1;
        break;
      } else {
        // Do nothing.
      }
    }
    return result;
}
  
// This method returns the space between two characters
// as an vareger.
function getCharSpace(characterOne, characterTwo) {
    var charOnePos = getCharPositon(characterOne);
    var charTwoPos = getCharPositon(characterTwo);
    var space = charTwoPos - charOnePos;
    return space;
}
  
// This method returns the space between two numbers
// as an vareger.
function getNumberSpace(numberOne, numberTwo) {
    var space = numberTwovar - numberOnevar;
    return space;
}
  
// This method checks what type
// a character has.
function stringType(character) {
    var result = 'normChar';
    var labvar = character.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvw';
    var alphabetList = alphabet.split('');
    if (alphabetList.contains(labvar) == true) {
      // Do nothing.
    } else {
      result = 'specialChar';
    }
    return result;
}

function isInt(expr){
    var result = false;
    var match_op = parseInt(expr);
    if (match_op == NaN) {
        // Do nothing.
    }
    else {
        result = true;
    }
    return result;
}

/// This method returns the type
/// of a character in a password.
function charType(character) {
    var result = 'int';
    if (isInt(character) == false) {
      result = stringType(character);
    } else {
      // Do nothing.
    }
    return result;
  }

// This method returns the strength
// of a password on a scale from
// one to ten as an vareger.
function passwordStrength(password) {
  var result = 0;
  var charList = password.split('');
  for (var i = 1; i < charList.length; i++) {
    var currentItem = charList[i];
    var currentItemType = charType(currentItem);
    var lastItem = charList[i - 1];
    var lastItemType = charType(lastItem);
    if (currentItemType == 'normChar' && lastItemType == 'normChar') {
      var itemSpace = getCharSpace(currentItem, lastItem);
      if (itemSpace > securityWeight) {
        result = result + arabicCharacterWeight;
      } else {
        // Do nothing.
      }
    } else if (currentItemType == 'specialChar' &&
        lastItemType == 'specialChar') {
      result = result + specialCharacterWeight;
    } else if (currentItemType == 'var' && lastItemType == 'var') {
      var itemSpace = getNumberSpace(currentItem, lastItem);
      if (itemSpace > securityWeight) {
        result = result + arabicCharacterWeight;
      } else {
        // Do nothing.
      }
    }
  }
  return result;
}

// This method returns a boolean
// value (either [true] or [fasle])
// that sums up whether a password
// is secure or not.
function isSecure(password) {
  var result = false;
  var passwordRating = passwordStrength(password);
  if (passwordRating > 8) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// A function to test everything.
function testAll(){
    console.log(getCharPositon('a'));
    console.log(getCharSpace('c', 'a'));
    console.log(getNumberSpace(5,4));
    console.log(charType('a'));
    console.log(charType('@'));
    console.log(charType('1'));
    console.log(passwordStrength('2105LeTigre_@@'));
    console.log(isSecure('2105LeTigre_@@'));
    console.log(isInt('a'));
    console.log(isInt('1'));
}