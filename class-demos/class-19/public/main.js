// this javascript will go inside of the makeStatus function in your bot
// your partner will make a request to http://your-ip-address:6001/get-data

// when we are testing it on our own machine, we use http://localhost:6001/get-data
async function getData(){
    // the only difference is the url
    let url = 'http://localhost:6001/get-data';
    let response = await fetch(url)
    let json = await response.json()
    // what do you want to do with your partner's data
    // it will use the json variable for any manipulation
    console.log(json)
}
// call the getData() inside of the mixdata function
getData()
{/* <script src ="main.js"></request> */}