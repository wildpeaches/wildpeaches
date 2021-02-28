// https://github.com/11ty/eleventy/issues/1032#issuecomment-602151821
const fs = require('fs');

module.exports = (file, field = 'mtime') => fs.statSync(file)[field];
