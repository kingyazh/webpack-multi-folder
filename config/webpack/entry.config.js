const path = require('path');
const fs = require('fs');
const configEntry = {};
// const appPath = path.join(__dirname, 'src');
var dirVars = require('../entry/dir-vars.config.js');
var pageArr = require('../entry/page-entries.config.js');
console.log('dirVars',dirVars)
console.log('pageArr',pageArr)
pageArr.forEach((page) => {
  console.log(page)
  configEntry[page] = path.resolve(dirVars.pagesDir, page + '/page');
});
console.log(configEntry)
module.exports = configEntry;
