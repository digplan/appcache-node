appcache-node
=============
   
###Let their browsers do the work
  
####In any HTML page you wish to cache..
````  
<html manifest="app.cache"> 
````

####In the NodeJS/Express app.js..
````
require('appcache-node')({files: []}, app)
````

Server generates an app.cache file, so browsers will pull their local copy. Your html file is saved in the cache.    
To save embedded JS and CSS in the cache, use the files array..
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
Use an altername path for the cache..  http://localhost:3000/myname.cache
````
require('appcache-node')({path: 'myname.cache'},app);
````

####Tests
````
$ node tests-server
````
Go to http://localhost:3000
http://localhost:3000/app.cache to see raw cache file.

More about the HTML5 Application Cache:    
http://www.w3schools.com/html/html5_app_cache.asp