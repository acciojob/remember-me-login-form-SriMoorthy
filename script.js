//your JS code here. If required.
    window.onload = function() {
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      if (storedUsername && storedPassword) {
        document.getElementById("existing").style.display = "block";
      }
    };

    // Handle form submission
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const rememberMe = document.getElementById("checkbox").checked;

      if (rememberMe) {
        // Save username and password to local storage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        // Remove username and password from local storage
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      alert(`Logged in as ${username}`);
    });

    // Handle login as existing user button click
    document.getElementById("existing").addEventListener("click", function() {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        alert(`Logged in as ${storedUsername}`);
      }
    });