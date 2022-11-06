const otpController = require("../app/http/controllers/otpController")();

const apiRoutes = (app) => {
  app.post("/sendOTP", otpController.sendOtp);
};

module.exports = apiRoutes;
