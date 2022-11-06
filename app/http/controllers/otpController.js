const Message = require("../../models/message");
const axios = require("axios");

// --------------------------------------
// otp controller returns an object
// The returned object has key "sendOtp", which is a function.
// This function is the controller to send OTP to a mobile number and store the msg sent in mogodb collection
// A Third party service called Fast2SMS is used to send the SMS
// --------------------------------------
function otpController() {
  return {
    sendOtp: async function (req, res) {
      console.log(req.body, "this is in body");
      const newMessage = new Message({
        firstname: req.body.firstname,
        phone: req.body.phonenumber,
        message: req.body.message,
      });
      let fast2smsResponse = await axios.post(
        "https://www.fast2sms.com/dev/bulkV2",
        {
          route: "v3",
          sender_id: "FTWSMS",
          message: req.body.message,
          language: "english",
          flash: 0,
          numbers: `${req.body.phonenumber}`,
        },
        {
          headers: {
            authorization:
              "JvI8q2r4Kz7NtElx9sBGFunykUcSAVgWofROYapM6dTHLhim3wYiThV0lLW53HgRqpZFMzKdkc6CAufS",
            "Content-Type": "application/json",
          },
        }
      );

      if (fast2smsResponse.data.return) {
        await newMessage.save();
        res.status(200).json({ msg: "otp sent successfully" });
      } else {
        res.status(204).json({ msg: "something went wrong" });
      }
    },
  };
}

module.exports = otpController;
