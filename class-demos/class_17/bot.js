// imports env variables so we dont put passwords in js files
require ('dotenv').config();
const m= require('masto');

// url: our masrodon server
// token: password to our account
const masto = m.createRestAPIClient({
	url: 'https://networked-media.itp.io/',
	accessToken: process.env.TOKEN,
});

// function to make a request to mastodon server
async function makeStatus(text) {
    // await ensures that it creates a status before we do anything else to the code
	const status = await masto.v1.statuses.create({
		status: text,
        // change visibikity to public if the project is ready
		visibility: 'private',
	});
}

setInterval(() => {
    // array of emojis to randomly select from
	let emoji = ['🐶', '🫶', '🐾'];

    // random number generator to select a random emoji from the array
	let rand = Math.floor(Math.random() * emoji.length);

    // selects a random emoji from the array
	let post = emoji[rand];

    // make a status from the emoji selected
	makeStatus(post);
}, 5000);