// import chai from "chai";

// import chaiHttp from "chai-http";

// import app from "../../app";

import expect from 'expect.js';

import models from '../src/models/index';

// chai.use(chaiHttp);
// chai.should();
describe("models/index", function() {
  it("returns the user model", function() {
    expect(models.User).to.be.ok();
  });
});
