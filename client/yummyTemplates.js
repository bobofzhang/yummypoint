
Template.yummy_coins.D3test = function () {
  console.log(Datastores.findOne({}));
  return Meteor.call('makeDataSet');
};

Template.yummy_coins.events({
  'click input.add': function () {
    return Meteor.call('D3testinit');
  }
});
