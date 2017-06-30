var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListingSchema = new Schema({
  item: {
    type: String,
    trim: true,
    required: "item Required"
  },
  bulk_qty: {
    type: Number,
    required: "Bulk Qty Required"
  },
  split_qty: {
    type: Number,
    required: "Bulk Qty Required"
  },
  reserved:{
    type: Boolean,
    default: false
  },
  matched: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

var Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
