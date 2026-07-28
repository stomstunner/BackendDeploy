const express = require('express');
// here we just import the express module from the dependencies we installed in the previous step. This module is used to create a web server and handle HTTP requests and responses.


const app = express()
// and here the app varibale is initilized with the express function 
const port = 3000
// in computer we have nearly 65535 ports avaliable for use  and we can use any of them to run our web server. Here we are using port 3000 for our web server. we can use the 5000 port also 



app.get('/', (req, res) => {
  res.send('Hello World!')
})
// so we know ki hamare pass app varable me express function hai jiki help se ham get request ko handle kar sakte hai. Yaha pe hamne '/' route ke liye ek get request handle kiya hai. Jab bhi koi user hamare server ke root url pe request karega to ye function execute hoga aur 'Hello World!' message return karega.
// jab bhi ham home pe rahenge toh ham ek callback function me ager hamraa home se kuch request jata hai toh ham uska response den karenge

app.get('/twitter', (req, res)=> {
    res.send("Hello Twitter")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})