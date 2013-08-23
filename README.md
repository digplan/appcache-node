appcache-node
=============
   
###Let their browsers do the work

This module auto-generates your HTML5 Application Cache manifest, making it very easy to implement.  In Node.JS, but for any web server. This makes for massive decrease on your server load.  

###Installation
````
$ npm install appcache-node
````

Any HTML page with this will cache
````  
<html manifest="app.cache"> 
````

In your app
````
var c = require('appcache-node');

// generate a cache file
var cf = c.newCache();

// in your request handler
if(r.url.match(/app\.cache$/)){
	s.writeHead(200, {'Content-Type': 'text/cache-manifest'});
	return s.end(cf);
}
````

While your HTML page caches automatically, you specify any JS, CSS, IMG, etc.. your page uses, so you have full control over which files are included in the cache.
````
var c = require('appcache-node')([
	'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
	, 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'
]);
````

When you restart your app, the app.cache is rebuilt and so cache is cleared.  
or here's a trick to have the cache reset every hour, if you want browsers to have to reload periodically.
````
// generate a cache file
var cf = c.newCache([
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
````

###toDataURI(filename)
A helper function is included, to convert images to data-uris, thereby embedding them into the HTML page, although this is not required to use the appcache.
````
var c = require('./appcache.js');
var duri = '<img src="' + c.toDataURI('./epic.png') + '"/>';
	==> "<img src='data:image/png;base64,iVBORw0KGgo...'/>"
````

###Test
Run test.js to run an example web server.

More about the HTML5 Application Cache:    
http://www.w3schools.com/html/html5_app_cache.asp
