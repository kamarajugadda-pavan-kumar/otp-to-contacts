Directory structure

<!  ------------------------------------
    Technologies used to bulid this app
    Node.js 
    Express.js 
    EJS templating
    MongoDb,mongoose
    Tailwind css
    Laravel Mix
    Fast2SMS (3rd party API used to send sms)
------------------------------------------>


<-----------------------------------------
Npm packages and their versions
    "axios": "^1.1.3",
    "ejs": "^3.1.8",
    "express": "^4.18.2",
    "express-ejs-layouts": "^2.5.1",
    "mongoose": "^6.7.1",
    "twilio": "^3.83.1"
    "laravel-mix": "^6.0.49",
    "nodemon": "^2.0.20",
    "resolve-url-loader": "^5.0.0",
    "sass": "^1.56.0",
    "sass-loader": "^12.6.0"
--------------------------------------------->


<------------------------------------------
The EJS templating is good if the application is small and contains only a few pages.
But as the application grows it better to pull apart the front end functionality and use frameworks such as 
react.js or angular for better optimization and code maintainability
---------------------------------------------->

<! the Application is developed based on the MVC(Models, controller, views) design pattern. 
    That allows scalability and maintanability of code>

<!-- app folder consistists of configuration for the app, models , controllers--->
[+]app
    [+]config
    [+]http
        [+]controllers
            [.]otpController.js
            [.]pageControllers.js
        [+]middlewares
    [+]models  
        [.]message.js

<! node_modules contains all the supporting packages installed from npm repository>
[+]node_modules

<! public folder will be accessible by the client, it consits of all the css, images , js>
[+]public
    [+]css
        [.]app.css
    [+]imgs
        [.]otp-icon.png
    [+]js
        [.]app.js 

<!  EJS templating is used to create views and scss, tailwind css is used to syle>
[+]resources
    [+]js 
        [+]app.js
    [+]scss
        [.]_variables.scss 
        [.]app.scss
    [+]views
        [.]contactInfo.ejs
        [.]contacts.ejs
        [.]home.ejs 
        [.]layout.ejs 
        [.]messages.ejs 
        [.]sendOTP.ejs
        [.]404.ejs

<! all the routes created in this express app is divided into two parts . one that renders EJS file(web.js) and other gives data response(api.js) >
[+]routes
    [.]api.js 
    [.]web.js 