

// will spit out es state
export default function debugEs(esClient, index) {
  return esClient.search({ index: `${index}-*` })
    .then(function f(r) {
      console.log('INDEX CONTENTS', JSON.stringify(r, undefined, 2));
      return true;
    });
}
