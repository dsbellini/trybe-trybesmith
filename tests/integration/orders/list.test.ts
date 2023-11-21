import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import orderMock from '../../mocks/orderMock';
import OrderModel from '../../../src/database/models/order.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('deve retornar todos os pedidos', async function () {
    const mockOrderData = orderMock.orderResponse;

    const httpResponse = await chai.request(app).get('/orders');

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal(mockOrderData);
  });

});
