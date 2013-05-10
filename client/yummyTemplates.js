
// Template.yummy_coins.prices = function () {
//   // console.log(Prices.find({}, {limit: 30}).fetch());
//   return Prices.find({}, {limit: 30}, {sort : {date: 1}} );
// };

// Template.yummy_coins.d3chart = function () {
//   return (console.log('hi'));
// };

Template.yummy_coins.D3test = function () {
  console.log('i am in the function');
  return Meteor.call('D3testinit');
};

// Template.yummy_coins.events({
//   'click input' : function () {
//     // template data, if any, is available in 'this'
//     if (typeof console !== 'undefined')
//       console.log("You pressed the button");
//   }
// });