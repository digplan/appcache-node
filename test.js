
var c = require('./appcache.js');

// generate a cache file
var cf = c.newCache([
	// no need to include html files that start with <html manifest="app.cache">
	'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
	, 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'
]);

// optional - invalidate and reload the cache every 1 hour
setInterval(function(){
	cf = c.newCache([
	'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
	, 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'
	])
}, 1000*60*60);

// start server
require('http').createServer(function(r, s){
	if(r.url.match(/app\.cache$/)){
		s.writeHead(200, {'Content-Type': 'text/cache-manifest'});
		return s.end(cf);
	}

	var duri = '<img src="' + c.toDataURI('./epic.png') + '"/>';
	s.end('<html manifest="app.cache">\
			<head>\
				<title>HTML 5 App cache example</title>\
					<link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css" rel="stylesheet">\
					<script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js"></script>\
			</head>\
			<body>\
				<h1>I am cached!</h1>\
				<h3>Save 140kb, caching Bootstrap</h3>\
				<h3><a target=_ href="app.cache">View cache file</a></h3>\
				<h5>View cache in Chrome -- chrome://appcache-internals/\
				Also, a data-url function (not required to do this to images)..<br>\
				'+duri+'</body>');
}).listen(8080);
