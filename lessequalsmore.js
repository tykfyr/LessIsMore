let currentUrl = window.location.toString();

let substrings = ["checkout", "basket", "cart", "kurv"];

if (substrings.some(function (v) {
    return currentUrl.indexOf(v) >= 0;
})) {
    let confirmMessage = 'Looks like you\'re about to do some online shopping. Sure you\'re gonna need this?';
    let confirmCheck = confirm(confirmMessage);

    if (!confirmCheck) {
        window.history.back();
    }
}