var elasticConfig = require('../config.json');

var elasticsearch = require('elasticsearch');
// "elasticUrl": "http://elastic:elastic@127.0.0.1:9200/elasticsearch/"


var client = new elasticsearch.Client({
  host: elasticConfig.elasticUrl,
  // log: 'trace'
});

client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: 3000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('Elasticsearch connected');
  }
}); 


module.exports = client;