
// importing the express library to use it as our server
// naming conventions usually name the variable the library name
const express = require('express');
// initialize our application using express
const app = express();
// "middleware"
// this is settings that our app needs to know about our server

// allows us to access front-end with GET requests by default
// serve our front-end html that exists in the public folder
app.use(express.static("public"));
// allows us to access the body of the post request 
app.use(express.urlencoded({ extended: true }));
// those 4 are the default line

// routes
//syntax for get, app.get(route,anonymous function)
app.get('/',(request,response)=>{
    console.log("received a request at / route!")
    // we always need to have a response, otherwise the page will continuously load
    response.send('this is <em>some</em> data!!!')
})
// similar to document.addEventListener("eventName"(e)=>{})
// response will contains all of the information we send back from the server to the client 


// GET/ first-server,callback function
app.get('/first-server',(request, response)=>{
    // send the info to the client that makes a request to /first-server
    response.send('this is my first server')
})
// call back function
// to start our server:node server.js in terminal 
app.listen(8080,()=>{
    console.log('started or restarted the server')
    console.log('http://127.0.0.1:8000')
})

app.post('/form-upload', (request, response)=>{
    // request.body 
    console.log(request.body)
    // send the client to a different route
    reponse.redirect('/')
})

// terminal conmmand notes inside class 4 
// if run to modelus not fund, it means miss the package, canot find serverjs 

//