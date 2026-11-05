let express = require('express')
let nedb = require('@seald-io/nedb')

// set up variable
let app = express(

)
let database = new nedb({
    filename:"mydatabase.db",
    autoload: true})
    // set up my server 
    app.use(express.static('public'))
    app.use(express.urlencoded({extended:true}))

    app.get('/',(request,response)=>{
        response.send("server is working")
    })

    app.post('/add-data',(request,response)=>{
        console.log(request.body)
        let dataToBeAdded = {
            messag:request.body.newMessage,
            timestamp: Date.now()
        }
        // add to the database
        database.insert(dataToBeAdded,(error,newData)=>{
            console.log(error)
            return;
            if (error){

            }else{
            console.log(newData)
            response.send('data add successfully ')
            }
     } )
    })

    app.get('/get-data',(request,response)=>{
        // query is how we ask for the data from db
        // empty query object will give everything
        let query ={}
        database.find(query,(error,retrievedData)=>{
            console.log(retrievedData)
            response.json(retrievedData)
        })
    }
    
    )
    app.listen(6001,()=>{
        console.log('server is running on http://localhost:6001')
    })

