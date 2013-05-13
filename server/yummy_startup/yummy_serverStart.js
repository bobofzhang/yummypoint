
var dataArray = [];

Meteor.startup(function () {
  Slides.remove({});
  Shows.remove({});
  // Prices.remove({});
  if (dataArray.length == null || dataArray.length < 1) {
    var newData = Prices.find({}, {limit: 150}).fetch();
    var newDataArray = _.map(newData, function(obj) {
      var newObj = _.pick(obj, 'price', 'date');
      var newArray = _.values(newObj);
      dataArray.push(newArray);
    })
    // return newDataArray && dataArray;
    return Datastores.insert({
      priceData: dataArray
    })
  }
});  