var express = require('express'),
  helmet = require('helmet'),
  notifier = require('node-notifier'),
  fs = require('fs');

var app = express();

app.use(helmet());
app.use(express.static('public'));

app.get('/characters', function(req, res) {
  fs.readFile('characters.json', 'utf8', function(err, data) {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

var server = app.listen(3000, function() {
  var host = server.address().address,
    port = server.address().port;

  var title = "Starwars app started ",
    msg = "http://" + host + ":" + port;

  notifier.notify({
    title: 'My awesome title',
    message: 'Hello from node, Mr. User!',
    icon: 'assets/death-star.png', // absolute path (not balloons)
    sound: true, // Only Notification Center or Windows Toasters
    wait: false // wait with callback until user action is taken on notification
  }, function(err, response) {
    // response is response from notification
  });
  console.log(title + msg);
});

// notifier.on('click', function (notifierObject, options) {
//   // Happens if `wait: true` and user clicks notification
// });
