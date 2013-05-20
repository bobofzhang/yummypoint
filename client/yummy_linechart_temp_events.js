

Template.yummy_coins.events({
  'click .line-chart': function () {
    $('.create_graph').remove();
    $('.make-start').append('<div class="line-chart-options"><div class="row"><div class="span12"> <span class="line-chart"> <h1> Line Chart</h1></span></div></div></div>');
    $('.make-start').append('<div class="line-chart-data-sources"><div class="row"><div class="span6"> Upload a File </div><div class="span6"><span class="live-data-header"> <h3> Use Live Data Sources </h3> </span></div></div></div>');
    $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span6"></div><div class="span2"><span class="twitter"> <h3> Twitter </h3> </span></div><div class="span2"><span class="bit-coins"> <h3> Bit Coins </h3> </span></div><div class="span2"><span class="bitly"> <h3> Bitly </h3> </span></div></div></div>');
    // Meteor.call("getBitCoinData");
    // return Meteor.call('D3testinit');
  }
})

Template.yummy_coins.events({
  'click .bitly': function () {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    //$('.make-start').append('<div class="chosen-data-source"><div class="row"><div class="span12"> <h3> Live Data </h3></span></div></div></div>');
    $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span12"> <span class="bitly-hot"> <h3> Bitly </h3> </span></div></div></div>');
    $('.make-start').append('<div class="save-bitly-slide"><div class="row"><div class="span12"> <span class="save-bitly-slide"> <p> That Looks Sick. Put that in Yummy </p> </span></div></div></div>');
    var bitTags = Hotbits.find({}, { sort: { time: -1 }, limit: 10 }).fetch();
    console.log(bitTags);
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3'); });
  }
})

Template.yummy_coins.events({
  'click .bit-coins': function () {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    $('.make-start').append('<div class="chosen-data-source"><div class="row"><div class="span12"> <h3> Live Data </h3></span></div></div></div>');
    $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span12"> <span class="bit-coins"> <h3> Bit Coins </h3> </span></div></div></div>');
    return Meteor.call('D3testinit');
  }
})

// Template.yummy_coins.events({
//   'click .save-bitly-slide': function() {
//     console.log('you are saving a bitly slide');
//     Charts.insert({
//       show: currentShow, 
//       slide: slideCount

//     })
//   }
// })



