'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debugEs;


// will spit out es state
function debugEs(esClient, index) {
  return esClient.search({ index: index + '-*' }).then(function f(r) {
    console.log('INDEX CONTENTS', JSON.stringify(r, undefined, 2));
    return true;
  });
}
module.exports = exports['default'];