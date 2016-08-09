var urlExists = require('url-exists');

urlExists('https://twitter.com/latterization', function(err, exists) {
    console.log(exists);
});
