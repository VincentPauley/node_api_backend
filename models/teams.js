var mongoose = require('mongoose');

// team schema
var teamSchema = mongoose.Schema({
  teamName : {
    type : String,
    required : true,
  },
  create_date : {
    type: Date,
    default: Date.now
  }
});

var team = module.exports = mongoose.model('team', teamSchema);

// get teamSchema
module.exports.getTeams = function(callback, limit) {
  team.find(callback).limit(limit);
}
