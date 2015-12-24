var express = require('express'),
  helmet = require('helmet'),
  notifier = require('node-notifier'),
  MongoClient = require('mongodb').MongoClient,
  bodyParser = require('body-parser');
  

var app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

var url = 'mongodb://localhost:27017/default';


MongoClient.connect(url, function(err,db) {
  if(err){
    console.error(err);
    process.exit(1);
  }
  console.log("Connected correctly to mongodb");
  app.get("/characters",function(req, res){
    var collection = db.collection('documents');
    collection.find({}).toArray(function(err, result) {
      if(err){
        res.json(err);
      }
      res.json(result);
    });
  });

  app.post("/addCharacters",function(req, res){
    console.dir(req.body);
    var collection = db.collection('documents');

    collection.insert(req.body, function(err, result) {
      if(err){
        res.json(err);
      }
      res.json(result);
    });
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
