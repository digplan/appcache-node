module.exports = {
    newCache: function(files){
        files.unshift('CACHE MANIFEST', '', 'CACHE:');
        files.push('', '# ' + new Date());
        return files.join('\r\n');
    },
    toDataURI: function(fn){
        return 'data:image/' + fn.match(/..\.(.*)$/)[1] + ';base64,' + 
            require('fs').readFileSync('./epic.png').toString('base64');
    }
}
