import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
  UpdateQuery, 
} from 'mongoose';
import { UnprocessableEntity } from '../Interfaces/errors';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async findAll() {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new UnprocessableEntity('Invalid mongo id');
    return this.model.findById(id);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async updateById(_id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new UnprocessableEntity('Invalid mongo id');
    
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default AbstractODM;