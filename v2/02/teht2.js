
var Auto = (function() {

    var wm = new WeakMap();

    class Auto {
        constructor(tankki, matkamittari) {
            this.tankki = tankki;
            wm.set(this, {mittari: matkamittari});
        };
            
        aja() {
            if (this.tankki > 0) {
                console.log("brum brum");
                this.tankki -= 0.5;
                wm.set(this, {mittari: wm.get(this).mittari + 1});
            }else {
                console.log("*köh* *köh* bensa loppu *köh* *köh*");
            }
        };
    
        tankkaa(maara) { this.tankki += maara; }; 
    
        getTankki () { return this.tankki; }
    
        getMatkamittari () { return wm.get(this).mittari; }
    }

    return Auto;
})();



var superAuto = new Auto(2, 10);

console.log("Bensaa jälella: " + superAuto.getTankki() + ". Mittari nayttää: " + superAuto.getMatkamittari());
superAuto.aja();
console.log("Bensaa jälella: " + superAuto.getTankki() + ". Mittari nayttää: " + superAuto.getMatkamittari());
superAuto.aja();
console.log("Bensaa jälella: " + superAuto.getTankki() + ". Mittari nayttää: " + superAuto.getMatkamittari());
superAuto.aja();
console.log("Bensaa jälella: " + superAuto.getTankki() + ". Mittari nayttää: " + superAuto.getMatkamittari());
superAuto.aja();
console.log("Bensaa jälella: " + superAuto.getTankki() + ". Mittari nayttää: " + superAuto.getMatkamittari());
superAuto.aja();
console.log("Bensaa jälella: " + superAuto.getTankki() + ". Mittari nayttää: " + superAuto.getMatkamittari());
