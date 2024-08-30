const request = require('request')

const curlCmd = urlStr => {
  request(urlStr, (err, response, body) => {
    if (err) throw err;
    process.stdout.write('\n')
    process.stdout.write(body)
    process.stdout.write("\nprompt > ")
  });
}

module.exports = curlCmd
