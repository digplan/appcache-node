module.exports = function(options, app){

    options.files.unshift('CACHE MANIFEST', '', 'CACHE:')
    options.files.push('', '# ' + new Date())

    app.all('/app.cache', function(r, s){
        s.writeHead(200, {
              'Content-Type': 'text/cache-manifest'
        })
        s.end(options.files.join('\r\n'))
    })

}