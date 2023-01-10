function auth() {
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value
    const data = {
        "NSX": {
          "Credentials": {
            "UserName": userName,
            "Password": password
          }
        }
      };

    fetch('https://cloud.faxback.net/rest/nsx/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            alert("You are successfully logged in")
            loginId = data.NSX.LoginId;
            alert("loginId: " + loginId)
            module.exports = {loginId};
            console.log('Success:', data.NSX.LoginId);
        })
        .catch((error) => {
            console.error('Error:', error);
            return;
        });
}