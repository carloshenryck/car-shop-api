import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';

class CarService {
  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async register(car: ICar) {
    const carWithStatus = car;
    if (!('status' in car)) {
      carWithStatus.status = false;
    }
    const carODM = new CarODM();
    const newCar = await carODM.create(carWithStatus);
    return this.createCarDomain(newCar);
  }
}

export default CarService;