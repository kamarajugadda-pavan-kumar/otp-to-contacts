// importing data
const data = require("../../../contacts.json");

// import mongoose model of messages
const Message = require("../../models/message");

// ----------------------------------------------
// function to generate random OTP
// ----------------------------------------------
function generateOTP() {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

// ----------------------------------------------
// pageController returns an object
// The returned object has key "home","contacts","messages","contactInfo","sendOTP".
// home , render the home page
// contacts, renders the contacts page by reading the contacts.json file in the root folder
// messages, renders the messages page by calling the past messages from the data base
// contactInfo, renders the page with individual contact and the option to send an OTP to the contact
// sendOTP page rebders a page with name and message(editable, prefilled with a OTP message). Send button sends the message
// ----------------------------------------------
function pageController() {
  return {
    home: function (req, res) {
      res.render("home");
    },
    contacts: function (req, res) {
      res.render("contacts", { data: data.contacts });
    },
    messages: async function (req, res) {
      let messages = await Message.find().sort({ createdAt: -1 });
      res.render("messages", { data: messages });
    },
    contactInfo: function (req, res) {
      res.render("contactInfo", {
        phoneNumber: req.params.phoneNumber,
        data: data.contacts,
      });
    },
    sendOTP: function (req, res) {
      res.render("sendOTP", {
        firstname: req.params.firstname,
        phoneNumber: req.params.phoneNumber,
        otp: generateOTP(),
      });
    },
  };
}

module.exports = pageController;
