appcache-node
=============

###Why don't more people use HTML5 application cache?

Why! Why! Why! 

Big performance increase, reduced load on yr servers.
This is for Nodejs & Express.  Only two lines needed. Let their browsers do the work!

####In any HTML page you wish to cache..
````
<html manifest="app.cache">
````

####In the app.js..
````
require('appcache-node')({files: []}, app)
````

Browser now caches your page in the HTML5 app cache.  You control other links in the page to cache like so..
````
require('appcache-node')({files: [
	// no need to include html files that start with <html manifest="app.cache">
	'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
	, 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'
]}, app)
````

No messing with a cache manifest on the server. /app.cache is in memory and automatically served by Express.
Kids on the net say to improve performance, use a CDN!  So 2012.

When you restart your app, the app.cache is rebuilt and so cache cleared.
