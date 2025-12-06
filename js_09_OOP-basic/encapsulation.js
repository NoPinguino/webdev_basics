/*
By making our attributes private, we will need to access them by using getters()
Also, we see setters() here, to set a new value to an attribute.
*/
class BankAccount {
  // Private attributes (they are public by default)
  #balance;
  #pswd_acc;
  constructor(owner, balance, pswd_acc) {
    this.owner = owner;
    this.#balance = balance;
    this.#pswd_acc = pswd_acc;
  }
  //Examples on getters and setters:
  setPSWD_ACC(newPSWD) {
    this.#pswd_acc = newPSWD;
  }
  getBalance() {
    return this.#balance;
  }
  setBalance(balance) {
    this.#balance = balance;
  }
  printBalance() {
    console.log(`Current balance for ${this.owner}: ${this.#balance}`);
  }
  login(pswd) {
    if (this.#pswd_acc !== pswd) {
      throw new Error("INVALID PASSWORD"); // First time we see exception managment in JS
    }
    return {
      /*
      In case we create nested-functions it's OBLIGATORY TO USE ARROW FUNCTIONS.
      If we use normal functions, the range of 'this' is the function itself, so we cannot access #private fields.
      */
      deposit: (amount) => {
        this.#balance += amount;
      },
      withdraw: (amount) => {
        if (this.#balance >= amount) {
          this.#balance -= amount;
          return amount;
        } else {
          throw new Error("Not enough balance in the account.");
        }
      },
    };
  }
}

// What happens if we create an objects without values in its attributes?
let undefBankAcc = new BankAccount();
console.log(undefBankAcc);

// Basic test of object myBankAcc
let myBankAcc = new BankAccount("Jhon", 2000, "1234");
console.log(myBankAcc);
myBankAcc.printBalance();

// Tests on nested-functions with session logged in:
const session = myBankAcc.login("1234");
session.deposit(200);
session.withdraw(100);
myBankAcc.printBalance();

// Example on what happens when an exeption is throwed (un-comment and try it yourself)
/*
const invalidSession = myBankAcc.login("password");
invalidSession.withdraw(500);
*/

/*
Feel free to expand this example of Classes and encapsulation, I recommend you to create another nested function,
try a 'changePassword' function, in which you'll also need a valid session-token.
*/
