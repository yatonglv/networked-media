
const express = require('express');
const nunjucks = require('nunjucks');


const multer = require('multer')
const uploadProcessor = multer( {dest: 'public/upload/' })

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
nunjucks.configure('views', {
	autoescape: true,
	express: app,
});
app.set('view engine', 'njk');

let allData = [
	{ garment: 'Black dragon qipao',      neighborhood: 'Flushing',     type: 'Swap',        imgSrc: '/images/samples/dragon-qipao.webp' },
	{ garment: 'Purple plaid shirt',      neighborhood: 'Astoria',      type: 'Donate',      imgSrc: '/images/samples/purple-plaid-shirt.webp' },
	{ garment: 'Old jeans into a bag',    neighborhood: 'Fort Greene',  type: 'Remake',      imgSrc: '/images/samples/jeans-to-bag.webp' },
	{ garment: 'T-shirt into a cami',     neighborhood: 'Chelsea',      type: 'Tutorial',    imgSrc: '/images/samples/tee-to-cami.webp' },
	{ garment: 'Blue fur and latex look', neighborhood: 'Bushwick',     type: 'Inspiration', imgSrc: '/images/samples/fur-latex-look.webp' },
	{ garment: 'Feather ear cuff',        neighborhood: 'East Village', type: 'Accessories', imgSrc: '/images/samples/feather-earcuff-worn.webp' },
];

let categories = [
	{ type: 'Swap',        button: '/images/buttons/pink.webp',     cloth: '/images/fabric/plaid-grey.webp' },
	{ type: 'Donate',      button: '/images/buttons/lime.webp',     cloth: '/images/yarn/mohair.webp' },
	{ type: 'Remake',      button: '/images/buttons/redblack.webp', cloth: '/images/fabric/stripe-blue.webp' },
	{ type: 'Tutorial',    button: '/images/buttons/shell.webp',    cloth: '/images/yarn/pastel.webp' },
	{ type: 'Inspiration', button: '/images/buttons/star.webp',     cloth: '/images/yarn/gold.webp' },
	{ type: 'Accessories', button: '/images/buttons/heart.webp',    cloth: '/images/fabric/tartan-red.webp' },
];

app.get('/', (request, response) => {

	let chosenType = request.query.type

	let patchesToShow = []
	for (let patch of allData) {

		if (chosenType == undefined || patch.type == chosenType) {
			patchesToShow.push(patch)
		}
	}
	response.render('home.njk', { patchesFromServer: patchesToShow, chosenType: chosenType, categoriesFromServer: categories });
});

app.get('/form', (request, response)=>{
        response.render('form.njk',{ categoriesFromServer: categories })
})

app.get('/map', (request, response) => {
	response.render('construction.njk', { pageName: 'Map' })
})

app.get('/calendar', (request, response) => {
	response.render('construction.njk', { pageName: 'Calendar' })
})

app.get('/about', (request, response) => {
	response.render('about.njk')
})

app.post(
	'/send-message',
	uploadProcessor.single('theImage'),
	(request, response) => {


		let receivedMessage = request.body

		
		if (request.file) {
			
			receivedMessage.imgSrc = '/upload/' + request.file.filename;
		}
		allData.unshift(receivedMessage);

		response.redirect('/#quilt');
	}
);


app.get('/view-all', (request, response) => {

	response.render('view-all.njk', { messagesArrayFromServer: allData });
});

app.listen(8080, () => {
	console.log('http://localhost:8080');
});