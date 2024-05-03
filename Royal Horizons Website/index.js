//Select DOM Elements
const userNameField = document.querySelector(".username");
const passwordField = document.querySelector(".password");
const errorMessage = document.querySelector(".error");

const getloggedInUser = () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    window.location.href = "../Royal Horizons Website/layout.html";
  }
};

getloggedInUser();

const account1 = {
  owner: "Riley Salcedo",
  transactions: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2,
  pin: 2505,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2023-05-27T17:01:17.194Z",
    "2023-07-11T23:36:17.929Z",
    "2023-07-12T10:51:36.790Z",
  ],
  currency: "EU",
  locale: "en-US",
};

const account2 = {
  owner: "Mark Simon",
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Jianne Mangayayam",
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account4 = {
  owner: "Glecy Reina",
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = JSON.parse(localStorage.getItem("accounts")) || [
  account1,
  account2,
  account3,
  account4,
];


accounts.forEach(account => {
  account.currency = "PHP";
});

// Update localStorage with the modified accounts array
localStorage.setItem("accounts", JSON.stringify(accounts));

/* GET USERNAMES */
const computeUserNames = (accounts) => {
  for (const account of accounts) {
    account.userName = account.owner
      .toLowerCase()
      .split(" ")
      .map((str) => str[0])
      .join("");
  }
};
computeUserNames(accounts);

/* DISPLAY ERROR */

const displayError = (message) => {
  alert(message); // Show an alert with the error message
};

/* LOGIN FUNCTION */

const userLogin = (userName, password) => {
  const userFound = accounts.find((account) => account.userName === userName);
  if (userFound) {
    if (password !== userFound.pin) {
      displayError("Invalid Username or Password");
    } else {
      localStorage.setItem("loggedInUser", JSON.stringify(userFound));
      localStorage.setItem("accounts", JSON.stringify(accounts));
      window.location.href = "../Royal Horizons Website/layout.html";
    }
  } else {
    displayError("Invalid Username or Password");
  }
};

document.querySelector(".login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  userLogin(userNameField.value, Number(passwordField.value));
});



const newAccount = {
  owner: "R J Salcedo",
  transactions: [],
  interestRate: 0, // You can set the interest rate as per your requirements
  pin: 1234, // Set a PIN for the new account
  movementsDates: [], // Leave this empty for now
  currency: "PHP", // Set the currency as per your requirements
  locale: "en-US", // Set the locale as per your requirements
};

// Generate a username for the new account
const generateUsername = (name) => {
  return name
    .toLowerCase()
    .split(" ")
    .map((str) => str[0])
    .join("");
};

newAccount.userName = generateUsername(newAccount.owner);

// Add the new account to the existing accounts array
accounts.push(newAccount);

// Update localStorage with the modified accounts array
localStorage.setItem("accounts", JSON.stringify(accounts));

// Display the username and PIN for the new account
console.log("Username:", newAccount.userName);
console.log("PIN:", newAccount.pin);


// Export the authenticateUser function
function authenticateUser(username, password) {
  const userFound = accounts.find(account => account.userName === username && account.pin === password);
  return userFound ? true : false;
}

window.authenticateUser = authenticateUser; // Make the function globally accessible

const newAccount11 = {
  owner: "Loraine May Gamis",
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 5678,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};


const newAccount1 = {
  owner: "Samantha Sheen Gambot",
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 7492,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};
newAccount1.userName = generateUsername(newAccount1.owner);
accounts.push(newAccount1);
localStorage.setItem("accounts", JSON.stringify(accounts));
console.log("Username:", newAccount1.userName);
console.log("PIN:", newAccount1.pin);

// Account 2
const newAccount2 = {
  owner: "Jossen Ramos Torres jr.",
  transactions: [],
  interestRate: 0,
  pin: 8254, // 4-digit PIN
  movementsDates: [],
  currency: "PHP",
  locale: "en-US",
};
newAccount2.userName = generateUsername(newAccount2.owner);
accounts.push(newAccount2);
localStorage.setItem("accounts", JSON.stringify(accounts));
console.log("Username:", newAccount2.userName);
console.log("PIN:", newAccount2.pin);

// Account 3
const newAccount3 = {
  owner: "Hannah Ortiguero",
  transactions: [],
  interestRate: 0,
  pin: 3915, // 4-digit PIN
  movementsDates: [],
  currency: "PHP",
  locale: "en-US",
};
newAccount3.userName = generateUsername(newAccount3.owner);
accounts.push(newAccount3);
localStorage.setItem("accounts", JSON.stringify(accounts));
console.log("Username:", newAccount3.userName);
console.log("PIN:", newAccount3.pin);

// Account 4
const newAccount4 = {
  owner: "Angel Ann Javonero",
  transactions: [],
  interestRate: 0,
  pin: 6138, // 4-digit PIN
  movementsDates: [],
  currency: "PHP",
  locale: "en-US",
};
newAccount4.userName = generateUsername(newAccount4.owner);
accounts.push(newAccount4);
localStorage.setItem("accounts", JSON.stringify(accounts));
console.log("Username:", newAccount4.userName);
console.log("PIN:", newAccount4.pin);

// Account 5
const newAccount5 = {
  owner: "Rhea Mae Sumalbag",
  transactions: [],
  interestRate: 0,
  pin: 9281, // 4-digit PIN
  movementsDates: [],
  currency: "PHP",
  locale: "en-US",
};
newAccount5.userName = generateUsername(newAccount5.owner);
accounts.push(newAccount5);
localStorage.setItem("accounts", JSON.stringify(accounts));
console.log("Username:", newAccount5.userName);
console.log("PIN:", newAccount5.pin);

// Account 6
const newAccount6 = {
  owner: "Niño Bruan",
  transactions: [],
  interestRate: 0,
  pin: 4759, // 4-digit PIN
  movementsDates: [],
  currency: "PHP",
  locale: "en-US",
};
newAccount6.userName = generateUsername(newAccount6.owner);
accounts.push(newAccount6);
localStorage.setItem("accounts", JSON.stringify(accounts));
console.log("Username:", newAccount6.userName);
console.log("PIN:", newAccount6.pin);

// Account 7
const newAccount7 = {
  owner: "Niña Pascua",
  transactions: [],
  interestRate: 0,
  pin: 3567, // 4-digit PIN
  movementsDates: [],
  currency: "PHP",
  locale: "en-US",
};
newAccount7.userName = generateUsername(newAccount7.owner);
accounts.push(newAccount7);
localStorage.setItem("accounts", JSON.stringify(accounts));
console.log("Username:", newAccount7.userName);
console.log("PIN:", newAccount7.pin);

// Account 8
const newAccount8 = {
  owner: "Khavriel Solis",
  transactions: [],
  interestRate: 0,
  pin: 8421, // 4-digit PIN
  movementsDates: [],
  currency: "PHP",
  locale: "en-US",
};
newAccount8.userName = generateUsername(newAccount8.owner);
accounts.push(newAccount8);
localStorage.setItem("accounts", JSON.stringify(accounts));
console.log("Username:", newAccount8.userName);
console.log("PIN:", newAccount8.pin);

// Account 9
const newAccount9 = {
  owner: "Noel Emmanuel Ollores",
  transactions: [],
  interestRate: 0,
  pin: 2976, // 4-digit PIN
  movementsDates: [],
  currency: "PHP",
  locale: "en-US",
};
newAccount9.userName = generateUsername(newAccount9.owner);
accounts.push(newAccount9);
localStorage.setItem("accounts", JSON.stringify(accounts));
console.log("Username:", newAccount9.userName);
console.log("PIN:", newAccount9.pin);

// Account 10
const newAccount10 = {
  owner: "Lyra Jane Retrato",
  transactions: [],
  interestRate: 0,
  pin: 5184, // 4-digit PIN
  movementsDates: [],
  currency: "PHP",
  locale: "en-US",
};
newAccount10.userName = generateUsername(newAccount10.owner);
accounts.push(newAccount10);
localStorage.setItem("accounts", JSON.stringify(accounts));
console.log("Username:", newAccount10.userName);
console.log("PIN:", newAccount10.pin);

// Generate a username for the new account
newAccount5.userName = generateUsername(newAccount5.owner);

// Add the new account to the existing accounts array
accounts.push(newAccount2);

// Update localStorage with the modified accounts array
localStorage.setItem("accounts", JSON.stringify(accounts));

// Display the username and PIN for the new account
console.log("Username:", newAccount5.userName);
console.log("PIN:", newAccount5.pin);