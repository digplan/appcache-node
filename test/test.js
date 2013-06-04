
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
