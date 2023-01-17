import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import { UnprocessableEntity, NotFound } from '../Interfaces/errors';

class CarService {
  private carODM: CarODM;

  constructor() {
    this.carODM = new CarODM();
  }

  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async findAll() {
    return this.carODM.findAll();
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new UnprocessableEntity('Invalid mongo id');
    const car = await this.carODM.findById(id);
    if (car === null) throw new NotFound('Car not found');
    return car;
  }

  public async register(car: ICar) {
    const carWithStatus = car;
    if (!('status' in car)) {
      carWithStatus.status = false;
    }
    const newCar = await this.carODM.create(carWithStatus);
    return this.createCarDomain(newCar);
  }
}

export default CarService;