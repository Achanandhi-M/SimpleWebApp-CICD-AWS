const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

const expect = chai.expect;

describe('Route 1 API', () => {
  it('should return "This is Route 1" on /route1', (done) => {
    chai.request(app)
      .get('/route1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('This is Route 1');
        done();
      });
  });
});
