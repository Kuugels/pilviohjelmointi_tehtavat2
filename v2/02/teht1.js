
var normaaliMaki = (erotus) => {
    console.log("Normaalimaki: kpisteen jalkeinen erotus " + erotus);
    var pisteet;
    if (erotus >= 0) {
        pisteet = 60 + (erotus * 2);
    }else {
        pisteet = erotus * 2;
    }
    return pisteet;
};

var suurMaki = (erotus) => {
    console.log("Suurmaki: kpisteen jalkeinen erotus " + erotus);
    var pisteet;
    if (erotus >= 0) {
        pisteet = 60 + (erotus * 1.8);
    }else {
        pisteet = erotus * 1.8;
    }
    return pisteet;
}

var maki = (pituus) => {
    var pisteet = 0;
    if (pituus < 100) {
        pisteet = normaaliMaki(pituus - 75);
    }else {
        pisteet = suurMaki(pituus - 100);
    }
    return pisteet;
}

console.log(maki(76));
console.log(maki(75));
console.log(maki(74));
console.log(maki(100));
console.log(maki(99));
console.log(maki(101));