// import controllers
const pageController = require("../app/http/controllers/pageControllers")();

const webRoutes = (app) => {
  // home page
  app.get("/", pageController.home);
  app.get("/messages", pageController.messages);
  app.get("/contacts", pageController.contacts);
  app.get("/contacts/details/:phoneNumber", pageController.contactInfo);
  app.get("/send-otp/:phoneNumber/:firstname", pageController.sendOTP);
};

module.exports = webRoutes;
