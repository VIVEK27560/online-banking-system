document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        const users = {
            admin: "admin123",
            user1: "user123",
            user2: "user123",
            user3: "user123",
            user4: "user123",
            user5: "user123"
        };

        if (username === "" || password === "") {
            alert("Please enter username and password");
            return;
        }

        if (users[username] && users[username] === password) {
            sessionStorage.setItem("loggedInUser", username);

            window.location.href = "../Home/home.html";
        } else {
            alert("Invalid username or password");
        }
    });

});