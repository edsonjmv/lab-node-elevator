const Elevator = require('./elevator.js');
const Person = require('./person.js');


let elevator = new Elevator();

const edson = new Person("Edson",7,1)
const pablo = new Person("Pablo",3,9)
const marc = new Person("Marc",6,2)
const raul = new Person("Raul",3,8)
const papu = new Person("Papu",9,1)



elevator.start();
elevator.call(edson);
elevator.call(pablo);
elevator.call(marc);
elevator.call(raul);
elevator.call(papu);
