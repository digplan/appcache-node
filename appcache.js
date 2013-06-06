module.exports = function(options, app){
        options = options || {};
        var lines = options.files || [],
            path = options.path || 'app.cache';

        lines.unshift('CACHE MANIFEST', '', 'CACHE:');
        lines.push('', '# ' + new Date());
        app.cachefile = lines.join('\r\n');

        app.all('/'+path, function(r, s){
            s.writeHead(200, {
                'Content-Type': 'text/cache-manifest'
            });
            s.end(app.cachefile);
        });
}
