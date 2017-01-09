'use strict';
module.exports = () => {
	if (require('is-browser')) {
		// SO#2387136
		const h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
		return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
	} else {
		console.log('Browser only module.');
		process.exit(1);
	}
};