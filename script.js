//your JS code here. If required.
        document.addEventListener("DOMContentLoaded", function () {
            const loginForm = document.getElementById("loginForm");
            const existingUserButton = document.getElementById("existing");

            // Initially hide the 'Login as existing user' button
            existingUserButton.style.display = "none";

            // Check if user credentials are saved in local storage
            if (localStorage.getItem("username") && localStorage.getItem("password")) {
                existingUserButton.style.display = "block"; // Show the button if credentials exist
            }

            loginForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;
                const rememberMe = document.getElementById("checkbox").checked;

                // If 'Remember me' is checked, save credentials in local storage
                if (rememberMe) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    existingUserButton.style.display = "block"; // Show button if credentials are saved
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                    existingUserButton.style.display = "none"; // Hide button if credentials are removed
                }

                alert(`Logged in as ${username}`);
            });

            // Handle existing user login
            existingUserButton.addEventListener("click", function () {
                const username = localStorage.getItem("username");
                alert(`Logged in as ${username}`);
            });
        });