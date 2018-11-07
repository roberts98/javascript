let getTip = function(total, tip = .2) {
    return `A ${tip*100}% tip on ${total}$ would be ${total * tip}$`;
}

console.log(getTip(40, .25));


