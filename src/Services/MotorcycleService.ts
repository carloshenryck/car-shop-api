import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';

class MotorcycleService {
  private MotorcycleODM: MotorcycleODM;

  constructor() {
    this.MotorcycleODM = new MotorcycleODM();
  }

  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycle);
  }

  public async findAll() {
    return this.MotorcycleODM.findAll();
  }

  public async register(motorcycle: IMotorcycle) {
    const motorcycleWithStatus = motorcycle;
    if (!('status' in motorcycle)) {
      motorcycleWithStatus.status = false;
    }
    const newMotorcycle = await this.MotorcycleODM.create(motorcycleWithStatus);
    return this.createMotorcycleDomain(newMotorcycle);
  }
}

export default MotorcycleService;