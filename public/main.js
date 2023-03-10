
//create a new node
const button = document.getElementById('login');

//create a new node
const header = document.getElementById('div');

//create a new node
const parent = document.getElementById('parent');

//creating the Login form
const formForLogin = document.createElement('form');

//creating the chatUi
const chatUi = document.createElement('form');

//creating the messages window
const messageWindow = document.createElement('div');

messageWindow.setAttribute('class', 'col-sm-9');

//creating send button
const sendButton = document.createElement('button');
sendButton.innerHTML = 'Send';

sendButton.addEventListener('Click', () => {
    chatUi.appendChild(sendButton);
})
//populate our div
// messageWindow.innerHTML += '<div style="background-color:white" class="mt-4 p-5 col-sm-9 container rounded">Message Window<div><button class="form-control rounded">Send</button></div></div>'
messageWindow.innerHTML += '<div style="background-color:white" class="mt-4 p-5 col-sm-9 container rounded">Message Window</div>'

//filling th chatUi
chatUi.innerHTML += '<textarea placeholder="Type a new message" class="container border border-0" id="message-input"></textarea><input id="send" class="form-control" type="submit">'



//const registerUrl = '/register';

//filling the login form
formForLogin.innerHTML += '<div class="container-sm-4 was-validated" id="loginForm"><form action="/login" method="POST"><label class="form-label" for="email" required>Email:</label><input class="form-control" type="text" id="email" name="email" placeholder="Email" onblur="validateEmail(this.value)" required><div class="valid-feedback"></div><br><label class="form-label" for="password" required>Password:</label><input class="form-control"  type="text" id="password" name="password" placeholder="Password" required><div class="valid-feedback"></div><br><input class="form-control"  id="userSubmit" type="submit" placeholder="Submit"></div></form>'


//create a new node
const divForLogin = document.getElementById('loginForm');

//create a new node 
const mainBody = document.getElementById('main-body');

//create a new node
// const messageButton = document.getElementById('send');

// messageButton.addEventListener('click', ()=>{console.log('Message Sent');})


//method to add message window
const addMessageWindow = () => {
    mainBody.appendChild(messageWindow);

}

//validating email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//Login function
const replaceLoginButton = () => {
    parent.replaceChild(formForLogin, button);
    button.removeEventListener('click', replaceLoginButton);

}

//Proceed to chat
const replaceSubmitButton = () => {
    parent.replaceChild(chatUi, formForLogin);
    mainBody.after(messageWindow);
    formForLogin.removeEventListener('submit', replaceSubmitButton);
}

//button.addEventListener('click', (e) => { console.log('clicked') });
button.addEventListener('click', replaceLoginButton);


// messageWindow.style.width='300px';
// messageWindow.style.height='200px';
// messageWindow.style.backgroundColor = '#f2f2f2';




//const userSubmit = document.getElementById('userSubmit');

formForLogin.addEventListener('submit', replaceSubmitButton);

//messageWindow.addEventListener('click', addMessageWindow);

//userSubmit.addEventListener('click', ()=>{location.replace("./chatui.html")})

//formForLogin.addEventListener('submit', (e)=>{e.preventDefault();})

