module.exports = function(options, app){
    	options = options || {};
    	var lines = (options && options.files) || [], 
        	path = (options && options.path) || 'app.cache';

        lines.unshift('CACHE MANIFEST', '', 'CACHE:')
        lines.push('', '# ' + new Date())
        var file = lines.join('\r\n')

        app.all(path, function(r, s){
            s.writeHead(200, {
                  'Content-Type': 'text/cache-manifest'
            })
            s.end(file)
        })
  		return file;

    	if('reset' in options) setInterval(setit, options.reset)
}
