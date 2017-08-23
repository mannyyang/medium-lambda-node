const axios = require("axios"); // Include the axios lib - run npm install axios
exports.handler = function(event, context) {
    // TODO: pass username as an argument
    const username = 'mannyyang';
    return axios.get(`https://medium.com/@${username}/latest?format=json`);
};