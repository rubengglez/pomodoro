const https = require('https');
var querystring = require("querystring");

const postData = querystring.stringify({
    'token': 'xoxp-947427472848-947427474208-953406020726-30d521c3c4389899b09b596500ddbf5d'
});

const options = {
    host: 'slack.com',
    port: 443,
    path: '/api/dnd.endSnooze',
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
    },

};

// const google = {
// }
const res = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    res.setEncoding('utf8')

    res.on('data', (d) => {
        console.log('>>>>>>>>>>>> ', d);
    });
    res.on('end', () => console.log('finished'));


})


res.on('error', console.log)

res.write(postData);
res.end();