import IVehicle from './IVehicle';

export type MotorcyleCategory = 'Street' | 'Custom' | 'Trail';

export default interface IMotorcycle extends IVehicle{
  category: MotorcyleCategory;
  engineCapacity: number;
}