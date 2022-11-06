import axios from "axios";
const myForm = document.getElementById("myform");

myForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let phonenumber = document.getElementById("phonenumber").value;
  let message = document.getElementById("msg").value;
  let firstname = document.getElementById("firstname").innerText;
  let res = await axios.post("/sendOTP", { phonenumber, message, firstname });
  console.log(res);
  if (res.status === 200) {
    alert("otp sent successfully");
    window.location = "/contacts";
  } else {
    alert("something went wrong");
  }
});
