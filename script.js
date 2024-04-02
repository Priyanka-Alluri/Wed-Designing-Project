const container = document.getElementById('container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const signupForm = document.querySelector('.sign-up form');
const signinForm = document.querySelector('.sign-in form');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Function to handle user signup
function signup() {
    var name = document.getElementById('signup-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    // Here you can add code to validate user details if needed

    // Store user details (for simplicity, you might want to use localStorage or a server-side database)
    var user = {
        name: name,
        email: email,
        password: password
    };

    // Example: storing user details in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Inform the user about successful signup (you can use a different approach such as a notification)
    alert("Sign up successful. Please proceed to login.");

    // Automatically switch to the login form after signup
    container.classList.remove("active");
}

// Function to handle user login
function login() {
    var email = document.getElementById('signin-email').value;
    var password = document.getElementById('signin-password').value;

    // Retrieve user details from storage (localStorage in this case)
    var storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if a user with the provided email exists and the password matches
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        // If login is successful, redirect to the quiz page
        window.location.href = "quiz.html";
    } else {
        // If login fails, display an error message
        alert("Invalid email or password.");
    }
}

// Event listener for signup form submission
signupForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    signup(); // Call signup function
});

// Event listener for signin form submission
signinForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    login(); // Call login function
});
