const axios = require("axios"); // Include the axios lib - run npm install axios
exports.handler = (event, context, callback) => {
    // TODO: pass username as an argument
    const username = 'mannyyang';
    return axios.get(`https://medium.com/@${username}/latest?format=json`)
        .then(response => {
            callback(null, JSON.parse(response.data.replace('])}while(1);</x>', '')));
        })
        .catch(err => {
            callback(err);
        });
};