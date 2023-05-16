function logIn (element) {

    console.log(element.innerText);
    if (element.innerText === "Login"){
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}

function notify() {
    alert("ninja is liked!");
}

function hide(element) {
    element.remove();
}