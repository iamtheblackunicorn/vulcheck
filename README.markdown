# VULCHECK :lock: :ribbon:

***A package that implements my own algorithm to check the security of a password. :lock: :ribbon:***

## ABOUT :books:

Roughly a year ago, I implemented my own algorithm to check the strength of a password in Dart. ***Vulcheck*** is my port of this package to Node.js. ***Vulcheck*** is a combination of the words ***Vul***nerability ***Check***er. You can find the original algorithm [here](https://github.com/iamtheblackunicorn/securitycheck). Enjoy! :heart_on_fire:

## USAGE :hammer:

## The Algorithm

The algorithm measures the distance between neighbouring characters. If the two characters being compared are of a different type, then the score is increased. If not, it is diminished. If two characters are compared and the distance is large, then the score is increased. At the end everything is totalled up.

### Use ***Vulcheck*** in a Node.js project

To use ***Vulcheck*** in a Node.js project, run this command in your project's root directory:

```bash
$ npm install --save-dev vulcheck
```

### APIs

***Vulcheck*** offers the following functions:

- `getCharPositon(character)`: Returns the position of an alphabet in the alphabet.
- `getCharSpace(characterOne, characterTwo)`: Returns the distance between two alphabetic characters.
- `getNumberSpace(numberOne, numberTwo)`: Returns the distance between two numbers.
- `stringType(character)`: Returns the type of string.
    - `int`: Character is an integer.
    - `normChar`: Character is an alphabetic character.
    - `specialChar`: Character is a special symbol.
- `isInt(expr)`: Returns a boolean telling you whether `expr` is an integer or not.
- `passwordStrength(password)`: Returns a score that says how secure your password is.
- `isSecure(password)`: Returns a boolean telling you if your password is secure or not. If the score is larger than eight, then it will return `true`.
- `testAll()`: Tests all of the above.

### Example

Here's a small example:

```Javascript
const vulcheck = require('vulcheck');

function main(){
  var pwd = '1969HoglinSteak';
  vulcheck.isSecure(pwd);
}
```

This should return `true`. :wink:

## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.

## NOTE :scroll:

- *Vulcheck :lock: :ribbon:* by Alexander Abraham :black_heart: a.k.a. *"The Black Unicorn" :unicorn:*
- Licensed under the MIT license.
