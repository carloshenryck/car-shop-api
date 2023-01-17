import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async findAll() {
    const cars = await this.service.findAll();
    return this.res.status(200).json(cars);
  }

  public async findById() {
    const { id } = this.req.params;
    const car = await this.service.findById(id);
    return this.res.status(200).json(car);
  }

  public async register() {
    const car: ICar = this.req.body;
    const newCar = await this.service.register(car);
    return this.res.status(201).json(newCar);
  }
}

export default CarController;