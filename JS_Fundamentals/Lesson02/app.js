// (reserved Keyword) (Variable name) = (type of value)

// Declared Variable
let v1;

// Assign Value
let age;
age = 21;

console.log(age);

// 1. Create variable name (name) & store your name
let name = "Lokesh";

// 2. Create variable name (whatDoYouWannaBecomeInYourLife) & store "programmer"
let whatDoYouWannaBecomeInYourLife = "programmer";

// 3. Create variable name (gender) & store your gender
let gender = "male";

// 4. Create variable name (twitterHandle) & store your twitter handle
let twitterHandle = "iaml0kesh";

// 5. Finally log all variables to the console.
console.log(name, whatDoYouWannaBecomeInYourLife, gender, twitterHandle);

// Primitive types

// 1. Number
let num = 100000000000;
console.log(num);

// Basic Math
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

// To clear The console
console.clear()


// 1. Create variable name (firstFavNum) & store your First favorite number.
let firstFavNum = 2;

// 2. Create variable name (secondFavNum) & store your Second favorite number.
let secondFavNum = 1;

console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);

console.clear()


// 2. Boolean
// Falsy values
    // false
    // null
    // undefinded
    // 0
    // -0
    // NaN
    // '',"",``, (empty quotes)

let isJsPeogrammingLanguage = true;
let isJsHard = false;
let favNumb = 2;
console.log(favNumb + undefined);

console.clear()

// Comparison Operators
//  Relational Operators
    //  > Greater then
    //  < Less then
    //  >= 
    //  <= 

// Equality Operators
    // === strict equality (type + value)
    // !=== strict non-equality operators (type + value)
    //  == lose equality (value)
    //  !== lose not equality operator (value)


firstFavNum = 2;
secondFavNum = 1;
console.log(firstFavNum > secondFavNum);
console.log(firstFavNum < secondFavNum);
console.log(firstFavNum >= secondFavNum);
console.log(firstFavNum <= secondFavNum);
console.log(firstFavNum === secondFavNum);
console.log(firstFavNum == secondFavNum);
console.log(firstFavNum !== secondFavNum);
console.log(firstFavNum != secondFavNum);


// Strings
let firstName = "Matta";
let secondName = "Lokesh";

// 1. Concatenation
let fullName = firstName.concat(secondName);
console.log(fullName);


// 2. Append
firstName += " append";
console.log(firstName);

// 3. Length
console.log(firstName.length);

// 4. Cases
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// 5. Slice
console.log(firstName.slice(1,4));

// 6. Split & Join
console.log(firstName.split(" ").join("_"));

// 7. Includes
console.log(firstName.includes("z"));

// 8. Trim
console.log(firstName.trim());



let favActorFirstName = "Tom";
let favActorLastName = "Hanks";
let actorFullName = favActorFirstName + favActorLastName;
let upperCase = actorFullName.toUpperCase();
let message = `My favourite Actor is ${upperCase}`;
message += " his best movie is The Terminal";

console.log(message);


// Type Conversion
let money = "50";
console.log(money , typeof money);

// Convert String into number
money = parseInt(money);
money = +money
mondy = Number(money)
console.log(money, typeof money);

//  Convert Number to String
money = money.toString();
money = String(money)

// Convert String to Decimal
money = "50.234";
money = parentFloat(money);

console.clear();

