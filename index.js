/**
 * fis.baidu.com
 */

var cssgrace = require('cssgrace');
module.exports = function (content, file, settings) {
  return cssgrace.pack(content, settings);
};
