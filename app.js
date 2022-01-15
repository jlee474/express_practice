const express = require('express');
// const message = require('./message.js')

// express() creates an 'express application'. 
const app = express(); 

const colors = [
   'red',
   'orange',
   'yellow',
   'green',
   'blue',
   'purple',
];

//  to set the pug template i guess?
app.set('view engine', 'pug');


// the get() method is used to handle get requests to a certain URL. The '/' is the root route or location param.
app.get('/', ( req, res) => {

   // somehow the code knows which file to look for ./views/index.pug file 
   res.render('index')
})

app.get('/hello', (req, res) => {
   // the .send() method sends a STRING to the client
   res.render('hello', {colors})
})

app.get('/card', (req, res) => {
   
      // An alternate way to set prompt variable, instead of passing in the object to the .render() method 
      // https://teamtreehouse.com/community/resrender-passing-in-object-vs-resrenderlocals-variables
   // res.locals.prompt = "Who is buried in Grant's tomb?"
   res.render('card', {prompt: "Who is buried in Grant's tomb?", colors})
})


// sets up a 'development server' using the listen method. 3000 is the port number
app.listen(3000, () => {
   console.log(" Jason, your server is live at localhost:3000")
}); 

