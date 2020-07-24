let fs = require('fs').promises;

module.exports = async function (context, req) {
    let fileName = "./podcast.rss";
    let fileData = await fs.readFile(fileName);

    context.res = {
        status: 200,
        headers: {
            "content-type": "application/rss+xml;"
        },
        body: fileData
    };

    // if (req.query.name || (req.body && req.body.name)) {
    //     context.res = {
    //         // status: 200, /* Defaults to 200 */
    //         body: "Hello " + (req.query.name || req.body.name)
    //     };
    // }
    // else {
    //     context.res = {
    //         status: 400,
    //         body: "Please pass a name on the query string or in the request body"
    //     };
    // }
};