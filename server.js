const stockData = require('./stock.json');
const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '843339',
  key: '0e86220ab0d1dda9ba3e',
  secret: '0ddbda89ca51656bb13',
  cluster: 'us2',
  encrypted: true
});

let i = 0;
setInterval(() => {
  // const NDAQ = stockData[0]['Trades'][i];
  const GOOG = stockData[1]['Trades'][i];
  pusher.trigger('trade', 'stock', GOOG);
  i++
}, 2000);
