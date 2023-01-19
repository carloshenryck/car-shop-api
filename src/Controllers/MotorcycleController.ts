import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async findAll() {
    const motorcycles = await this.service.findAll();
    return this.res.status(200).json(motorcycles);
  }

  public async findById() {
    const { id } = this.req.params;
    const motorcycle = await this.service.findById(id);
    return this.res.status(200).json(motorcycle);
  }

  public async register() {
    const motorcycle: IMotorcycle = this.req.body;
    const newMotorcycle = await this.service.register(motorcycle);
    return this.res.status(201).json(newMotorcycle);
  }

  public async updateById() {
    const motorcycle: IMotorcycle = this.req.body;
    const { id } = this.req.params;
    const updatedMotorcycle = await this.service.updateById(id, motorcycle);
    return this.res.status(200).json(updatedMotorcycle);
  }
}

export default MotorcycleController;