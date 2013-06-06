
var express = require('express'), app = express(); app.listen(3000);
console.log('listening on 3000');

function docache(){
	require('./appcache.js')({files: [
			// no need to include html files that start with <html manifest="app.cache">
			'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
			, 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'
	]}, app);
}

docache();
setInterval(docache, 1000*60*60);

app.all('/', function(r, s){
		var resp = '<html manifest="app.cache"><head><title>HTML 5 App cache example</title>';
		resp += '<link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css" rel="stylesheet">';
		resp += '<script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js">';
		resp += '</script></head><body><h1>I am cached!</h1><h3>Save 140kb, caching Bootstrap</h3>';
		resp += '<h5>View cache in Chrome -- chrome://appcache-internals/</body>';
		s.end(resp);
});
