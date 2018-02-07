var cars = []

function getNewCar() {
  return {
    city: 'Toronto',
    passengers: 0,
    gas: 100
  };
}

function addCar(cars, new_car) {
  cars.push(new_car);
  console.log('Adding new car to fleet. Fleet size is now ' + cars.length + '.');
}

function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas -= 10;
  console.log("Picked up passenger. Car now has " + car.passengers + ' passengers');
}

function getDestination(car) {
  if (car.city === 'Toronto') {
    return 'Mississauga';
  } else if (car.city === 'Mississauga') {
    return "London";
  } else if (car.city === 'London') {
    return 'Toronto';
  }
}

function fillUpGas(car) {
  var oldGas = car.gas;
  car.gas = 100;
  console.log('Filled up to ' + car.gas + ' on gas from ' + oldGas);
}

function getGasAmount(car) {
  return car.gas;
}

function drive(car, cityDistance) {
  if (car.gas < cityDistance) {
    fillUpGas(car);
  }
  car.city = getDestination(car);
  car.gas -= cityDistance;
  console.log('Drove to ' + car.city + '. Remaining gas:' + getGasAmount(car));
}

function dropOffPassengers(car) {
  var previousPassengers = car.passengers;
  car.passengers = 0;
  console.log('Dropped off ' + previousPassengers + ' passengers');
}

function act(car) {
  var distanceBetweenCities = 50;

  if (car.gas < 20) {
    fillUpGas(car);
  } else if (car.passengers < 3) {
    pickUpPassenger(car);
  } else {
      if (car.gas < distanceBetweenCities) {
        fillUpGas(car);
      } drive(car, distanceBetweenCities) + dropOffPassengers(car);
  }
}

function commandFleet() {
  for(var i = 0; i < cars.length; i++) {

    console.log('Car ' + (i+1) + ': '); act(cars[i]);
    console.log('---');
  }
}

function addOneCarPerDay(cars, numDays){
  for(var i = 0; i < numDays; i++) {
    newCar = getNewCar(newCar);
    addCar(cars, newCar);
    commandFleet(cars);
  }
}
