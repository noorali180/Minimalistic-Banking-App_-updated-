'use strict'

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

const containerDashboard = document.querySelector('.dashboard');
const containerHistory = document.querySelector('.history');

// INPUTS
const loginUserInput = document.querySelector('.login_input-user');
const loginPinInput = document.querySelector('.login_input-pin');

const signupUserInput = document.querySelector('.signup_input-user');
const signupPinInput = document.querySelector('.signup_input-pin');
const signupCPinInput = document.querySelector('.signup_input-confirmpin');
  
const transferUserInput = document.querySelector('.form_input-to');
const transferAmountInput = document.querySelector('.form_input-transfer');

const loanAmountInput = document.querySelector('.form_input-loan');

const closeUserInput = document.querySelector('.form_input-user');
const closePinInput = document.querySelector('.form_input-pin');

// BUTTONS
const loginBtn = document.querySelector('.login_btn');
const logoutBtn = document.querySelector('.logout_btn');
const signupBtn = document.querySelector('.signup_btn');
const transferBtn = document.querySelector('.form_btn-transfer');
const loanBtn = document.querySelector('.form_btn-loan');
const closeBtn = document.querySelector('.form_btn-close');

const sortBtn = document.querySelector('.btn_sort');

const signupClick = document.querySelector('.page_signup');
const loginClick = document.querySelector('.page_login');

const dashboardBtn = document.querySelector('.dashboard_btn');
const historyBtn = document.querySelector('.history_btn');

// MESSAGES
const signUpMessage = document.querySelector('.isignup_message');
const loginMessage = document.querySelector('.ilogin_message');
const transactionMessage = document.querySelector('.main_msg');

// PAGES
const initialPage = document.querySelector('.initial_main');
const loginPage = document.querySelector('.login_page');
const signupPage = document.querySelector('.signup_page');

// x----x----x----x----x----x----x----x----x-----x-----x-----x-----x-----x-----x-----x-----x
const account1 = {
    owner: 'Noor Ali',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300], 
    movementsDates: [
        "2021-11-14T21:15:17.178Z",
        "2021-11-07T07:22:02.383Z",
        "2021-11-08T09:15:04.904Z",
        "2021-11-09T10:17:24.185Z",
        "2021-12-10T14:04:22.604Z",
        "2021-12-11T17:01:17.194Z",
        "2021-12-12T23:36:17.929Z",
        "2021-12-13T10:51:36.790Z",
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
    username: 'na',
};

const account2 = {
    owner: 'Mumtaz Ali',
    movements: [], // 200, 450, -400, 3000, -650, -130, 70, 1300
    movementsDates: [
        "2021-11-14T21:15:17.178Z",
        "2021-11-15T07:22:02.383Z",
        "2021-11-16T09:15:04.904Z",
        "2021-11-17T10:17:24.185Z",
        "2021-11-18T14:11:59.604Z",
        "2021-12-08T17:01:17.194Z",
        "2021-12-09T23:36:17.929Z",
        "2021-12-10T10:51:36.790Z",
    ],
    deposites: [], //200, 450, 3000, 70, 1300
    depositeDates: [
        "2021-11-14T21:15:17.178Z",
        "2021-11-15T07:22:02.383Z",
        "2021-11-17T10:17:24.185Z",
        "2021-11-20T23:36:17.929Z",
        "2021-11-21T10:51:36.790Z",
    ],
    withdraws: [], //-400, -650, -130
    withdrawDates: [
        "2021-11-16T09:15:04.904Z",
        "2021-11-18T14:11:59.604Z",
        "2021-11-19T17:01:17.194Z",
    ],
    currency: "USD",
    pin: 2222,
    locale: 'en-US',
    username: 'ma',
};

// FIXME: 
const accounts = [account1, account2];
// localStorage.setItem("accounts",JSON.stringify(accounts));
// const accounts = JSON.parse(localStorage.getItem('accounts'));
let currentAccount = account1, currentAccountIndex, timer;

// FUNCTIONALITIES...

