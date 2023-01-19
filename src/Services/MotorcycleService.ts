import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';
import NotFound from '../Interfaces/errors/NotFound';

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

  public async findById(id: string) {
    const motorcycle = await this.MotorcycleODM.findById(id);
    if (motorcycle === null) throw new NotFound('Motorcycle not found');
    return motorcycle;
  }

  public async register(motorcycle: IMotorcycle) {
    const motorcycleWithStatus = motorcycle;
    if (!('status' in motorcycle)) {
      motorcycleWithStatus.status = false;
    }
    const newMotorcycle = await this.MotorcycleODM.create(motorcycleWithStatus);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async updateById(id: string, motorcycle: IMotorcycle) {
    const updatedMotorcycle = await this.MotorcycleODM.updateById(id, motorcycle);
    if (updatedMotorcycle === null) throw new NotFound('Motorcycle not found');
    return updatedMotorcycle;
  }
}

export default MotorcycleService;