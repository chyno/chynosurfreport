s = require('express');
var router = express.Router();


 //For testing
router.get('/api/helloWorld', function (req, res) 
{ 
    res.send('Hello World'); 
});



module.exports = router;

