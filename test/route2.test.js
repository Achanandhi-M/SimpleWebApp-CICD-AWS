const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

const expect = chai.expect;

describe('Route 2 API', () => {
  it('should return "This is Route 2" on /route2', (done) => {
    chai.request(app)
      .get('/route2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('This is Route 2');
        done();
      });
  });
});
