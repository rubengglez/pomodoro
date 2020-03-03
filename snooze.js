async function setSnooze() {
    return new Promise(resolve => {
        // const options = {
        //   // host: 'slack.com',
        //   // port: 443,
        //   // path: '/api/dnd.endSnooze',
        //   url: 'https://slack.com/api/dnd.endSnooze',
        //   method: 'POST',
        //   headers: {
        //     "Content-type": "application/x-www-form-urlencoded"
        //   }
        // };
        var querystring = require("querystring");

        const postData = querystring.stringify({
            'token': ''
        })
        const options = {
            host: 'slack.com',
            port: 443,
            path: '/api/dnd.endSnooze',
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },

        };
        const res = https.request(options, (res) => {
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);
            res.setEncoding('utf8')
            res.on('data', (d) => {
                console.log('>>>>>>>>>>>> ', d);
            });
            res.on('end', resolve);
        })

        res.on('error', (data) => console.error('<<<<<<<<<', data))

        res.write(postData);
        res.end();
    });
}