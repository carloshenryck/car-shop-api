import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import { NotFound } from '../Interfaces/errors';

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

  public async updateById(id: string, car: ICar) {
    const updatedCar = await this.carODM.updateById(id, car);
    if (updatedCar === null) throw new NotFound('Car not found');
    return updatedCar;
  }
}

export default CarService;