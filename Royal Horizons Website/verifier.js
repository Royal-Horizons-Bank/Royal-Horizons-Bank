const userLogin = (userName, password) => {
    const userFound = accounts.find((account) => account.userName === userName);
    if (userFound) {
      if (password !== userFound.pin) {
        displayError("Invalid Username or Password");
      } else {
        //userFound["pin"] = "****";
        localStorage.setItem("loggedInUser", JSON.stringify(userFound));
        localStorage.setItem("accounts", JSON.stringify(accounts));
        window.location.href = "/layout.html";
      }
    } else {
      displayError("Invalid Username or Password");
    }
  };
  
  document.querySelector(".login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = userNameField.value;
    const password = Number(passwordField.value);
    
    // Check if the provided username and password match any account
    userLogin(userName, password);
  });