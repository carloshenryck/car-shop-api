import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(Obj: IVehicle) {
    this.id = Obj.id;
    this.model = Obj.model;
    this.year = Obj.year;
    this.color = Obj.color;
    this.status = Obj.status || false;
    this.buyValue = Obj.buyValue;
  }
}