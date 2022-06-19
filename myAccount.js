let accountData = JSON.parse(localStorage.getItem("accountDatas")) || []
    let account = document.querySelector("#createAccount")
    let accounts = document.querySelector("#login")
    document.querySelector("#createAccount").addEventListener("submit", createAccountFun);
    document.querySelector("#login").addEventListener("submit", loginFun);

    function createAccountFun(event) {
        event.preventDefault();
        let userFName = account.fname.value;
        let userLName = account.lname.value;
        let userMail = account.email.value;
        let userPwd = account.pwd.value;
        console.log(userPwd)
        let userCPwd = account.cpwd.value;
        let userChecked = account.checkBox.checked;
        let userData = {
            fname: userFName,
            lname: userLName,
            mail: userMail,
            pwd: userPwd,
            cpwd: userCPwd

        }
        if (userFName != "" && userLName != "" && userMail != "" && userPwd != "" && userCPwd != "" && userChecked != false) {


            let filtered = accountData.filter(function (ele) {
                return ele.mail == userMail;
            })
            if (userCPwd != userPwd)  {
            alert("Please Check Confirm Password is not Matched");
        }
        else if (filtered.length > 0) {
            alert("Allready registered")
        }
        else {
            alert("Thanks for Beliving on us. Please fill the adress for Better Experience")
            accountData.push(userData)
            localStorage.setItem("accountDatas", JSON.stringify(accountData));
            window.location.href = "Address.html"
        }

    }
    else {
        alert("Invalid Credentials")
    }
}

function loginFun(event) {
    event.preventDefault();
    let userMail = accounts.logemail.value;
    let userPwd = accounts.logpwd.value;
    let filtered = accountData.filter(function (ele) {
        return ele.mail == userMail;
    })
    if (filtered.length > 0) {
        if (filtered[0].pwd != userPwd) {
            alert("Invalid password")
        }
        else {
            alert("Logged in sucessfully")
            localStorage.setItem("userDet",JSON.stringify(accountData))
            window.location.href = "index.html"
        }
    }
    else {
        alert("User not found")
    }

}