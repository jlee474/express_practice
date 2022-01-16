const express = require('express');
const cookieParser = require('cookie-parser')

// express() creates an 'express application'. 
const app = express(); 


// middleware for parsing http payloads
   // middleware for parsing application/json 
// app.use(express.json());
   //middleware for parsing application/x-www-form-urlencoded   use for parsing request body 
app.use(express.urlencoded({extended: true}));

app.use(cookieParser())

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
   // somehow the code knows which file to look for ./views/index.pug file 
app.get('/', ( req, res) => {
   let name = req.cookies.username
   
   if (name === undefined) {
      res.redirect('/hello')
   } else {
      res.render('index', {name : name}) // or simply {name} as the shorthand
   }
})

app.get('/test', (req, res) => {
   // the .send() method sends a STRING to the client
   res.render('test', {colors})
})

app.get('/hello', (req, res) => {
   // if req.cookies.username is not defined, it gives the value of undefined
   if (req.cookies.username) {
      console.log(` Looks like you already have a name stored in your cookies, defined as ${req.cookies.username}`)
      res.redirect('/')
   } else {
      res.render('hello')
   }
})

app.post('/hello', (req, res) => {
   // console.log(req.body)
   
   // res.cookie() method STORES the cookie into the user's browser
   res.cookie('username', req.body.username)
   res.redirect('/')
})

app.get('/card', (req, res) => {
   
      // An alternate way to set prompt variable, instead of passing in the object to the .render() method 
      // https://teamtreehouse.com/community/resrender-passing-in-object-vs-resrenderlocals-variables
   // res.locals.prompt = "Who is buried in Grant's tomb?"
   res.render('card', {prompt: "Who is buried in Grant's tomb?", colors})
})

app.post('/goodbye', (req, res) => {
   res.clearCookie('username')
   res.redirect('/hello')
})



// sets up a 'development server' using the listen method. 3000 is the port number
app.listen(3000, () => {
   console.log(" Jason, your server is live at localhost:3000")
}); 




// Note: When client/user refreshes the browser after submitting form data, it re-submits the form data ...
   // ... in this case the POST request. Whereas hitting enter on the URL will submit a GET request.
   // In other words, as the user, hitting refresh vs enter on the URL is handled differently.