// updating local storage...
const updateLocalStorage = function(accounts){
    localStorage.setItem("accounts",JSON.stringify(accounts));
    accounts = JSON.parse(localStorage.getItem('accounts'));
}

// creating warning messages...
const createMessage = function(place, message){
    place.textContent = message;
    setTimeout(() => {
        place.textContent = '';
    }, 2000);
}

// creating user name...
const createUserName = function(userName){
    return userName.toLowerCase()
            .split(' ')
            .map(n => n[0])
            .join('');
}

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
// internationalizing numbers...
const intlNumbers = function(locale, number){
    const intlNumber = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'USD',
    }).format(number);
    return intlNumber;
}

// FIXME:
// internationalizing movements dates...
const intlMovementsDate = function(locale, date){
    const now = new Date();
    const movDate = new Date(date);
    const daysPassed = Math.round((now - movDate) / 1000 / 24 / 60 / 60);

    // FIXME:
    if(daysPassed === 0) return 'Today';
    else if(daysPassed === 1) return 'Yesterday';
    else if(daysPassed === 2) return '2 days ago';
    else if(daysPassed === 3) return '3 days ago';
    else {
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        }).format(movDate);
    }
}

// calculate and display total balance...
const calcAndDisplayBalance = function(account){
    welcome.textContent = `Good Day, ${account.owner} ! 😊`;

    const totalBalance = account.movements.reduce((accum, mov) => accum + mov, 0);
    balanceLabel.textContent = intlNumbers(account.locale, totalBalance);

    const now = new Date();
    balanceDate.textContent = new Intl.DateTimeFormat('en-PK', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        weekday: 'long',
    }).format(now);
}

