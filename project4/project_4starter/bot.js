require('dotenv').config()

const m = require('masto')

const masto = m.createRestAPIClient({
    url: 'https://networked-media.itp.io/',
    accessToken: process.env.TOKEN,
});

async function makeStatus(text) {
    const status = await masto.v1.statuses.create({
        status: text,
        // TODO: change visability to public when project ready to run
        visibility: ' public',
    });
}

// classmates
let classmates = ['Caitlyn', 'Elena', 'Anna', 'Jennifer', 'Mike', 'Tommy', 'Lisa', 'Lam', 'Alessandra', 'Wing Huen', 'May', 'Weixuan', 'Anita', 'Kiki','yatong']

let count = 0
setInterval(async () => {
    
    count = count + 1

    if (count > 24) {
        count = 1
    }

    if (count > 16) {
        console.log('sleeping... zzz ' + count)
        return
    }
    let url = 'http://localhost:6003/get-data';

    let response = await fetch(url)
    let json = await response.json()

    if (json.length == 0) {
        console.log('no tips yet')
        return
    }

    let randomGood = Math.floor(Math.random()*json.length)
    let randomAvoid = Math.floor(Math.random()*json.length)
    let randomName = Math.floor(Math.random() * classmates.length)

    let post = classmates[randomName] + ", here's your lucky tip for today 🍀\nToday you can try: " + json[randomGood].good + "\nToday you better not: " + json[randomAvoid].avoid
  
    console.log(post)
    makeStatus(post);

    // TODO: CHANGE 5000ms TO YOUR SPECIFIC INTERVAL
},60 * 60 * 1000);
