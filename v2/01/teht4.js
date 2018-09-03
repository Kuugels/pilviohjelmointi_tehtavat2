
let lampotilat = [];

for (let i = 0; i < 24; i++) {
    lampotilat.push((Math.random() * 30) - 15);
}

let posLampotilat = lampotilat.filter(lamp => lamp > 0);

const reducer = (banaani, currentValue) => banaani + currentValue;

console.log(lampotilat);

console.log(posLampotilat.reduce(reducer) / posLampotilat.length);