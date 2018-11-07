let getGrade = function(score, total) {
    let percent = score / total * 100;
    if (percent >= 90 && percent <= 100) {
        return console.log(`You got a A (${percent}%)!`);
    } else if (percent >=80) {
        return console.log(`You got a B (${percent}%)!`);
    } else if (percent >=70) {
        return console.log(`You got a C (${percent}%)!`);
    } else if (percent >=60) {
        return console.log(`You got a D (${percent}%)!`);
    } else if (percent >= 0) {
        return console.log(`You got a F (${percent}%)!`);
    }
}

console.log(getGrade(10, 20));