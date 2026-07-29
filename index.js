require("dotenv").config()

const express = require('express');
// here we just import the express module from the dependencies we installed in the previous step. This module is used to create a web server and handle HTTP requests and responses.


const app = express()
// and here the app varibale is initilized with the express function 
const port = process.env.PORT || 8000
// in computer we have nearly 65535 ports avaliable for use  and we can use any of them to run our web server. Here we are using port 3000 for our web server. we can use the 5000 port also 



// app.get('/', (req, res) => {
//   res.send(`Bhai Koi bhi link pe click nahi karna chaiye `)
// })

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>BackendDeploy</title>
      <style>
        body{
          margin:0;
          display:flex;
          justify-content:center;
          align-items:center;
          height:100vh;
          background:linear-gradient(135deg,#1e3c72,#2a5298);
          font-family:Arial,sans-serif;
          color:white;
        }

        .card{
          background:rgba(255,255,255,0.12);
          padding:40px;
          border-radius:20px;
          text-align:center;
          backdrop-filter:blur(10px);
          box-shadow:0 10px 30px rgba(0,0,0,0.3);
        }

        h1{
          margin-bottom:10px;
          font-size:38px;
        }

        p{
          font-size:20px;
          color:#ddd;
        }

        .warning{
          color:#ffcc00;
          font-weight:bold;
          margin-top:20px;
        }
      </style>
    </head>

    <body>
      <div class="card">
        <h1>🚀 Express Server is Live</h1>
        <p>Congratulations! Your backend is deployed successfully.</p>

        <p class="warning">
          ⚠️ Bhai, koi bhi unknown link par click mat karna.
        </p>
      </div>
    </body>
    </html>
  `);
});

// so we know ki hamare pass app varable me express function hai jiki help se ham get request ko handle kar sakte hai. Yaha pe hamne '/' route ke liye ek get request handle kiya hai. Jab bhi koi user hamare server ke root url pe request karega to ye function execute hoga aur 'Hello World!' message return karega.
// jab bhi ham home pe rahenge toh ham ek callback function me ager hamraa home se kuch request jata hai toh ham uska response den karenge

app.get('/twitter', (req, res)=> {
    res.send("Hello Twitter")
})

// lets make a another route for login where we display a h1 tag with the text 'Login Page'

app.get('/login',(request, response)=>{
    response.send("<h1 style = background:red;>Login Page</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// now we use the listen method of the app variable to start the web server and listen for incoming requests on the specified port. The callback function is executed when the server is successfully started and listening for requests. In this case, it logs a message to the console indicating that the server is running and listening on the specified port.