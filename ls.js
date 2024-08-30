const fs = require('fs')

const lsCmd = (done) => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err
    } else {
      done(files.join('\n'))
    }
  })
}

module.exports = lsCmd
