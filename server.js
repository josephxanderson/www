// Node imports
const { createServer } = require('http');
const { parse } = require('url');

// Framework imports
const next = require('next');

const inDevEnvironment = process.env.NODE_ENV !== 'production';

// Create the app and get the request handler.
// This also puts us either in next or next dev mode.
const app = next({ inDevEnvironment });
const handle = app.getRequestHandler();

const port = process.env.PORT || 5000;

app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url, true);

		// If not in Dev environment and not https.
		if ((! inDevEnvironment) && (req.headers['X-Forwarded-Proto'] != 'https')) {
			const { host } = parse(process.env.APP_URL);

			// Redirect http to https.
	  		res.writeHead(302, {
				Location: `https://${host}${req.url}`
			});

			res.end();
		} else {
			// Pass on the request to be handled normally.
			handle(req, res, parsedUrl)
		}
	}).listen(port, err => {
		if (err) {
			throw err
		} else {
			console.log(`>>> Ready on http://localhost:${port}`);
		}
	})
})