// display movements...
const displayMovements = function(account, sorted = false){
    if(account.movements.length !== 0){
        containerMovements.innerHTML = '';

        const movements = sorted ? account.movements.slice().sort((a, b) => a - b) : account.movements;

        movements.forEach((mov, i) => {
            let type = mov > 0 ? 'deposit' : 'withdrawal';
            const html = `
            <div class="movements_row">
                <div class="movements_type movements_type-${type}">${i+1} ${type}</div>
                <div class="movements_date">${sorted ? ' ' : intlMovementsDate(account.locale, account.movementsDates[i])}</div>
                <div class="movements_value">${intlNumbers(account.locale, Math.abs(mov))}</div>
            </div>
            `;
            containerMovements.insertAdjacentHTML('afterbegin', html);
        });
    }
    else{
        containerMovements.innerHTML = '';

        const html = `
        <div class="empty_transaction">
            <h1>Get started, with<br> your 1st transaction <br> :)</h1>
        </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    }
}

// calculate and display summary...
const calcAndDisplaySummary = function(account){
    const totalIn = account.deposites.reduce((accum,dep) => accum + dep, 0);
    const totalOut = account.withdraws.reduce((accum, wid) => accum + Math.abs(wid), 0);
    const totalInterest = account.deposites.map(dep => (dep * 2.5) / 100).reduce((accum, int) => accum + int, 0);

    summaryIn.textContent = intlNumbers(account.locale, totalIn);
    summaryOut.textContent = intlNumbers(account.locale, totalOut);
    summaryInterest.textContent = intlNumbers(account.locale, totalInterest);
}

// update UI functionality...
const updateUI = function(account){
    calcAndDisplayBalance(account);
    displayMovements(account);
    calcAndDisplaySummary(account);
}

updateUI(currentAccount);

const logout = function(){
    containerApp.style.opacity = 0.5;
    loginPage.style.opacity = 1;
    signupPage.style.opacity = 0;

    setTimeout(() => {
        containerApp.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
        containerApp.classList.add('hidden');
        initialPage.classList.remove('hidden');
    }, 2000);
    
    setTimeout(() => {
        initialPage.style.opacity = 1;
    }, 3000);
}

const login = function(){
    initialPage.style.opacity = 0;
    loginPage.style.opacity = 1;
    signupPage.style.opacity = 0;

    setTimeout(() => {
        initialPage.classList.add('hidden');
        signupPage.classList.add('hidden');
        loginPage.classList.remove('hidden');
        containerApp.classList.remove('hidden');
    }, 500)

    setTimeout(() => {
        containerApp.style.opacity = 0.5;
    }, 1000);

    setTimeout(() => {
        containerApp.style.opacity = 1;
    }, 3000);
}

// LOGOUT TIMER
const startLogoutTimer = function(){
    let time = 300; // 5 minutes...
    
    const rapid = function(){
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);

        labelTimer.textContent = `${min}:${sec}`;

        if(time === 0) {
            clearInterval(timer);
            logout();
        }
        time--;
    }
    rapid();
    const timer = setInterval(rapid, 1000);

    return timer;
}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// SIGN UP FUNCTIONALITY...
signupBtn.addEventListener('click', function(e){
    e.preventDefault();

    const user = signupUserInput.value;
    const pin = +signupPinInput.value;
    const cPin = +signupCPinInput.value;

    const isUserExist = accounts.find(acc => acc.owner.toLowerCase() === user.toLowerCase());
    const isLastNameExist = user.split(' ').length < 2 ? false : true;

    const userName = createUserName(user);

    if(user === '' || pin === 0 || cPin === 0) createMessage(signUpMessage, '*Dont leave any field empty.');
    else if(isUserExist) createMessage(signUpMessage, '*User already exist.');
    else if(!pin) createMessage(signUpMessage, '*Pin must contain only numbers.');
    else if(pin !== cPin) createMessage(signUpMessage, '*Pin don\'t match.');
    else if(!isLastNameExist) createMessage(signUpMessage, '*User last name missing.')
    else{
        accounts.push({
            owner: user,
            movements: [],
            movementsDates: [],
            deposites: [],
            depositeDates: [],
            withdraws: [],
            withdrawDates: [],
            currency: "USD",
            pin: pin,
            locale: 'en-US',
            username: userName,
        });

        //FIXME:
        // updateLocalStorage(accounts);

        currentAccount = accounts.find(acc => acc.username === userName && acc.pin === pin);
        currentAccountIndex = accounts.findIndex(acc => acc.username === userName && acc.pin === pin);

        updateUI(currentAccount);
        login();

        if(timer) clearInterval(timer);
        timer = startLogoutTimer();
    }
    signupUserInput.value = signupPinInput.value = signupCPinInput.value = '';
    signupUserInput.blur();
    signupPinInput.blur();
    signupCPinInput.blur();
});

// LOG IN FUNCTIONALITY
loginBtn.addEventListener('click', function(e){
    e.preventDefault();

    const userName = loginUserInput.value;
    const pin = +loginPinInput.value;

    currentAccount = accounts.find(acc => acc.username === userName);
    currentAccountIndex = accounts.findIndex(acc => acc.username === userName);

    if(userName === '' || pin === 0) createMessage(loginMessage, '*Dont leave any field empty.');
    else if(!currentAccount) createMessage(loginMessage, '*User not found.');
    else if(currentAccount.pin != pin) createMessage(loginMessage, '*incorrect PIN.');
    else{
        updateUI(currentAccount);
        login();

        if(timer) clearInterval(timer);
        timer = startLogoutTimer();
    }
    loginUserInput.value = loginPinInput.value = '';
    loginUserInput.blur();
    loginPinInput.blur();
});

// LOGOUT FUNCTIONALITY
logoutBtn.addEventListener('click', function(e){
    e.preventDefault();

    logout();
});

// TOGGLING B/W SIGNUP AND LOGIN PAGES
signupClick.addEventListener('click', function(e){
    e.preventDefault();

    loginPage.style.opacity = 0;

    setTimeout(() => {
        loginPage.classList.add('hidden');
        signupPage.classList.remove('hidden');
    }, 200);

    setTimeout(() => {
        signupPage.style.opacity = 1;
    }, 600);
});

loginClick.addEventListener('click', function(e){
    e.preventDefault();

    signupPage.style.opacity = 0;

    setTimeout(() => {
        signupPage.classList.add('hidden');
        loginPage.classList.remove('hidden');
    }, 200);

    setTimeout(() => {
        loginPage.style.opacity = 1;
    }, 600);
});
// ----x------x--------x--------x--------x--------x---------x---------x----//

// SORT BUTTON FUNCTIONALITY
let sorted = true;
sortBtn.addEventListener('click', function(e){
    e.preventDefault();

    displayMovements(currentAccount, sorted);
    sorted = !sorted;
});


// TRASNFER AMOUNT FUNCTIONALITY
transferBtn.addEventListener('click', function(e){
    e.preventDefault();

    const amount = +transferAmountInput.value;
    const userName = transferUserInput.value;

    const isUserExist = accounts.find(acc => userName === acc.username);

    if(amount === 0 || userName === '') createMessage(transactionMessage, '*Don\'t leave any field empty.');
    else if(!isUserExist) createMessage(transactionMessage, '*User not found.');
    else if(isUserExist.username === currentAccount.username) createMessage(transactionMessage, '*Cannot transfer money to the same account.');
    else if(amount < 0) createMessage(transactionMessage, '*Please enter a valid amount.');
    else if(amount > currentAccount.movements.reduce((accum, mov) => accum + mov, 0)) createMessage(transactionMessage, '*Don\'t have enough balance :(');
    else{
        const date = new Date();

        currentAccount.movements.push(-amount);
        currentAccount.movementsDates.push(date.toISOString());

        currentAccount.withdraws.push(-amount);
        currentAccount.withdrawDates.push(date.toISOString());

        isUserExist.movements.push(amount);
        isUserExist.movementsDates.push(date.toISOString());

        isUserExist.deposites.push(amount);
        isUserExist.depositeDates.push(date.toISOString());
        
        // FIXME:
        // updateLocalStorage(accounts);

        updateUI(currentAccount);
    }

        transferUserInput.value = transferAmountInput.value = '';
        transferUserInput.blur();
        transferAmountInput.blur();
});

// LOAN FUNCTIONALITY
loanBtn.addEventListener('click', function(e){
    e.preventDefault();

    const amount = +loanAmountInput.value;

    if(amount <= 0) createMessage(transactionMessage, '*Please enter a valid amount');
    else if(currentAccount.movements.some(mov => mov >= amount * 0.1)) createMessage(transactionMessage, '*Not eligible for loan :(');
    else{
        const date = new Date();

        setTimeout(() => {
            currentAccount.movements.push(amount);
            currentAccount.movementsDates.push(date.toISOString());

            currentAccount.deposites.push(amount);
            currentAccount.depositeDates.push(date.toISOString());

            // FIXME:
            // udpateLocalStorage(accounts);

            updateUI(currentAccount);
        }, 2000)
    }
    loanAmountInput.value = '';
    loanAmountInput.blur();
});

// CLOSE FUNCTIONALITY
closeBtn.addEventListener('click', function(e){
    e.preventDefault();

    const user = closeUserInput.value;
    const cnfirmPin = +closePinInput.value;

    if(user === '' || cnfirmPin === 0) createMessage(transactionMessage, '*Don\'t leave any field empty.');
    else if(user !== currentAccount.username) createMessage(transactionMessage, '*User not found.');
    else if(cnfirmPin !== currentAccount.pin) createMessage(transactionMessage, '*Please enter a correct PIN.');
    else{
        const confirmation = confirm('Do you really want to close your account permanently?');
        if(confirmation) {
            accounts.splice(currentAccountIndex, 1);

            // FIXME: 
            // updateLocalStorage(accounts);

            logout();
        }
    }
    closeUserInput.value = closePinInput.value = '';
    closeUserInput.blur();
    closePinInput.blur();
});

// DASHBOARD BUTTON FUNCTIONALITY
dashboardBtn.addEventListener('click', function(e){
    e.preventDefault();

    containerDashboard.classList.remove('hidden');
})
