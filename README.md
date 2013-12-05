appcache-node
=============
   
###Let their browsers do the work

This module auto-generates your HTML5 Application Cache manifest, making it very easy to implement.  For any NodeJS web server.  This makes for massive decrease on your server load.  

## Please send bug reports (issues), they will be fixed.

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
var cf = c.newCache([]);
````

Add additional JS, CSS, etc in the page to cache.    

Currently if your HTML has references to JS and CSS hosted on different servers
(such as JQuery hosted on a CDN), you should include them here..

````
var cf = c.newCache(
  [
	'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
	, 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'
  ]
);
````

Then for your server to serve the cache file (in your request handler)

NodeJS
````
require('http').createServer(function(req, res){
if(r.url.match(/app\.cache$/)){
	res.writeHead(200, {'Content-Type': 'text/cache-manifest'});
	return res.end(cf);
}
````

Express
````
var app = express();
app.all('/app.cache', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/cache-manifest'});
    res.end(cf);
})
````

When you restart your app, the app.cache is cleared and rebuilt.    

Here's a trick to have the cache reset every hour, if you want browsers to have to reload periodically.
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
