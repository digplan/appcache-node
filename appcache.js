module.exports = {
    newCache: function(files){
        return ['CACHE MANIFEST',,'CACHE:'].concat(files).concat([,'# '+Date()]).join('\r\n');
    },
    toDataURI: function(fn){
        return 'data:image/' + fn.match(/..\.(.*)$/)[1] + ';base64,' + 
            require('fs').readFileSync('./epic.png').toString('base64');
    }
}
