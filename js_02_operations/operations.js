// Mostly two types: arithmetic ( + , - , * , / , ... ) and logical ( AND , OR , XOR , > , == , ...)

// ARITHMETIC:
let addition = 2 + 3;
let substract = 7 - 2;
let multiplication = 2 * 3;
let division = 10 / 2;
let module = 8 % 3; // Returns the reminder, in this case, two.
let exponent = 2 ** 3; // (num ** how_many_times) -> 2x2x2 = 8

let increase = 10;
increase++;
console.log(increase);
let decrease = 10;
decrease--;
console.log(decrease);
/*
Asignation operators:
let x = 5;
x += 3;  -> 8
x -= 2;  -> x=6
x *= 4;  -> x=24
x /= 3;  -> x=8
x %= 5;  -> x=3
x **= 2; -> x=9
*/

//LOGICAL
console.log(addition == substract); // Use two or three equals!!! (two compares the content, three also type)
console.log(multiplication >= exponent);
console.log(addition == substract || multiplication >= division); // pipe lines for OR
console.log(addition == substract && multiplication >= division); // ampersand for AND
console.log(module != 0); // NOT operator, also look up strict comparation !==
const understood = false;
console.log(!understood); // Oposite

/*
ADVANCED, bitwise operators, not required for now:
&  (AND bitwise)
|  (OR bitwise)
^  (XOR bitwise)
~  (NOT bitwise)
<< (shift left)
>> (shift right)
*/
