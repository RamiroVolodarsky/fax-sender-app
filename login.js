function auth() {
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value
    const data = {
        "NSX": {
          "Credentials": {
            "UserName": userName,
            "PW2": password
          }
        }
      };

    fetch('https://ipfone-nsx.ipfone.com/rest/mqs/NSX/Login?_content=json&id=12731518-1', {
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
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert('Error:', error);
            console.error('Error:', error);
            return;
        });
}