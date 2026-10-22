
// all of the library that we are importing
// npm install express nunjucks 
const express = require("express");
const nunjucks = require("nunjucks");


const app = express();
// app is the express server that use express library folder.
// all css and front-end js will go in public folder
// there are all SETTINGS
// all asset need to go to the public file
app.use(express.static("public"));
// allows us to use the request.body
// app.use is the middleware
// if we have app.post,we NEED this line
// allow to use the request.body
app.use(express.urlencoded({ extended: true }));

/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool
 ************/

// more setting to set up our njk file
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");
// ***************************** new change
// store data on our server using an array variable
let allDate = []
// display all my data on my array
app.get('/view-all',(request,response)=>{
  // optional second param in response.render: data from the server
  // it is always the object
response.render('view-all.njk',{messageArrayFromServer: allData})
})

// response.render always goes inside an app.get or app.post
app.get('/', (request, response)=>{
  //  regular home page rendering 
    response.render('home.njk')
})


// for every new njk file, we need the new app.get
app.get('/form',(request,response)=>{
  response.render('form.njk')
})
app.post('/send-message',(request,response)=>{

  // this action will handle
  // 1 1 storing the data from the form on the server in the data array
  // console.log(request.body)
  // 2. redirect to where we want the data to be displayed
  allData.push(request.body)
  response.redirect('')

})
// always goes last
// start our server to run
// app.listen is nor listening the 
app.listen(8080, ()=>{
 

    console.log('http://localhost:8080')
})