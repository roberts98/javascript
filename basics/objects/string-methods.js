let isValidPassword = function(password) {
    if (password.length < 9 || password.includes('password')) {
        return false;
    } else {
        return true;
    }
}

console.log(isValidPassword('passwo22d'))