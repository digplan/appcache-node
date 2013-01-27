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
], app)
````

No messing with a cache manifest on the server.  Use a CDN, eh?  That's so 2012.
/app.cache  is in memory and automatically served by Express.

Just restart your app to invalidate the cache. Browsers will now load the page again.

#### Now for the 'Network' tab
