const newman = require('newman');
 
newman.run({
    // collection:require('./collection/dmoney.json'),
     collection:('https://api.postman.com/collections/27579717-757509bf-d20f-4970-8c1d-03811f2e2067?access_key=PMAT-01H1ZYCS1J1WD8S3MS73N9SK6N'),
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});