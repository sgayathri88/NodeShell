const fs = require('fs')

const catCmd = (done, fileName) => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    done(data)
  });
}

module.exports = catCmd
