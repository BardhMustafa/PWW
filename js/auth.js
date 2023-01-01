window.onload = (event) => {
    // console.log(checkIfUser())
    isUserLogged()
}


function login(data) {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            console
            setDataInLS("token", data.token)
            setDataInLS("name", data.firstName)
        }
        ).catch(err => console.log(err)
        )
}
function isUserLogged() {
    editNav(checkIfUser())

}
function checkIfUser() {
    var isauth = false;
    if (getDataFromLS("token")) {
        isauth = true
    }
    return isauth
}
function editNav(data) {
    if (data) {
        document.getElementById("loginLink").style.display = "none";
        document.getElementById("logoutLink").style.display = "block";
        document.getElementById("user").innerHTML = getDataFromLS("name")
        document.getElementById("logoutLink").addEventListener("click", logout)
    } else {
        document.getElementById("loginLink").style.display = "block";
        document.getElementById("logoutLink").style.display = "none";

    }
}
function logout() {
    removeFromLS("token")
    removeFromLS("name")
}