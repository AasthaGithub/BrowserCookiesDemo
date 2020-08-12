function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    var queryString = username;
    var rmCheck = document.getElementById("remember_me").checked;//true if remember me check box is clicked
    console.log(rmCheck);
    //rmcheck & make cookies 
    if (rmCheck && username && username.value !== "") {
    setWithExpiry('userkey',username,1);
    setWithExpiry('passkey',password,1);
    }
    if ( username == "root" && password == "123") {
        alert ("Login successfully");
        window.location.href = "WelcomePage.html" +  "?" + queryString;// Redirecting to other page along with passing username.
        return false;
    }
    else{
        alert("Invalid Username/Password. Try again!");
    }
}

function checkCookie(){
    const uservalue = getWithExpiry('userkey');
    const passvalue = getWithExpiry('passkey');
    if (uservalue && uservalue != '') {
        // $('#remember_me').attr('checked', 'checked');
        // $('#username').val(uservalue);
        // $('#pass').val(passvalue);
        window.location.href = "WelcomePage.html" +  "?" + uservalue;
        }
        console.log('Remembering'+  uservalue + pass);
}

function setWithExpiry(key, value, ttl) {
    //ttl= Expiry Time in days
    const now = new Date();
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + ttl*60*60*24*1000
    };
    localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    // if the item doesn't exist, return null
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}
