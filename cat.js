const fs = require('fs')

const catCmd = fileName => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    process.stdout.write('\n')
    process.stdout.write(data)
    process.stdout.write("\nprompt > ")
  });
}

module.exports = catCmd
