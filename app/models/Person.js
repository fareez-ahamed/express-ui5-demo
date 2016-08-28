// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Person', {
    name  : {type : String, default: ''},
    gender: {type : String, default: ''},
    age   : {type : String, default: ''}
});
