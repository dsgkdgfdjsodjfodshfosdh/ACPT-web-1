function login() {
    var correctUsername = "amanda";
    var correctPassword = "1234";

    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    if (enteredUsername == correctUsername && enteredPassword == correctPassword) {

        window.location.href = "../index.html";
    } else {
        document.getElementById("message").innerText = "Invalid username or password";
    }
}