4.write a class to calculate the uber price.

class calculator{
    constructor(){
        this.minRate = 2.00;
        this.perMile = 1.50;
        this.perMinute = 0.20
    }
    priceCalc(miles,time){
        const distanceCost = miles * this.perMile;
        const timeCost =  time * this.perMinute;
        const totalCost = this.minRate + distanceCost +timeCost;
        return totalCost.toFixed(2);
    }
}
const uberCalc = new calculator();
const distance = 10;
const duration = 20;
const calcPrice = uberCalc.priceCalc(distance,duration);
console.log(`Uber price: $${calcPrice}`);