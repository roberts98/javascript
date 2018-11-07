let degree = function(temp) {
    return {
        ftemp: temp,
        ctemp: (temp - 32) * 5 / 9,
        ktemp: (temp + 459.67) * 5 / 9
    }
}

let ftemp = degree(32).ftemp;
let ctemp = degree(32).ctemp;
let ktemp = degree(32).ktemp;

console.log(ftemp);
console.log(ctemp);
console.log(ktemp);