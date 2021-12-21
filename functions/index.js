// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

let ssrServerServer;
exports.ssrServer = functions.https.onRequest(async (request, response) => {
	if (!ssrServerServer) {
		functions.logger.info('Initialising SvelteKit SSR Handler');
		ssrServerServer = require('./ssrServer/index').default;
		functions.logger.info('SvelteKit SSR Handler initialised!');
	}
	functions.logger.info('Requested resource: ' + request.originalUrl);
	return ssrServerServer(request, response);
});
