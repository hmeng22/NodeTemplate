var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
if (new Boolean(process.env.IS_TESTING)) {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> -------------------- <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>   TESTING DATABASE   <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>   TESTING DATABASE   <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>   TESTING DATABASE   <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> -------------------- <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  mongoose.connect(process.env.MONGODB_ADDRESS_TESTING);
} else {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> -------------------- <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> DEV || PROD DATABASE <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> DEV || PROD DATABASE <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> DEV || PROD DATABASE <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> -------------------- <<<<<<<<<<<<<<<<<<<<<<<<<<<');
  mongoose.connect(process.env.MONGODB_ADDRESS);
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db : mongodb connected. \n\n\n');
});
