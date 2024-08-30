const request = require('request')

const curlCmd = (done, urlStr) => {
  request(urlStr, (err, response, body) => {
    if (err) throw err;
    done(body)
  });
}

module.exports = curlCmd
