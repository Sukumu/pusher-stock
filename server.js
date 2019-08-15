const stockData = require('./stock.json');
const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '843339', //'APP_ID',
  key: '0e86220ab0d1dda9ba3e', //'APP_KEY',
  secret: '0ddbda89ca51656bb139', //'APP_SECRET',
  cluster: 'us2', //'APP_CLUSTER',
  encrypted: true
});

let i = 0;
setInterval(() => {
  // const NDAQ = stockData[0]['Trades'][i];
  const GOOG = stockData[1]['Trades'][i];
  pusher.trigger('trade', 'stock', GOOG);
  i++
}, 2000);
