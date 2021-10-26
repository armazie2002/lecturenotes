    // Javascript
    /*
        Javascript was founded in 1996 by Brandon Eich
        - client side language (runs in the browser)
        - interpreted (not complied)
        - object oriented
        - ECMAScript which is an organization that sets language standards
        */

        // Comments
        /*
            Lines or blocks of code that are not being interpreted by the parser.
          - Denoted by // for single line
          - Or like the existing comment that allows many lines of code.
          - Comments get read but are not executed
          - Beneficial in documenting maintainable codebase
          */

          // Variables

          /*
            Containers that store data in memory.
            - declaration 
            - allowing the memory space to be reserved
            - declarations start with let or ver
            - declarations cannot start with a number, or most characters other than $ or _.
            default value is undefined
            -loosely tpyed language (no need to declare data type)
            - initialization
            */

           let firstname;
           console.log(firstname)

           var lastname;
           console.log(lastName)

           //const age;
           //Missing Initializer Error. Const must always be declared AND initialized.
           // console.log(age)

           // Coding Practices for Variables
           /*
            - Be concise (ex: firstName instead of usersFirst)
            -Be specific (ex: get value instead of i)
            - Utilize camelCase, snake_case, PascalCase, or skewer-case.
            - You can also utilize nocase or SCREAMING_CASE
            */

            // Variable Initialization
            /*
            The data value that is given to a varibale declaration.
            - Can be anything (string, integer, array, fuction, class, etc.)
            - Can be reassigned (apart from const)
            */

// declaration identifier = initializer (value)
            let address ="430 N Park";
            /*
            (a) variable declaration
            (b) variable identifier
            (c) value or initializer
            */
            console.log(address)

            // redeclare variables with different initalizers

           address = "157 W Ohio St";
           console.log(address)
            
console.log(firstName, lastname)
firstName = "Summer" 
lastName = "Kerekes"

console.log(firstName, lastName)

const ssn = 123456789

console.log(ssn)

ssn = 559990000 
console.log(ssn)

// ssn = 559990000
// console.log(ssn)
// ! ERROR! TypeError: assignment to constant variable
// ! Const variables cannot be reassigned!

let text = "Hey /"text/" "
//Data Types
/*
    JavaScript has several data types that can be used. They are:
    - Boolean
    - Null
    - Undefined
    - String
    - Number
    - Array 
    - Object
    */

    // String
    /*
        Data type used to represent text in single or double quotes.
        Primitive Data Type
        */

        let nyString = 'This is a template literal string';

        console.log(typeof myString) // typeof returns data type

        // Numbers

        let degrees = 90;
        console.log(degrees)

        let precise = 999999999999;
        // 15 digits doesn't round up
        console.log(precise)

        let rounded = 999999999999;
        // 16 digits rounds up
        console.log(rounded);

        let decinalAddition = 0.2 + 0.1;
        console.log(decimalAddition)

        //Redeclaration
        let strTonum = "123";
        console.log(typeof Number(strToNum))
        console.log(typeof strToNum)
        
        // Null vs Undefined

        /*
            -Null is like container with nothing in it
            -Undefined means variable has never been set or created 
            */

            //Data Type Literals 
            // When developer inserts a value into a data type 

            let strLiteral = "This is a string literal"

            //Arrays
            //Container holding a list of items

            let students = ["Dean", "Cole", "kiersten"];

            console.log(type of stundents) // returns object

            // Object
            // Stores many values

            let student = {
                name: "Cole",
                age: 20,
                graduated: false,
            }

            console.log(typeof student)

            // Operators
            
            // Assignment Operator
            // Assigns a value to the declaration (not "equal", but "is")

            let r = 5;

            // Comparison operators
            /*
                 Compare values on either side of the operator 
                        -returns either a true or false
                    */

                        console.log(3 = 5) // returns true

                        // Not equal to
                        console.log(3 != 5) // return true because 3 is not equal to 5

                        // Type Coercion
                        /*
                            Process of converting one data type into another
                            Done automatically by the JS parser.
                            */

                            console.log(3 = "3") //returns true because JS change str data type to init data type before type before comparison opersation.

                            //Strict Equal or Not Equal operators
                            //Tests for not only value but its data type.

                            console.log (3 == 3) // returns true because value & data  type is same

                            console.log(3 == "3") //returns false because data types are different (int and str)

                            console.log(3 !== "3") //returns true because data types of both values differ

                            // Greater; Less; Greater & Equal; Less & Equal

                            console.log(5 > 3) // returns true

                            console.log(5 >= 5) // returns true

                            console.log(1 < 0) // returns false

                            console.log(0 < "1") // returns true because type coercion exists in these operators as well

                            // Logical Operators NOT AND OR

                            /*
                                AND Operator (&&)
                                OR Operator (||)
                                NOT Operator (!)
                                */

                                let x = 5;
                                let y = 7;
                                console.log(5 < 10 && 7 < 10) // true bth sides are true 
                                   console.log(5 < 1 && 7 < 10) // false; left side is false, right is ture so overall false & true is false

                                   console.log(5 < 10 || 7 < 10) // true; because both sides are true ( only one needs to be true for OR)

                                   console.log(5 < 1 || 7 < 10)
                                   // false || true  // returns true because one of the sides remains true

                                   consoles.log(5 < 1 || 7 > 10) // returns false (none is true)
                                            //false || false 

                                            console.log(!(7 == 10)) // returns true because it flips the falsey value into truthy

                                            // Add, Subtract, Multiply, Divide

                                            console.log(5 + 5);
                                            console.log(5 - 5);
                                            console.log(5 * 5);
                                            console.log(2 / 5);

                                            let addNums = 5;

                                            addNums * 2
                                            console.log(addNums)

                                            addNums = addNums * 2
                                            console.log(addNums)

                                            // Modulus operator
                                            // Checks for the remainder of long division

                                            console.log(12 % 5)

                                            // String Concatentation

                                            let fname = "Kiersten";
                                            let lName = "Gamby"

                                            console.log(fName, lName)

                                            let name = "Ms." + fName + " " + lName
                                            console.log(name)

                                            //Template literal

                                            let templateLiteralName = 'Ms. ${fName} ${lName}'is ${20 + 1} years onload.'
                                            console.log(templateLiteralName) 

                                            // Multi Line Strings

                                            let multiLine = "once upon a time there was a guy who taught JS /n to students and lied anout his age./n He has a bulldog named Bentley."

                                            console.log(multiline)

  // Challenge

  /*
    Set 7 to 8 variables:
    fName; lName; houseNumber; aptNumber (if applicable); street; city; state; post code; and concatenate them together to create your address stamp.
*/

let fName = "Emily" 
let lName = "Feagin" 
console.log(name) 

//Template literal
let templateLiteralName = 'Ms. ${fName} ${lName}'is ${20 + !} years onload.'
console.log(templateLiteralName)

let houseNumber = 219-949-3795 
console.log(houseNumber)

let street 3531 West 20th Avenue
let city Gary
let state Indiana 
let post code  46404 
let address = fName + " " +laName + "/n" = hnumber + " " + city + ", " + state + " " + postCode

console.log(myaddress)

let myaddress = '${fiName} ${laName} /n ${hnumber} " " + city + ", " + state + " " + postCode

console.log(myaddress)