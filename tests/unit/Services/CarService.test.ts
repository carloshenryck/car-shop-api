import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';

describe('Car service', function () {
  it('Should register a car', async function () {
    const carInput = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput = { ...carInput, id: '633ec9fa3df977e30e993492' };

    sinon.stub(Model, 'create').resolves(carOutput);
    const carService = new CarService();
    const result = await carService.register(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Should find all cars', async function () {
    const carOutput = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'find').resolves([carOutput]);
    const carService = new CarService();
    const result = await carService.findAll();

    expect(result).to.be.deep.equal([carOutput]);
  });
});