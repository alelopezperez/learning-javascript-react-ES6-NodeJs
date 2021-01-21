// Only change code below this line
class Vegetable {
   constructor(name){
       this.name = name;
   } 
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


// Getter and Setter in JS
// with a getter you acces the value a a property(values or attributes) 
// not as a function.
// Only change code below this line

class Thermostat {
    constructor(temp){
        this._temperature = temp;
    }

    get temperature(){
        return 5/9*(this._temperature-32);
    }
    set temperature(temp){
        this._temperature = temp* 9.0 / 5 + 32;
    }

    tempi(){
        return 25;
    }


}

// Only change code above this line
function tempis(){
        return 25;
}

let obj = {
    ale : 27,
    kk : function klk(){
        return 77;
    },
    ajafunc(){
        return "hola";
    },
    last : () => "klkfinal"
};
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(tempis());
console.log(obj.kk());
console.log(obj.ajafunc());
console.log(obj.last());

