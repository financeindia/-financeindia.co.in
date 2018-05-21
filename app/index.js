var express = require('express'),
  app = express(),
  http = require('http'),
  bodyParser = require('body-parser'),
  nodemailer = require('nodemailer'),
  httpServer = http.Server(app);

// create reusable transporter object using the default SMTP transport

var smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'financegurumail@gmail.com',
    pass: 'friends@1'
  }
};

var transporter = nodemailer.createTransport(smtpConfig);


//Setup ip adress and port
var ipaddress;

function initIPAdress() {
  var adr = process.env.OPENSHIFT_NODEJS_IP;
  if (typeof adr === "undefined") {
    console.warn('No OPENSHIFT_NODEJS_IP var, using localhost');
    adr = 'localhost';
  }
  ipaddress = adr;
}

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// function to load home page
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/static/index.html');
});

// function to load google page
app.get('/googlebd44e47e58f8e302.html', function(req, res) {
  res.sendfile(__dirname + '/static/googlebd44e47e58f8e302.html');
});

// function to load site map
app.get('/sitemap.xml', function(req, res) {
  res.sendfile(__dirname + '/static/sitemap.html');
});

// function to send email
app.post('/email', function(req, res) {

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;', // sender address
    to: 'financeindia.co.in@gmail.com', // list of receivers
    subject: 'New query on website', // Subject line
    html: 'Hi Hitesh,<br><br> <strong>You recieved a new query from :</strong> <br><br> Name : ' + req.body.name + ' <br> Email : ' + req.body.email + ' <br> Phone Number : ' + req.body.phone + ' <br> Message : ' + req.body.msg + '<br> Source : ' + req.body.source + '<br><br>Thanks'
  };


  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error(error);
      return res.send(error);
    } else {
      res.status(200).json({
        "success": "send"
      });
    }
  });
})

initIPAdress();

app.listen(port, ipaddress, function() {
  console.log('%s: Node server started on %s:%d ...',
    Date(Date.now()), ipaddress, port);
});
