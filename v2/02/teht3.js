
var Auto = (function() {

    var wm = new WeakMap();

    class Auto {
        constructor(tankki, matkamittari) {
            this.tankki = tankki;
            wm.set(this, {mittari: matkamittari});
            Object.freeze(this);
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

// luokan constructoriin lisätty Object.freeze(this)
var superImmutableAuto = new Auto(2, 10);

/*
voi tehdä myös luomalla olion näin:
var jokuIhmeAuto = Object.freeze(teht2AutoLuokka);
console.log(jokuIhmeAuto.getTankki());
console.log(jokuIhmeAuto.aja());
*/
console.log("Bensaa jälella: " + superImmutableAuto.getTankki() + ". Mittari nayttää: " + superImmutableAuto.getMatkamittari());
superImmutableAuto.aja();
console.log("Bensaa jälella: " + superImmutableAuto.getTankki() + ". Mittari nayttää: " + superImmutableAuto.getMatkamittari());
