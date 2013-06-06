appcache-node
=============
   
###Let their browsers do the work

This module auto-generates your HTML5 Application Cache manifest, making it very easy to implement.

####Installation
````
$ npm install appcache-node
--OR--
$ git clone https://github.com/dpweb/appcache-node
````
####In any HTML page you wish to cache..
````  
<html manifest="app.cache"> 
````

####In the NodeJS/Express app.js..
````
require('appcache-node')({files: []}, app)
````

Server generates an app.cache file, so HTML5 Application Cache will force browsers to load their local copy.    
This makes for massive decrease on your server load.    

Any html file served from your site declared with 
````
<html manifest="app.cache"> 
````
will be cached.  You can see the entire app cache in Chrome by going to chrome://appcache-internals    

You choose whatever JS and CSS your page uses, to cache as well.  Use the files array..
````
require('appcache-node')({files: [
	'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
	, 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'
]}, app)
````

When you restart your app, the app.cache is rebuilt and so cache cleared.  
or here's a trick to have the cache reset every hour, if you want browsers to have to reload periodically.
````
function docache(){
	require('./appcache.js')({files: [
			// no need to include html files that start with <html manifest="app.cache">
			'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css'
			, 'http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'
	]}, app);
}

docache();
setInterval(docache, 1000*60*60);
````

####Options
Use an alternate name for the cache file..  http://localhost:3000/myname.cache
````
require('appcache-node')({path: 'myname.cache'}, app);
````

####Tests
A test web server and example is included in this directory.
````
$ node tests-server
````
Go to http://localhost:3000    
http://localhost:3000/app.cache to see raw cache file.    

More about the HTML5 Application Cache:    
http://www.w3schools.com/html/html5_app_cache.asp
