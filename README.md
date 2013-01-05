appcache-node
=============

###Why don't more people use HTML5 application cache?

Why! Why! Why!

This is for easy use in Express.  The potential performance gain is pretty ridicuous.

In each HTML page you need to cache..
````
<html manifest="app.cache">
````

Other files to cache in your app.js
````
require('./appcache.js')({files: [
	// no need to include html files that start with <html manifest="app.cache">
	'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
	, 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'

]}, app)
````

No cache.manifest (called app.cache here) file needed.  It's served from memory by Express.
Cache resets upon app restart.

$ node app.js

###app.js
````
var express = require('express'), app = express();
app.listen(3000);
console.log('listening on 3000')

require('./appcache.js')({files: [
	// no need to include html files that start with <html manifest="app.cache">
	'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
	, 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'

]}, app)

app.all('/index.html', function(r, s){
		s.sendfile('index.html')
})
````

###index.html
````
<html manifest="app.cache">

<head>
	<title>HTML 5 App cache example</title>
	<link href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css" rel="stylesheet">
	<script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js">
	</script>
</head>
<body>
	<h1>I am cached!</h1>

	<h3>Save 140kb, caching Bootstrap</h3>

	<h5>View cache in Chrome -- chrome://appcache-internals/
</body>
````
