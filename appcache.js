function appcache(options, app){
    function setit(){
        var lines = options.files, path = (options && options.path) || 'app.cache';
        lines.unshift('CACHE MANIFEST', '', 'CACHE:')
        options.files.push('', '# ' + new Date())
        app.all(path, function(r, s){
            s.writeHead(200, {
                  'Content-Type': 'text/cache-manifest'
            })
            s.end(options.files.join('\r\n'))
        })
    }  setit()
    
    if('reset' in options) setInterval(setit, options.reset)
}

if(module && module.parent && module.exports) module.exports = appcache;
