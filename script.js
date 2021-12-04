'use strict'

const account1 = {
    owner: 'Noor Ali',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    movementsDates: [
        "2021-11-14T21:15:17.178Z",
        "2021-11-15T07:22:02.383Z",
        "2021-11-16T09:15:04.904Z",
        "2021-11-17T10:17:24.185Z",
        "2021-11-18T14:11:59.604Z",
        "2021-11-19T17:01:17.194Z",
        "2021-11-20T23:36:17.929Z",
        "2021-11-21T10:51:36.790Z",
    ],
    currency: "USD",
    interestRate: 1.2,
    pin: 1111,
    locale: 'en-US',
};
  
const accounts = [account1];

// Selecting Elements...

// LABELS.
const welcome = document.querySelector('.welcome');

const balanceLabel = document.querySelector('.balance_value');
const balanceDate = document.querySelector('.date');

const summaryIn = document.querySelector('.summary_value-in');
const summaryOut = document.querySelector('.summary_value-out');
const summaryInterest = document.querySelector('.summary_value-interest');

const labelTimer = document.querySelector('.timer');

// CONTAINERS
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

// INPUTS
const loginUserInput = document.querySelector('.login_input-user');
const loginPinInput = document.querySelector('.login_input-pin');
  
const transferUserInput = document.querySelector('.form_input-to');
const transferAmountInput = document.querySelector('.form_input-transfer');

const loanAmountInput = document.querySelector('.form_input-loan');

const closeUserInput = document.querySelector('.form_input-user');
const closePinInput = document.querySelector('.form_input-pin');

// BUTTONS
const loginBtn = document.querySelector('.login_btn');
const transferBtn = document.querySelector('.form_btn-transfer');
const loanBtn = document.querySelector('.form_btn-loan');
const closeBtn = document.querySelector('.form_btn-close');

const sortBtn = document.querySelector('.btn_sort');

// x----x----x----x----x----x----x----x----x-----x-----x-----x-----x-----x-----x-----x-----x
const account1 = {
    owner: 'Noor Ali',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    movementsDates: [
        "2021-11-14T21:15:17.178Z",
        "2021-11-15T07:22:02.383Z",
        "2021-11-16T09:15:04.904Z",
        "2021-11-17T10:17:24.185Z",
        "2021-11-18T14:11:59.604Z",
        "2021-11-19T17:01:17.194Z",
        "2021-11-20T23:36:17.929Z",
        "2021-11-21T10:51:36.790Z",
    ],
    deposites: [200, 450, 3000, 70, 1300],
    depositeDates: [
        "2021-11-14T21:15:17.178Z",
        "2021-11-15T07:22:02.383Z",
        "2021-11-17T10:17:24.185Z",
        "2021-11-20T23:36:17.929Z",
        "2021-11-21T10:51:36.790Z",
    ],
    withdraws: [-400, -650, -130],
    withdrawDates: [
        "2021-11-16T09:15:04.904Z",
        "2021-11-18T14:11:59.604Z",
        "2021-11-19T17:01:17.194Z",
    ],
    currency: "USD",
    pin: 1111,
    locale: 'en-US',
};



let currentAccount = account1;
