var express = require('express'),
  app = express(),
  bodyParser = require('body-parser')
  mongoose = require('mongoose');

  var Contact = require('./models/contact.js');
  //connect to db
  // mongoose.connect(
  //   process.env.MONGOLAB_URI ||
  //   process.env.MONGOHQ_URL || 
  //   'mongodb://localhost/contact');

  //bodyParser middleware
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/public'));

  // //get contacts
  // app.get('/api/contacts', function (req, res) {
  //   Contact.find({}, function (err, contacts) {
  //     res.json(contacts);
  //   })
  // });

  // //post contact
  // app.post('/api/contact', function (req, res) {
  //   var newContact = new Contact({
  //     fullName: req.body.fullName,
  //     email: req.body.Email,
  //     message: req.body.Message
  //   });
  //   newContact.save(function (err, SavedContact) {
  //     res.json(SavedContact);
  //     res.json(err);
  //   })
  // });

//checks where the front pages are at
app.use(express.static(__dirname + '/public'));

//loads front page
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html')
})
//listen on port
app.listen(process.env.port || 3005, function() {
  console.log('server started on 3005');
});
